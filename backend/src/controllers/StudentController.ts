import { Response } from "express";
import User from "../models/User";
import Evaluation from "../models/Evaluation";
import type { AuthRequest } from "../middleware/AuthMiddleware";

export async function getStudents(
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

    const students = await User.find({
      role: "student",
    })
      .select(
        "name email rollNumber status createdAt"
      )
      .lean();

    const data = await Promise.all(
      students.map(async (student) => {
        const evaluations = await Evaluation.find({
          studentId: student._id,
        })
          .select("score createdAt")
          .sort({
            createdAt: -1,
          })
          .lean();

        const totalEvaluations =
          evaluations.length;

        const averageScore =
          totalEvaluations === 0
            ? 0
            : Number(
                (
                  evaluations.reduce(
                    (sum, item) =>
                      sum + item.score,
                    0
                  ) / totalEvaluations
                ).toFixed(1)
              );

        return {
          _id: student._id,
          name: student.name,
          email: student.email,
          rollNumber:
            student.rollNumber ?? "-",
          status: student.status,

          totalEvaluations,

          averageScore,

          lastEvaluation:
            evaluations.length > 0
              ? evaluations[0].createdAt
              : null,

          joinedAt: student.createdAt,
        };
      })
    );

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch students",
    });
  }
}