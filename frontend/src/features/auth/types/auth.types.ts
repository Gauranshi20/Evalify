export type UserRole =
  | "teacher"
  | "student"
  | "parent"
  | "admin";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  rollNumber?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: string;
  avatar?: string;
  rollNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}