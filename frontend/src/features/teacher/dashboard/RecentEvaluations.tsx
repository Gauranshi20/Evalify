import { CheckCircle2, Eye } from "lucide-react";
import { useEvaluations } from "@/hooks/useEvaluations";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function RecentEvaluations() {
  const { data, loading, error } = useEvaluations();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-6 flex items-center justify-between">
          <Skeleton className="h-7 w-48 dark:bg-slate-700" />
          <Skeleton className="h-5 w-16 dark:bg-slate-700" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-12 w-32 dark:bg-slate-700" />
              <Skeleton className="h-12 w-24 dark:bg-slate-700" />
              <Skeleton className="h-12 w-16 dark:bg-slate-700" />
              <Skeleton className="h-12 w-20 dark:bg-slate-700" />
              <Skeleton className="h-12 w-24 dark:bg-slate-700" />
              <Skeleton className="h-12 w-16 dark:bg-slate-700" />
            </div>
          ))}
        </div>

      </div>
    );
  }


  if (error) {
    return (
      <div className="
        rounded-3xl
        border
        border-red-200
        bg-red-50
        p-6
        shadow-sm

        dark:border-red-900
        dark:bg-red-950
      ">

        <p className="text-red-600 dark:text-red-300">
          Failed to load evaluations: {error}
        </p>

      </div>
    );
  }


  if (!data || data.length === 0) {
    return (
      <div className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-900
      ">

        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Recent Evaluations
        </h2>

        <p className="text-slate-500 dark:text-slate-400">
          No evaluations found
        </p>

      </div>
    );
  }


  const recentEvaluations = data.slice(0, 10);


  return (
    <div className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl

      dark:border-slate-700
      dark:bg-slate-900
    ">


      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Recent Evaluations
        </h2>


        <button
          className="
            text-sm
            font-semibold
            text-blue-600
            transition

            hover:text-blue-700

            dark:text-blue-400
            dark:hover:text-blue-300
          "
        >
          View All
        </button>

      </div>



      <div className="overflow-x-auto rounded-2xl">

        <table className="w-full">

          <thead>

            <tr
              className="
                border-b
                border-slate-200
                text-left
                text-sm
                text-slate-500

                dark:border-slate-700
                dark:text-slate-400
              "
            >

              <th className="pb-4">
                Student
              </th>

              <th className="pb-4">
                Subject
              </th>

              <th className="pb-4">
                Score
              </th>

              <th className="pb-4">
                Similarity
              </th>

              <th className="pb-4">
                Created
              </th>

              <th className="pb-4">
                Action
              </th>

            </tr>

          </thead>


          <tbody>

            {recentEvaluations.map((item) => (

              <tr
                key={item._id}
                className="
                  border-b
                  border-slate-100
                  last:border-none

                  transition
                  hover:bg-slate-50

                  dark:border-slate-800
                  dark:hover:bg-slate-800/50
                "
              >

                <td className="py-5 font-semibold text-slate-800 dark:text-slate-200">
                  {item.studentName}
                </td>


                <td className="py-5 text-slate-600 dark:text-slate-400">
                  {item.subject}
                </td>


                <td className="py-5 text-slate-700 dark:text-slate-300">
                  {item.score ?? 0}
                </td>


                <td className="py-5">

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-emerald-100
                      px-3
                      py-1
                      text-sm
                      font-medium
                      text-emerald-700

                      dark:bg-emerald-950
                      dark:text-emerald-300
                    "
                  >

                    <CheckCircle2 size={15} />

                    {item.similarity?.toFixed(1) ?? 0}%

                  </span>

                </td>


                <td className="py-5 text-slate-600 dark:text-slate-400">

                  {formatDistanceToNow(
                    new Date(item.createdAt),
                    {
                      addSuffix: true,
                    }
                  )}

                </td>


                <td className="py-5">

                  <button
                    onClick={() =>
                      navigate(`/teacher/evaluation/${item._id}`)
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-slate-100
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                      transition

                      hover:bg-slate-200

                      dark:bg-slate-800
                      dark:text-slate-200
                      dark:hover:bg-slate-700
                    "
                  >

                    <Eye size={16} />

                    View

                  </button>

                </td>


              </tr>

            ))}

          </tbody>


        </table>

      </div>


    </div>
  );
}