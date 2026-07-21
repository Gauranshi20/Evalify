import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", score: 68 },
  { month: "Feb", score: 74 },
  { month: "Mar", score: 79 },
  { month: "Apr", score: 83 },
  { month: "May", score: 89 },
  { month: "Jun", score: 94 },
];

export default function PerformanceChart() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200/70
        bg-white/80
        p-6
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        hover:shadow-xl

        dark:border-slate-700
        dark:bg-slate-900/70
      "
    >
      <div className="mb-8 flex items-center justify-between">

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Evaluation Accuracy
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Average evaluation accuracy over the last 6 months
          </p>
        </div>

        <div
          className="
            rounded-xl
            bg-emerald-100
            px-4
            py-2
            text-sm
            font-semibold
            text-emerald-700

            dark:bg-emerald-500/15
            dark:text-emerald-300
          "
        >
          ↑ 12%
        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="accuracyGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              strokeOpacity={0.15}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[60, 100]}
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow:
                  "0 10px 35px rgba(15,23,42,0.12)",
              }}
            />

            <Area
              type="monotone"
              dataKey="score"
              stroke="#2563eb"
              strokeWidth={4}
              fill="url(#accuracyGradient)"
              activeDot={{
                r: 7,
                strokeWidth: 3,
                fill: "#2563eb",
                stroke: "#fff",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}