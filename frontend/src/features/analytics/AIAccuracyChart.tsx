import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { PerformancePoint } from "@/services/api";

interface Props {
  performance: PerformancePoint[];
}

export default function AIAccuracyChart({
  performance,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
        Monthly Evaluations
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performance}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#475569"
              opacity={0.2}
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="evaluations"
              stroke="#2563eb"
              fill="#60a5fa"
              fillOpacity={0.35}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}