import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      <Card className="w-full max-w-md rounded-3xl border border-slate-200/70 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90">

        <CardContent className="p-8">
          {children}
        </CardContent>

      </Card>

    </div>
  );
}