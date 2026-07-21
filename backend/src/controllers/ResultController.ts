import { Request, Response } from "express";
import Evaluation from "../models/Evaluation";

export async function getResults(
  req: Request,
  res: Response
) {
  try {
    const results = await Evaluation.find()
      .populate("teacherId", "name email")
      .populate("studentId", "name rollNumber")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch results",
    });
  }
}