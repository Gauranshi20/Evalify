import { Skeleton } from "@/components/ui/skeleton";
import { useStudents } from "@/hooks/useStudents";
import StudentRow from "./StudentRow";

export default function StudentsTable() {
  const {
    data,
    loading,
    error,
  } = useStudents();

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex gap-4"
            >
              <Skeleton className="h-12 w-60" />
              <Skeleton className="h-12 w-28" />
              <Skeleton className="h-12 w-24" />
              <Skeleton className="h-12 w-24" />
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-24" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm">
        <p className="text-red-600">
          {error}
        </p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-500">
          No students found.
        </p>
      </div>
    );
  }

  return (
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all dark:border-slate-700 dark:bg-slate-900">

    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-700">

      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Registered Students
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Total Students : {data.length}
        </p>
      </div>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="bg-slate-50 text-left text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">

            <th className="px-6 py-4">
              Student
            </th>

            <th className="px-6 py-4">
              Roll No
            </th>

            <th className="px-6 py-4">
              Evaluations
            </th>

            <th className="px-6 py-4">
              Average
            </th>

            <th className="px-6 py-4">
              Last Evaluation
            </th>

            <th className="px-6 py-4">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((student) => (
            <StudentRow
              key={student._id}
              student={student}
            />
          ))}

        </tbody>

      </table>

    </div>

  </div>
);
}