import { User, BookOpen, TrendingUp, Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Student } from "@/services/api";

interface StudentRowProps {
  student: Student;
}

export default function StudentRow({
  student,
}: StudentRowProps) {
  return (
    <tr className="border-b border-slate-200 transition-all duration-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/60">

      {/* Student */}

      <td className="px-6 py-5">
        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 font-semibold text-white shadow">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {student.name}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {student.email}
            </p>
          </div>

        </div>
      </td>

      {/* Roll Number */}

      <td className="px-6 py-5">
        <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {student.rollNumber || "-"}
        </span>
      </td>

      {/* Evaluations */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-2">

          <BookOpen
            size={17}
            className="text-blue-600"
          />

          <span className="font-medium text-slate-700 dark:text-slate-300">
            {student.totalEvaluations}
          </span>

        </div>

      </td>

      {/* Average Score */}

      <td className="px-6 py-5">

        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">

          <TrendingUp size={16} />

          {student.averageScore}

        </div>

      </td>

      {/* Last Evaluation */}

      <td className="px-6 py-5">

        {student.lastEvaluation ? (

          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">

            <Calendar size={16} />

            {formatDistanceToNow(
              new Date(student.lastEvaluation),
              {
                addSuffix: true,
              }
            )}

          </div>

        ) : (

          <span className="text-slate-400 dark:text-slate-500">
            Never Evaluated
          </span>

        )}

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            student.status === "active"
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
              : student.status === "inactive"
              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
              : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300"
          }`}
        >
          {student.status}
        </span>

      </td>

    </tr>
  );
}