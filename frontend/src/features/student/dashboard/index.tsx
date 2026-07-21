import { useAuth } from "@/app/providers/AuthProvider";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Award,
  User,
  Mail,
  LogOut,
} from "lucide-react";
import { useStudentAnalytics } from "@/hooks/useStudentAnalytics";
import { useEvaluations } from "@/hooks/useEvaluations";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  const {
    data: analytics,
    loading: analyticsLoading,
    error: analyticsError,
  } = useStudentAnalytics();

  const {
    data: evaluations,
    loading: evaluationsLoading,
    error: evaluationsError,
  } = useEvaluations(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-3 shadow-lg">

              <GraduationCap
                size={24}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="text-xl font-bold">
                Evalify AI
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Student Portal
              </p>

            </div>

          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <LogOut size={17} />
            Logout
          </button>

        </div>

      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        {/* ================= HEADER ================= */}

        <section>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Student Dashboard
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Welcome back 🎓,
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              {user?.name}
            </span>
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
            Monitor your evaluations, academic progress and AI generated
            assessment history from one place.
          </p>

        </section>

        {/* ================= PROFILE ================= */}

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <div className="-mt-10 flex flex-col gap-6 px-8 pb-8 md:flex-row md:items-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl font-bold text-white shadow-xl dark:border-slate-900">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">

              <h3 className="text-3xl font-bold">
                {user?.name}
              </h3>

              <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {user?.email}
                </div>

                <div className="flex items-center gap-2">
                  <User size={16} />
                  {user?.role}
                </div>

                {user?.rollNumber && (
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    {user.rollNumber}
                  </div>
                )}

              </div>

            </div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        {analyticsLoading ? (

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-3xl border bg-white p-6 dark:bg-slate-900"
              >
                <Skeleton className="h-14 w-14 rounded-xl" />
                <Skeleton className="mt-5 h-5 w-28" />
                <Skeleton className="mt-3 h-10 w-20" />
              </div>
            ))}

          </div>

        ) : analyticsError ? (

          <div className="rounded-3xl border border-red-300 bg-red-50 p-6 text-red-600 dark:border-red-900 dark:bg-red-950/30">
            {analyticsError}
          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-xl">

              <BookOpen size={32} />

              <p className="mt-6 text-sm opacity-80">
                Evaluations
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {analytics?.totalEvaluations}
              </h3>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-6 text-white shadow-xl">

              <TrendingUp size={32} />

              <p className="mt-6 text-sm opacity-80">
                Average Score
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {analytics?.averageScore}
              </h3>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-6 text-white shadow-xl">

              <Award size={32} />

              <p className="mt-6 text-sm opacity-80">
                Highest Score
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {analytics?.highestScore}
              </h3>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white shadow-xl">

              <GraduationCap size={32} />

              <p className="mt-6 text-sm opacity-80">
                Lowest Score
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                {analytics?.lowestScore}
              </h3>

            </div>

          </div>

        )}

        {/* ===== Recent Results ===== */}
                

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6 dark:border-slate-800">

            <div>

              <h3 className="text-2xl font-bold">
                Recent Evaluations
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Your latest AI evaluated answer sheets.
              </p>

            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {evaluations?.length ?? 0} Records
            </span>

          </div>

          {evaluationsLoading ? (

            <div className="space-y-4 p-8">

              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="grid grid-cols-4 gap-6"
                >
                  <Skeleton className="h-12" />
                  <Skeleton className="h-12" />
                  <Skeleton className="h-12" />
                  <Skeleton className="h-12" />
                </div>

              ))}

            </div>

          ) : evaluationsError ? (

            <div className="p-8">

              <div className="rounded-2xl border border-red-300 bg-red-50 p-6 text-red-600 dark:border-red-900 dark:bg-red-950/30">
                {evaluationsError}
              </div>

            </div>

          ) : !evaluations || evaluations.length === 0 ? (

            <div className="flex flex-col items-center justify-center py-20">

              <BookOpen
                size={50}
                className="text-slate-300 dark:text-slate-700"
              />

              <h3 className="mt-5 text-xl font-semibold">
                No Evaluations Yet
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Your evaluated answer sheets will appear here.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="bg-slate-50 text-left text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">

                    <th className="px-8 py-4">
                      Subject
                    </th>

                    <th className="px-8 py-4">
                      Score
                    </th>

                    <th className="px-8 py-4">
                      Similarity
                    </th>

                    <th className="px-8 py-4">
                      Date
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {evaluations.map((evaluation) => (

                    <tr
                      key={evaluation._id}
                      className="border-b border-slate-200 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60"
                    >

                      <td className="px-8 py-5 font-semibold text-slate-900 dark:text-white">
                        {evaluation.subject}
                      </td>

                      <td className="px-8 py-5">

                        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                          {evaluation.score}
                        </span>

                      </td>

                      <td className="px-8 py-5">

                        <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          {evaluation.similarity.toFixed(1)}%
                        </span>

                      </td>

                      <td className="px-8 py-5 text-slate-500 dark:text-slate-400">

                        {formatDistanceToNow(
                          new Date(evaluation.createdAt),
                          {
                            addSuffix: true,
                          }
                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}