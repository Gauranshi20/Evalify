import {
  Brain,
  FileCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

interface Props {
  analytics: {
    totalEvaluations: number;
    averageScore: number;
    averageConfidence: number;
    highestScore: number;
  };
}

export default function AnalyticsCards({
  analytics,
}: Props) {
  const cards = [
    {
      title: "AI Confidence",
      value: `${analytics.averageConfidence}%`,
      icon: Brain,
      color:
        "text-blue-600 dark:text-blue-400",
      bg:
        "bg-blue-100 dark:bg-blue-500/20",
    },
    {
      title: "Evaluations",
      value: analytics.totalEvaluations,
      icon: FileCheck,
      color:
        "text-emerald-600 dark:text-emerald-400",
      bg:
        "bg-emerald-100 dark:bg-emerald-500/20",
    },
    {
      title: "Average Score",
      value: `${analytics.averageScore}%`,
      icon: Sparkles,
      color:
        "text-orange-600 dark:text-orange-400",
      bg:
        "bg-orange-100 dark:bg-orange-500/20",
    },
    {
      title: "Highest Score",
      value: `${analytics.highestScore}%`,
      icon: Trophy,
      color:
        "text-violet-600 dark:text-violet-400",
      bg:
        "bg-violet-100 dark:bg-violet-500/20",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
        >
          <div
            className={`mb-5 inline-flex rounded-2xl p-3 ${card.bg}`}
          >
            <card.icon
              className={card.color}
              size={28}
            />
          </div>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {card.value}
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {card.title}
          </p>
        </div>
      ))}
    </div>
  );
}