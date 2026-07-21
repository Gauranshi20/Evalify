import { useEffect, useState } from "react";

import { DashboardLayout } from "@/components/layout/dashboard";
import {
  fetchAnalytics,
  type Analytics,
} from "@/services/api";

import AnalyticsCards from "./AnalyticsCards";
import AIAccuracyChart from "./AIAccuracyChart";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] =
    useState<Analytics | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const data = await fetchAnalytics();
        setAnalytics(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAnalytics();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-slate-500 dark:text-slate-400">
            Loading analytics...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  if (!analytics) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-red-500">
            Unable to load analytics.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Analytics
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            AI Performance Dashboard
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
            Monitor evaluation performance using real analytics
            generated from student assessments.
          </p>
        </section>

        <AnalyticsCards analytics={analytics} />

        <AIAccuracyChart
          performance={analytics.performance}
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Performance Summary
            </h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">
                  Average Similarity
                </span>

                <span className="text-xl font-bold text-emerald-600">
                  {analytics.averageSimilarity}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">
                  Highest Score
                </span>

                <span className="text-xl font-bold text-blue-600">
                  {analytics.highestScore}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">
                  Lowest Score
                </span>

                <span className="text-xl font-bold text-red-500">
                  {analytics.lowestScore}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold">
              AI Insights
            </h2>

            <div className="mt-6 space-y-4 text-blue-100">
              <p>
                • {analytics.totalEvaluations} answer sheets have been evaluated successfully.
              </p>

              <p>
                • Average student score is{" "}
                <strong className="text-white">
                  {analytics.averageScore}%
                </strong>.
              </p>

              <p>
                • AI confidence remains consistently high at{" "}
                <strong className="text-white">
                  {analytics.averageConfidence}%
                </strong>.
              </p>

              <p>
                • Students show an average semantic similarity of{" "}
                <strong className="text-white">
                  {analytics.averageSimilarity}%
                </strong>{" "}
                with expected answers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}