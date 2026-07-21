import { Router } from "express";

import upload from "../middleware/UploadMiddleware";
import { protect } from "../middleware/AuthMiddleware";

import {
  uploadAnswerSheet,
  getEvaluations,
  getEvaluationById,
  getStudentEvaluations,
  getStudentAnalytics,
} from "../controllers/EvaluationController";

const router = Router();

/*
  Upload Question Paper + Answer Sheet
*/
router.post(
  "/upload",
  protect,
  upload.fields([
    {
      name: "questionPaper",
      maxCount: 1,
    },
    {
      name: "answerSheet",
      maxCount: 1,
    },
  ]),
  uploadAnswerSheet
);

/*
  Teacher Dashboard
*/
router.get("/", protect, getEvaluations);

/*
  Student Dashboard
*/
router.get(
  "/student",
  protect,
  getStudentEvaluations
);

router.get(
  "/student/analytics",
  protect,
  getStudentAnalytics
);

/*
  Get Single Evaluation
  IMPORTANT:
  Keep this route AFTER /student routes.
*/
router.get(
  "/:id",
  protect,
  getEvaluationById
);

export default router;