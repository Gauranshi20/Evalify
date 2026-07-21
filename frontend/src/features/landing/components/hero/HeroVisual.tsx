import {
  Brain,
  BarChart3,
  FileText,
  Users,
  Sparkles,
} from "lucide-react";

import FloatingCard from "./FloatingCard";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[110px] dark:bg-violet-500/10" />

      {/* Dashboard */}

      <div
        className="
          relative

          mx-auto
          w-full
          max-w-xl

          overflow-hidden

          rounded-[30px]

          border
          border-slate-200/70

          bg-white/80

          shadow-2xl
          backdrop-blur-xl

          transition-all

          dark:border-slate-700
          dark:bg-slate-900/80
        "
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-700">

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              AI Evaluation Dashboard
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              Teacher Overview
            </h2>

          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            ● Live
          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-5 p-6">

          <StatCard
            title="AI Accuracy"
            value="98.7%"
            color="text-blue-600"
            bg="bg-blue-50 dark:bg-blue-900/20"
          />

          <StatCard
            title="Sheets Checked"
            value="12,584"
            color="text-violet-600"
            bg="bg-violet-50 dark:bg-violet-900/20"
          />

          <StatCard
            title="Students"
            value="1,248"
            color="text-cyan-600"
            bg="bg-cyan-50 dark:bg-cyan-900/20"
          />

          <StatCard
            title="Time Saved"
            value="92%"
            color="text-emerald-600"
            bg="bg-emerald-50 dark:bg-emerald-900/20"
          />

        </div>

        {/* Chart */}

        <div className="px-6 pb-7">

          <div className="mb-4 flex items-center justify-between">

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Weekly Performance
            </h3>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              Last 7 Days
            </span>

          </div>

          <div className="flex h-44 items-end gap-3">

            {[40, 70, 58, 98, 82, 120, 105].map((height, index) => (
              <div
                key={index}
                className="
                  flex-1

                  rounded-t-xl

                  bg-gradient-to-t
                  from-violet-600
                  via-indigo-500
                  to-cyan-400

                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105
                "
                style={{
                  height: `${height}px`,
                }}
              />
            ))}

          </div>

        </div>

      </div>

      {/* Floating Cards */}

      <FloatingCard
        title="AI Reviews"
        value="1,432"
        icon={<Brain size={20} />}
        className="absolute -left-20 top-8 hidden lg:block"
      />

      <FloatingCard
        title="Assignments"
        value="248"
        icon={<FileText size={20} />}
        className="absolute -right-20 top-28 hidden lg:block"
      />

      <FloatingCard
        title="Students"
        value="1,248"
        icon={<Users size={20} />}
        className="absolute -bottom-8 left-0 hidden lg:block"
      />

      <FloatingCard
        title="Analytics"
        value="+24%"
        icon={<BarChart3 size={20} />}
        className="absolute bottom-6 -right-20 hidden lg:block"
      />

      {/* Sparkle */}

      <div className="absolute -top-5 right-16 rounded-full bg-yellow-100 p-3 shadow-xl dark:bg-yellow-500/20">
        <Sparkles className="text-yellow-500" />
      </div>

    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  color: string;
  bg: string;
}

function StatCard({
  title,
  value,
  color,
  bg,
}: StatCardProps) {
  return (
    <div className={`rounded-2xl p-5 ${bg}`}>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className={`mt-2 text-3xl font-bold ${color}`}>
        {value}
      </h3>

    </div>
  );
}