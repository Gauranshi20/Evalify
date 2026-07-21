import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { usePerformanceChart } from "@/hooks/usePerformanceChart";
import { Skeleton } from "@/components/ui/skeleton";

export default function PerformanceChart() {
  const {
    chartData,
    loading,
    error,
  } = usePerformanceChart();

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-6">
          <Skeleton className="h-7 w-56" />
          <Skeleton className="mt-2 h-4 w-72" />
        </div>

        <Skeleton className="h-80 w-full rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-900 dark:bg-red-950">
        <p className="text-red-600 dark:text-red-300">
          Failed to load chart: {error}
        </p>
      </div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-6">

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Evaluation Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Monthly AI evaluation activity
          </p>

        </div>

        <div className="flex h-80 items-center justify-center text-slate-500 dark:text-slate-400">
          No evaluation data available.
        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Evaluation Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Monthly AI evaluation activity
          </p>

        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="evaluationFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#3b82f6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>


            <CartesianGrid
              strokeDasharray="4 4"
              stroke="currentColor"
              className="text-slate-300 dark:text-slate-700"
              opacity={0.35}
            />


            <XAxis
              dataKey="month"
              tick={{
                fontSize: 12,
                fill: "currentColor",
              }}
              className="text-slate-500 dark:text-slate-400"
              axisLine={false}
              tickLine={false}
            />


            <YAxis
              allowDecimals={false}
              tick={{
                fontSize: 12,
                fill: "currentColor",
              }}
              className="text-slate-500 dark:text-slate-400"
              axisLine={false}
              tickLine={false}
            />


            <Tooltip
  contentStyle={{
    borderRadius: "14px",
    border: "1px solid #334155",
    boxShadow:
      "0 12px 35px rgba(0,0,0,0.25)",
    backgroundColor:
      document.documentElement.classList.contains("dark")
        ? "#0f172a"
        : "#ffffff",
    color:
      document.documentElement.classList.contains("dark")
        ? "#f8fafc"
        : "#0f172a",
  }}
  labelStyle={{
    color:
      document.documentElement.classList.contains("dark")
        ? "#f8fafc"
        : "#0f172a",
  }}
  itemStyle={{
    color:
      document.documentElement.classList.contains("dark")
        ? "#cbd5e1"
        : "#334155",
  }}
  cursor={{
    stroke: "#3b82f6",
    strokeWidth: 1,
  }}
/>


            <Area
              type="monotone"
              dataKey="evaluations"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#evaluationFill)"
              activeDot={{
                r: 6,
                fill: "#2563eb",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}