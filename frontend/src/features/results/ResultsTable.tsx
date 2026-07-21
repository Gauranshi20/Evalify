import type { Evaluation } from "@/services/api";
import StudentResultCard from "./StudentResultCard";

interface Props {
  results: Evaluation[];
  loading: boolean;
}

export default function ResultsTable({
  results,
  loading,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70 backdrop-blur">

            <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">

              <th className="px-6 py-4">Student</th>

              <th className="px-6 py-4">Subject</th>

              <th className="px-6 py-4">Marks</th>

              <th className="px-6 py-4">Similarity</th>

              <th className="px-6 py-4">Confidence</th>

              <th className="px-6 py-4 text-center">Status</th>

            </tr>

          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">

            {loading ? (

              <tr>

                <td
                  colSpan={6}
                  className="px-6 py-20 text-center"
                >
                  <div className="flex flex-col items-center gap-3">

                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Loading evaluation results...
                    </p>

                  </div>
                </td>

              </tr>

            ) : results.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="px-6 py-20 text-center"
                >
                  <div className="space-y-2">

                    <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                      No Results Found
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Upload answer sheets to generate evaluation results.
                    </p>

                  </div>
                </td>

              </tr>

            ) : (

              results.map((student) => (
                <StudentResultCard
                  key={student._id}
                  name={student.studentName}
                  subject={student.subject}
                  marks={String(student.score)}
                  similarity={student.similarity}
                  confidence={student.confidence}
                  status={student.status}
                />
              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}