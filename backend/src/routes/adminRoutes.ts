import { Router } from "express";
import { protect, authorize } from "../middleware/AuthMiddleware";
import {
  getAdminDashboard,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
  getParents,
  getStudentsForLinking,
  linkParentToStudent,
} from "../controllers/AdminController";



const router = Router();

/*
 * Admin Dashboard Stats
 */
router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  getAdminDashboard
);
/*
 * Get All Users
 */
router.get(
  "/users",
  protect,
  authorize("admin"),
  getAllUsers
);

router.post(
  "/users",
  protect,
  authorize("admin"),
  createUser
);

router.put(
  "/users/:id",
  protect,
  authorize("admin"),
  updateUser
);

router.patch(
  "/users/:id/status",
  protect,
  authorize("admin"),
  toggleUserStatus
);

router.delete(
  "/users/:id",
  protect,
  authorize("admin"),
  deleteUser
);

router.patch(
  "/parent/link",
  protect,
  authorize("admin"),
  linkParentToStudent
);

router.get(
  "/parents",
  protect,
  authorize("admin"),
  getParents
);

router.get(
  "/students",
  protect,
  authorize("admin"),
  getStudentsForLinking
);

router.post(
  "/link-parent",
  protect,
  authorize("admin"),
  linkParentToStudent
);

export default router;