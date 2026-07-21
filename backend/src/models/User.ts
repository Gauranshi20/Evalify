import mongoose, { Schema, Document } from "mongoose";

export type UserRole = "teacher" | "student" | "parent" | "admin";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;

  status: "active" | "inactive" | "suspended";

  avatar?: string;

  rollNumber?: string;

  linkedStudentId?: mongoose.Types.ObjectId;

  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },

    role: {
      type: String,
      enum: ["teacher", "student", "parent", "admin"],
      default: "student",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "suspended"],
      default: "active",
    },

    avatar: {
      type: String,
      default: null,
    },

    rollNumber: {
      type: String,
      sparse: true,
      unique: true,
      trim: true,
    },

    linkedStudentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", UserSchema);