import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import { useAuth } from "@/app/providers/AuthProvider";


type UserRole =
  | "teacher"
  | "student"
  | "parent"
  | "admin";


interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: UserRole[];
}



export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {


  const {
    user,
    loading,
    isAuthenticated,
  } = useAuth();



  if (loading) {

    return (

      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-50
          dark:bg-slate-950
        "
      >

        <div
          className="
            h-12
            w-12
            animate-spin
            rounded-full
            border-4
            border-blue-200
            border-t-blue-600
          "
        />

      </div>

    );

  }



  if (!isAuthenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }



  if (
    !user ||
    !allowedRoles.includes(
      user.role as UserRole
    )
  ) {


    const dashboardRoutes = {

      admin:
        "/admin/dashboard",

      teacher:
        "/teacher/dashboard",

      student:
        "/student/dashboard",

      parent:
        "/parent/dashboard",

    };



    return (

      <Navigate
        to={
          dashboardRoutes[
            user?.role as UserRole
          ] || "/"
        }
        replace
      />

    );

  }



  return <>{children}</>;

}