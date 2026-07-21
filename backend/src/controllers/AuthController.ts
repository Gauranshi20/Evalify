import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User, { UserRole } from "../models/User";
import { generateToken } from "../utils/generateToken";
import type { AuthRequest } from "../middleware/AuthMiddleware";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
      role,
      rollNumber,
    } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const allowedPublicRoles: UserRole[] = ["student", "parent"];
    
    if (!allowedPublicRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role for public registration",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    if (role === "parent") {
      if (!rollNumber) {
        return res.status(400).json({
          success: false,
          message: "Student roll number is required for parent registration",
        });
      }

      const student = await User.findOne({ 
        rollNumber: rollNumber.trim(),
        role: "student" 
      });

      if (!student) {
        return res.status(400).json({
          success: false,
          message: "Invalid student roll number",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData: any = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role,
    };

    if (role === "student" && rollNumber) {
      const existingRollNumber = await User.findOne({ rollNumber: rollNumber.trim() });
      if (existingRollNumber) {
        return res.status(400).json({
          success: false,
          message: "Roll number already exists",
        });
      }
      userData.rollNumber = rollNumber.trim();
    }

    if (role === "parent" && rollNumber) {
      const student = await User.findOne({ 
        rollNumber: rollNumber.trim(),
        role: "student" 
      });
      if (student) {
        userData.linkedStudentId = student._id;
      }
    }

    const user = await User.create(userData);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        token: generateToken(user._id.toString()),
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
        },
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        success: false,
        message: "Account is not active",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token: generateToken(user._id.toString()),
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
          avatar: user.avatar,
        },
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getCurrentUser(
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

    const user = await User.findById(req.user.id).select("-password").populate("linkedStudentId");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const responseData: any = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      avatar: user.avatar,
      rollNumber: user.rollNumber,
      createdAt: (user as any).createdAt,
      updatedAt: (user as any).updatedAt,
    };

    if (user.role === "parent" && (user as any).linkedStudentId) {
      responseData.linkedStudent = {
        id: (user as any).linkedStudentId._id.toString(),
        name: (user as any).linkedStudentId.name,
        email: (user as any).linkedStudentId.email,
        rollNumber: (user as any).linkedStudentId.rollNumber,
        status: (user as any).linkedStudentId.status,
      };
    }

    return res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: {
        user: responseData,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function logout(
  req: Request,
  res: Response
) {
  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
}