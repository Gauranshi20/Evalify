import { toast } from "sonner";
import type {
  LoginRequest,
  RegisterRequest,
} from "../types/auth.types";

const API = "http://localhost:5000/api/auth";

class AuthService {
  async login(data: LoginRequest) {
    const response = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      toast.error(json.message || "Login failed");
      throw new Error(json.message || "Login failed");
    }

    if (json.data && json.data.token) {
      localStorage.setItem("token", json.data.token);
    }

    if (json.data && json.data.user) {
      localStorage.setItem("user", JSON.stringify(json.data.user));
    }

    

    return json;
  }

  async register(data: RegisterRequest) {
    const requestBody: any = {
      name: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: data.role,
    };

    if (data.rollNumber) {
      requestBody.rollNumber = data.rollNumber;
    }

    const response = await fetch(`${API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();

    if (!response.ok) {
      toast.error(json.message || "Registration failed");
      throw new Error(json.message || "Registration failed");
    }

    if (json.data && json.data.token) {
      localStorage.setItem("token", json.data.token);
    }

    if (json.data && json.data.user) {
      localStorage.setItem("user", JSON.stringify(json.data.user));
    }

    

    return json;
  }

  async getCurrentUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${API}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || "Failed to get user");
    }

    if (json.data && json.data.user) {
      localStorage.setItem("user", JSON.stringify(json.data.user));
    }

    return json;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  getUser() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getRole() {
    const user = this.getUser();
    return user?.role || null;
  }

  isTeacher() {
    return this.getRole() === "teacher";
  }

  isStudent() {
    return this.getRole() === "student";
  }

  isParent() {
    return this.getRole() === "parent";
  }

  isAdmin() {
    return this.getRole() === "admin";
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
}

export default new AuthService();