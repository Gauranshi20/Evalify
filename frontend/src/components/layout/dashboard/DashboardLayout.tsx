import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div
      className="
        flex
        min-h-screen
        bg-slate-50
        transition-colors
        duration-300

        dark:bg-slate-950
      "
    >
      {/* ================= Sidebar ================= */}

      <Sidebar />

      {/* ================= Main Content ================= */}

      <div className="flex min-w-0 flex-1 flex-col">

        <Topbar />

        <main
          className="
            flex-1
            overflow-y-auto
            bg-gradient-to-br
            from-slate-50
            via-slate-100
            to-slate-50
            p-8
            transition-colors
            duration-300

            dark:from-slate-950
            dark:via-slate-900
            dark:to-slate-950
          "
        >
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}