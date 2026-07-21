import { Response } from "express";
import { AuthRequest } from "../middleware/AuthMiddleware";
import User from "../models/User";
import Evaluation from "../models/Evaluation";

export async function getParentDashboard(
  req: AuthRequest,
  res: Response
) {
  try {
    const parent = await User.findById(req.user?.id);

    if (!parent) {
      return res.status(404).json({
        success: false,
        message: "Parent not found",
      });
    }

    if (!parent.linkedStudentId) {
      return res.status(400).json({
        success: false,
        message: "No student linked.",
      });
    }

    const student = await User.findById(
      parent.linkedStudentId
    ).select("-password");

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const evaluations = await Evaluation.find({
      studentId: student._id,
    }).sort({
      createdAt: -1,
    });

    const totalEvaluations = evaluations.length;

    const averageScore =
      totalEvaluations === 0
        ? 0
        : evaluations.reduce(
            (sum, e) => sum + e.score,
            0
          ) / totalEvaluations;

    const highestScore =
      totalEvaluations === 0
        ? 0
        : Math.max(...evaluations.map(e => e.score));

    const lowestScore =
      totalEvaluations === 0
        ? 0
        : Math.min(...evaluations.map(e => e.score));

    return res.json({
      success: true,
      data: {
        student,
        analytics: {
          totalEvaluations,
          averageScore,
          highestScore,
          lowestScore,
        },
        evaluations,
      },
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to load parent dashboard",
    });
  }
}