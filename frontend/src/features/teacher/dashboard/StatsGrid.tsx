import {
  ClipboardCheck,
  Clock3,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import StatCard from "./StatCard";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsGrid() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-3 h-10 w-20" />
            <Skeleton className="mt-3 h-4 w-16" />
          </div>
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-3xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
        <p className="text-red-600 dark:text-red-400">
          Failed to load statistics: {error}
        </p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <p className="text-slate-500 dark:text-slate-400">
          No statistics available
        </p>
      </section>
    );
  }

  return (
    <section
  className="
    grid
    gap-6

    md:grid-cols-2
    xl:grid-cols-4
  "
>

      <StatCard
        title="Total Evaluations"
        value={data.totalEvaluations.toString()}
        change="All time"
        icon={ClipboardCheck}
        color="bg-blue-600"
      />

      <StatCard
        title="Average Score"
        value={`${data.averageScore}`}
        change="Out of 100"
        icon={Clock3}
        color="bg-amber-500"
      />

      <StatCard
        title="Average Similarity"
        value={`${data.averageSimilarity}%`}
        change="AI confidence"
        icon={GraduationCap}
        color="bg-emerald-600"
      />

      <StatCard
        title="Average Confidence"
        value={`${data.averageConfidence}%`}
        change="Evaluation quality"
        icon={Sparkles}
        color="bg-violet-600"
      />

    </section>
  );
}