import { Router } from "express";
import { protect } from "../middleware/AuthMiddleware";
import { getAnalytics } from "../controllers/AnalyticsController";

const router = Router();

router.get("/", protect, getAnalytics);

export default router;