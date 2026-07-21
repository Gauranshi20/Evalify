import { Router } from "express";
import { protect, authorize } from "../middleware/AuthMiddleware";
import { getParentDashboard } from "../controllers/ParentController";

const router = Router();

router.get(
  "/dashboard",
  protect,
  authorize("parent"),
  getParentDashboard
);

export default router;