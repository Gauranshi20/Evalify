import { Router } from "express";

import {
  login,
  register,
  getCurrentUser,
  logout,
} from "../controllers/AuthController";
import { protect } from "../middleware/AuthMiddleware";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/me", protect, getCurrentUser);

router.post("/logout", logout);

export default router;