import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

import { useAuth } from "@/app/providers/AuthProvider";
import {
  fetchParentDashboard,
  type ParentDashboardData,
} from "@/services/api";

import { Skeleton } from "@/components/ui/skeleton";

import {
  GraduationCap,
  Users,
  TrendingUp,
  FileText,
  Mail,
  User,
  Trophy,
  LogOut,
  Sparkles,
} from "lucide-react";

export default function ParentDashboard() {
  const { user, logout } = useAuth();

  const [dashboard, setDashboard] =
    useState<ParentDashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);

        const data =
          await fetchParentDashboard();

        setDashboard(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl space-y-8 p-8">
          <Skeleton className="h-12 w-72 rounded-xl" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                className="h-36 rounded-3xl"
              />
            ))}
          </div>

          <Skeleton className="h-[420px] rounded-3xl" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="rounded-3xl border border-red-200 bg-white p-10 shadow-xl dark:border-red-900 dark:bg-slate-900">

          <h2 className="text-2xl font-bold text-red-600">
            Failed to load dashboard
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            {error}
          </p>

        </div>
      </div>
    );
  }

  if (!dashboard) return null;

  const {
    student,
    analytics,
    evaluations,
  } = dashboard;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-3 shadow-lg">

              <GraduationCap
                size={24}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                Evalify AI
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Parent Portal
              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="hidden text-right md:block">

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Welcome Back 🩷
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {user?.name}
              </p>

            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              <LogOut size={16} />
              Logout
            </button>

          </div>

        </div>

      </nav>

      <main className="mx-auto max-w-7xl space-y-8 p-8">
              {/* Hero Section */}

        <section className="rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-10 text-white shadow-2xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">

                <Sparkles size={16} />

                Parent Dashboard

              </div>

              <h2 className="text-4xl font-extrabold">
                Monitor Your Child's Academic Progress
              </h2>

              <p className="mt-4 max-w-3xl text-purple-100">
                Stay updated with AI evaluated answer sheets,
                performance trends, marks, and academic growth
                from one place.
              </p>

            </div>

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/15 backdrop-blur">

              <Users
                size={56}
                className="text-white"
              />

            </div>

          </div>

        </section>

        {/* Student Profile */}

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all dark:border-slate-700 dark:bg-slate-900">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-4xl font-bold text-white shadow-xl">

              {student.name.charAt(0).toUpperCase()}

            </div>

            <div className="flex-1">

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {student.name}
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">

                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">

                  <Mail
                    size={18}
                    className="text-purple-600"
                  />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Email
                    </p>

                    <p className="font-medium text-slate-800 dark:text-slate-200 break-all">
                      {student.email}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">

                  <GraduationCap
                    size={18}
                    className="text-indigo-600"
                  />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Roll Number
                    </p>

                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {student.rollNumber || "--"}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">

                  <User
                    size={18}
                    className="text-emerald-600"
                  />

                  <div>

                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Status
                    </p>

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        student.status === "active"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                      }`}
                    >
                      {student.status}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Analytics Cards */}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<Users size={26} />}
            title="Linked Student"
            value="1"
            color="from-purple-600 to-indigo-600"
          />

          <StatCard
            icon={<TrendingUp size={26} />}
            title="Average Score"
            value={`${analytics.averageScore.toFixed(1)}%`}
            color="from-emerald-500 to-green-600"
          />

          <StatCard
            icon={<FileText size={26} />}
            title="Evaluations"
            value={analytics.totalEvaluations}
            color="from-blue-600 to-cyan-600"
          />

          <StatCard
            icon={<Trophy size={26} />}
            title="Highest Score"
            value={`${analytics.highestScore}%`}
            color="from-orange-500 to-red-500"
          />

        </section>
                {/* Recent Evaluations */}

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">

          <div className="border-b border-slate-200 px-8 py-6 dark:border-slate-700">

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Recent Evaluations
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              View the latest AI-evaluated answer sheets and student performance.
            </p>

          </div>

          {evaluations.length === 0 ? (

            <div className="flex h-64 flex-col items-center justify-center">

              <FileText
                size={54}
                className="text-slate-300 dark:text-slate-700"
              />

              <h4 className="mt-5 text-lg font-semibold text-slate-700 dark:text-slate-200">
                No Evaluations Available
              </h4>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Evaluated answer sheets will appear here.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-slate-50 dark:bg-slate-800">

                  <tr className="text-left text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">

                    <th className="px-8 py-5">
                      Subject
                    </th>

                    <th className="px-8 py-5">
                      Score
                    </th>

                    <th className="px-8 py-5">
                      Similarity
                    </th>

                    <th className="px-8 py-5">
                      Date
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {evaluations.map((evaluation) => (

                    <tr
                      key={evaluation._id}
                      className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60"
                    >

                      <td className="px-8 py-5 font-semibold text-slate-900 dark:text-white">
                        {evaluation.subject}
                      </td>

                      <td className="px-8 py-5">

                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                          {evaluation.score}
                        </span>

                      </td>

                      <td className="px-8 py-5">

                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          {evaluation.similarity.toFixed(1)}%
                        </span>

                      </td>

                      <td className="px-8 py-5 text-slate-600 dark:text-slate-400">

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
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  color: string;
}

function StatCard({
  icon,
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <div
        className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${color} p-4 text-white shadow-lg`}
      >
        {icon}
      </div>

      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white">
        {value}
      </h3>

    </div>
  );
}