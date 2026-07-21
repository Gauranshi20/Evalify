import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import NotFoundPage from "@/pages/NotFoundPage";

import SettingsPage from "@/features/settings";

import TeacherDashboard from "@/features/teacher/dashboard";
import EvaluationPage from "@/features/evaluation";
import ResultsPage from "@/features/results";
import AnalyticsPage from "@/features/analytics";
import EvaluationDetails from "@/features/teacher/dashboard/EvaluationDetails";

import StudentDashboard from "@/features/student/dashboard";
import ParentDashboard from "@/features/parent/dashboard";

import AdminDashboard from "@/features/admin/dashboard";
import AdminUsersPage from "@/features/admin/users";

import StudentsPage from "@/features/students";

import ProtectedRoute from "@/features/auth/components/ProtectedRoute";


export function AppRouter() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />



      {/* Teacher */}

      <Route
        path="/teacher/dashboard"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/teacher/evaluation"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <EvaluationPage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/teacher/evaluation/:id"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <EvaluationDetails />
          </ProtectedRoute>
        }
      />


      <Route
        path="/teacher/results"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <ResultsPage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/teacher/students"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <StudentsPage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/teacher/analytics"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <AnalyticsPage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/teacher/settings"
        element={
          <ProtectedRoute allowedRoles={["teacher"]}>
            <SettingsPage />
          </ProtectedRoute>
        }
      />



      {/* Student */}

      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute allowedRoles={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />



      {/* Parent */}

      <Route
        path="/parent/dashboard"
        element={
          <ProtectedRoute allowedRoles={["parent"]}>
            <ParentDashboard />
          </ProtectedRoute>
        }
      />



      {/* Admin */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminUsersPage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <SettingsPage />
          </ProtectedRoute>
        }
      />



      {/* Old Routes */}

      <Route
        path="/dashboard"
        element={
          <Navigate
            to="/teacher/dashboard"
            replace
          />
        }
      />


      <Route
        path="/evaluation"
        element={
          <Navigate
            to="/teacher/evaluation"
            replace
          />
        }
      />


      <Route
        path="/results"
        element={
          <Navigate
            to="/teacher/results"
            replace
          />
        }
      />


      <Route
        path="/analytics"
        element={
          <Navigate
            to="/teacher/analytics"
            replace
          />
        }
      />



      {/* 404 */}

      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>
  );
}