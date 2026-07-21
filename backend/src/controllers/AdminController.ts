import { Request, Response } from "express";
import User from "../models/User";
import Evaluation from "../models/Evaluation";
import bcrypt from "bcryptjs";
import { UserRole } from "../models/User";

export async function getAdminDashboard(
  req: Request,
  res: Response
) {
  try {
    const [
      students,
      teachers,
      parents,
      admins,
      evaluations,
    ] = await Promise.all([
      User.countDocuments({ role: "student" }),
      User.countDocuments({ role: "teacher" }),
      User.countDocuments({ role: "parent" }),
      User.countDocuments({ role: "admin" }),
      Evaluation.countDocuments(),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        students,
        teachers,
        parents,
        admins,
        evaluations,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard.",
    });
  }
}
// ==============================
// Get All Users
// ==============================
export async function getAllUsers(
  req: Request,
  res: Response
) {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users.",
    });
  }
}
// ==============================
// Create User
// ==============================
export async function createUser(
  req: Request,
  res: Response
) {
  try {
    const {
      name,
      email,
      password,
      role,
      rollNumber,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields are mandatory.",
      });
    }

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role as UserRole,
      rollNumber:
        role === "student"
          ? rollNumber
          : undefined,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create user.",
    });
  }
}
export async function updateUser(
  req: Request,
  res: Response
) {
  try {
    const { id } = req.params;

    const updated = await User.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      data: updated,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success:false,
      message:"Failed to update user"
    });
  }
}


export async function deleteUser(
  req: Request,
  res: Response
) {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.json({
      success:true,
      message:"User deleted"
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success:false,
      message:"Delete failed"
    });
  }
}

export async function toggleUserStatus(
  req: Request,
  res: Response
) {
  try {

    const user =
      await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success:false,
        message:"User not found"
      });
    }

    user.status =
      user.status === "active"
      ? "suspended"
      : "active";

    await user.save();

    return res.json({
      success:true,
      data:user
    });

  } catch(err){

    console.error(err);

    return res.status(500).json({
      success:false,
      message:"Failed"
    });

  }
}

// ==============================
// Link Parent To Student
// ==============================
export async function linkParentToStudent(
  req: Request,
  res: Response
) {
  try {
    const { parentId, studentId } = req.body;

    if (!parentId || !studentId) {
      return res.status(400).json({
        success: false,
        message: "Parent and Student are required.",
      });
    }

    const parent = await User.findById(parentId);

    if (!parent || parent.role !== "parent") {
      return res.status(404).json({
        success: false,
        message: "Parent not found.",
      });
    }

    const student = await User.findById(studentId);

    if (!student || student.role !== "student") {
      return res.status(404).json({
        success: false,
        message: "Student not found.",
      });
    }

    parent.linkedStudentId = student._id;

    await parent.save();

    return res.json({
      success: true,
      message: "Parent linked successfully.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to link parent.",
    });
  }
}

// ==============================
// Get Parents
// ==============================

export async function getParents(
  req: Request,
  res: Response
) {
  try {
    const parents = await User.find({
      role: "parent",
    })
      .select("name email linkedStudentId")
      .sort({ name: 1 });

    return res.json({
      success: true,
      data: parents,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch parents.",
    });
  }
}

// ==============================
// Get Students
// ==============================

export async function getStudentsForLinking(
  req: Request,
  res: Response
) {
  try {
    const students = await User.find({
      role: "student",
    })
      .select("name email rollNumber")
      .sort({ rollNumber: 1 });

    return res.json({
      success: true,
      data: students,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch students.",
    });
  }
}