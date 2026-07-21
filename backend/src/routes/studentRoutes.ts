import { Router } from "express";

import { protect, authorize } from "../middleware/AuthMiddleware";
import { getStudents } from "../controllers/StudentController";

const router = Router();

/*
  Teacher -> Students
*/
router.get(
  "/",
  protect,
  authorize("teacher", "admin"),
  getStudents
);

export default router;