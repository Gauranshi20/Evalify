import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import type { UserRole } from "@/features/auth/types/auth.types";
import authService from "@/features/auth/services/auth.service";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: string;
  avatar?: string;
  rollNumber?: string;
  linkedStudent?: {
    id: string;
    name: string;
    email: string;
    rollNumber?: string;
    status: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  rollNumber?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const json = await response.json();
          if (json.success && json.data.user) {
            setUser(json.data.user);
            localStorage.setItem("user", JSON.stringify(json.data.user));
          }
        } else {
          logout();
        }
      } catch (error) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }
    } catch (error) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await authService.login({ email, password });
      

       await loadUser();
      toast.success("Login successful");

      const role = response.data.user.role;
      switch (role) {
        case "teacher":
          navigate("/teacher/dashboard");
          break;
        case "student":
          navigate("/student/dashboard");
          break;
        case "parent":
          navigate("/parent/dashboard");
          break;
        case "admin":
          navigate("/admin/dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      const response = await authService.register({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: data.role,
        rollNumber: data.rollNumber,
      });

    await loadUser();

      toast.success("Registration successful");

      const role = response.data.user.role;
      switch (role) {
        case "student":
          navigate("/student/dashboard");
          break;
        case "parent":
          navigate("/parent/dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  const refreshUser = async () => {
    await loadUser();
  };

  const value: AuthContextType = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    hasRole,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
