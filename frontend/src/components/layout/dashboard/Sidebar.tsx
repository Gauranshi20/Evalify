import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/app/providers/AuthProvider";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  return (
    <aside
      className="
        sticky top-0
        flex h-screen w-72 flex-col
        border-r border-slate-200
        bg-white/90
        backdrop-blur-xl
        transition-colors duration-300

        dark:border-slate-800
        dark:bg-slate-950/95
      "
    >
      {/* Logo */}

      <div className="border-b border-slate-200 px-6 py-6 dark:border-slate-800">
        <Logo />
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-5 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          {user?.role
            ? `${user.role} Panel`
            : "Dashboard"}
        </p>

        <nav className="space-y-2">

          {/* Teacher */}

          {user?.role === "teacher" && (
            <>
              <SidebarItem
                to="/teacher/dashboard"
                icon={LayoutDashboard}
                label="Dashboard"
              />

              <SidebarItem
                to="/teacher/students"
                icon={Users}
                label="Students"
              />

              <SidebarItem
                to="/teacher/evaluation"
                icon={ClipboardCheck}
                label="AI Evaluation"
              />

              <SidebarItem
                to="/teacher/results"
                icon={FileText}
                label="Results"
              />

              <SidebarItem
                to="/teacher/analytics"
                icon={BarChart3}
                label="Analytics"
              />

              <SidebarItem
                to="/teacher/settings"
                icon={Settings}
                label="Settings"
              />
            </>
          )}

          {/* Student */}

          {user?.role === "student" && (
            <>
              <SidebarItem
                to="/student/dashboard"
                icon={LayoutDashboard}
                label="Dashboard"
              />

              <SidebarItem
                to="/teacher/results"
                icon={FileText}
                label="Results"
              />

              <SidebarItem
                to="/teacher/analytics"
                icon={BarChart3}
                label="Analytics"
              />
            </>
          )}

          {/* Parent */}

          {user?.role === "parent" && (
            <SidebarItem
              to="/parent/dashboard"
              icon={LayoutDashboard}
              label="Dashboard"
            />
          )}

          {/* Admin */}

          {user?.role === "admin" && (
            <>
              <SidebarItem
                to="/admin/dashboard"
                icon={LayoutDashboard}
                label="Dashboard"
              />

              <SidebarItem
                to="/admin/users"
                icon={Users}
                label="User Management"
              />

              <SidebarItem
                to="/admin/settings"
                icon={Settings}
                label="Settings"
              />
            </>
          )}

        </nav>
      </div>

      {/* Bottom User Card */}

      <div className="border-t border-slate-200 p-5 dark:border-slate-800">

        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-slate-900">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 font-bold text-white">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {user?.name || "User"}
            </p>

            <p className="truncate text-xs capitalize text-slate-500 dark:text-slate-400">
              {user?.role}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="
            flex w-full items-center justify-center gap-2
            rounded-xl
            border border-red-200
            px-4 py-3
            text-sm font-semibold
            text-red-600
            transition-all duration-300

            hover:bg-red-50

            dark:border-red-900
            dark:hover:bg-red-900/20
          "
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </aside>
  );
}