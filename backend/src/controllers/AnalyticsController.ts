import { Response } from "express";
import Evaluation from "../models/Evaluation";
import type { AuthRequest } from "../middleware/AuthMiddleware";

export async function getAnalytics(
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
      teacherId: req.user.id,
    }).sort({
      createdAt: 1,
    });

    const total = evaluations.length;

    const averageScore =
      total === 0
        ? 0
        : evaluations.reduce(
            (sum, item) => sum + item.score,
            0
          ) / total;

    const averageSimilarity =
      total === 0
        ? 0
        : evaluations.reduce(
            (sum, item) => sum + item.similarity,
            0
          ) / total;

    const averageConfidence =
      total === 0
        ? 0
        : evaluations.reduce(
            (sum, item) => sum + item.confidence,
            0
          ) / total;

    // Monthly Performance
    const monthlyMap = new Map<string, number>();

    evaluations.forEach((evaluation) => {
      const month = new Date(
        evaluation.createdAt
      ).toLocaleString("en-US", {
        month: "short",
      });

      monthlyMap.set(
        month,
        (monthlyMap.get(month) || 0) + 1
      );
    });

    const performance = Array.from(
      monthlyMap.entries()
    ).map(([month, evaluations]) => ({
      month,
      evaluations,
    }));

    return res.json({
      success: true,
      analytics: {
        totalEvaluations: total,

        averageScore: Number(
          averageScore.toFixed(1)
        ),

        averageSimilarity: Number(
          averageSimilarity.toFixed(1)
        ),

        averageConfidence: Number(
          averageConfidence.toFixed(1)
        ),

        highestScore:
          total === 0
            ? 0
            : Math.max(
                ...evaluations.map(
                  (e) => e.score
                )
              ),

        lowestScore:
          total === 0
            ? 0
            : Math.min(
                ...evaluations.map(
                  (e) => e.score
                )
              ),

        performance,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Analytics failed",
    });
  }
}