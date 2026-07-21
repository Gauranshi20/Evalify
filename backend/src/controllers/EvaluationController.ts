import { Request, Response } from "express";
import Evaluation from "../models/Evaluation";
import { evaluateAnswer } from "../services/GeminiService";
import { extractPdfText } from "../services/PdfService";
import type { AuthRequest } from "../middleware/AuthMiddleware";

// ==============================
// Upload & Evaluate Answer Sheet
// ==============================
export async function uploadAnswerSheet(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const files = req.files as
      | {
          questionPaper?: Express.Multer.File[];
          answerSheet?: Express.Multer.File[];
        }
      | undefined;

    const questionPaper = files?.questionPaper?.[0];
    const answerSheet = files?.answerSheet?.[0];

    if (!questionPaper || !answerSheet) {
      return res.status(400).json({
        success: false,
        message:
          "Both Question Paper and Answer Sheet are required.",
      });
    }

    const { studentName, subject, studentId } = req.body;

    if (!studentName || !subject) {
      return res.status(400).json({
        success: false,
        message: "Student name and subject are required.",
      });
    }

    const questionText = await extractPdfText(
      questionPaper.path
    );

    const answerText = await extractPdfText(
      answerSheet.path
    );

    if (!questionText.trim() || !answerText.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Unable to extract text from one or both uploaded PDFs.",
      });
    }

    const ai = await evaluateAnswer(
      questionText,
      answerText
    );

    const evaluation = await Evaluation.create({
  teacherId: req.user.id,
  studentId: studentId || null,

  studentName: studentName.trim(),
  subject: subject.trim(),

  questionPaper: questionPaper.filename,
  answerSheet: answerSheet.filename,

  questionText,
  answerText,

  score: ai.score,
  similarity: ai.similarity,
  confidence: ai.confidence,
  feedback: ai.feedback,
  keywords: ai.keywords,

  status: "completed",
  evaluatedAt: new Date(),
});

    return res.status(201).json({
      success: true,
      message: "Evaluation completed successfully.",
      data: evaluation,
    });
  } catch (error) {
    console.error("Upload Evaluation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

// ==============================
// Get All Evaluations
// ==============================
export async function getEvaluations(
  req: Request,
  res: Response
) {
  try {
    const evaluations = await Evaluation.find()
      .populate("teacherId", "name email")
      .populate("studentId", "name rollNumber")
      .sort({
        createdAt: -1,
      })
      .lean();

    return res.status(200).json({
      success: true,
      data: evaluations,
    });
  } catch (error) {
    console.error("Get Evaluations Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch evaluations.",
    });
  }
}

// ==============================
// Get Evaluation By Id
// ==============================
export async function getEvaluationById(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const evaluation = await Evaluation.findById(req.params.id)
      .populate("teacherId", "name email")
      .populate("studentId", "name rollNumber");

    if (!evaluation) {
      return res.status(404).json({
        success: false,
        message: "Evaluation not found.",
      });
    }

    // Teacher can only view own evaluations
    if (
      req.user.role === "teacher" &&
      evaluation.teacherId &&
      evaluation.teacherId.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied.",
      });
    }

    // Student can only view own evaluations
    if (
      req.user.role === "student" &&
      evaluation.studentId &&
      evaluation.studentId.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied.",
      });
    }

    return res.status(200).json({
      success: true,
      data: evaluation,
    });
  } catch (error) {
    console.error("Get Evaluation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch evaluation.",
    });
  }
}

// ==============================
// Get Student Evaluations
// ==============================
export async function getStudentEvaluations(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const evaluations = await Evaluation.find({
      studentId: req.user.id,
    })
      .sort({
        createdAt: -1,
      })
      .lean();

    return res.status(200).json({
      success: true,
      data: evaluations,
    });
  } catch (error) {
    console.error("Student Evaluations Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch student evaluations.",
    });
  }
}

// ==============================
// Get Student Analytics
// ==============================
export async function getStudentAnalytics(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    const evaluations = await Evaluation.find({
      studentId: req.user.id,
    }).lean();

    const total = evaluations.length;

    const averageScore =
      total === 0
        ? 0
        : evaluations.reduce(
            (sum, item) => sum + item.score,
            0
          ) / total;

    const highestScore =
      total === 0
        ? 0
        : Math.max(...evaluations.map((item) => item.score));

    const lowestScore =
      total === 0
        ? 0
        : Math.min(...evaluations.map((item) => item.score));

    return res.status(200).json({
      success: true,
      analytics: {
        totalEvaluations: total,
        averageScore: Number(averageScore.toFixed(2)),
        highestScore,
        lowestScore,
      },
    });
  } catch (error) {
    console.error("Analytics Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch student analytics.",
    });
  }
}