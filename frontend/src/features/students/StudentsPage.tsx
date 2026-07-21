import { Users } from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard";
import StudentsTable from "./StudentsTable";

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Teacher Dashboard
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
              Student Management
            </h1>

            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
              View registered students, monitor their academic performance,
              evaluation history and overall progress from one place.
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl">
            <Users size={34} />
          </div>

        </section>

        <StudentsTable />

      </div>
    </DashboardLayout>
  );
}