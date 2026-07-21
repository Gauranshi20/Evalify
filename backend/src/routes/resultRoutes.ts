import { Router } from "express";
import { protect } from "../middleware/AuthMiddleware";
import { getResults } from "../controllers/ResultController";

const router = Router();

router.get("/", protect, getResults);

export default router;