import {
  Brain,
  Star,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MarksPanelProps {
  evaluation: any;
}

export default function MarksPanel({
  evaluation,
}: MarksPanelProps) {
  const score = evaluation?.score ?? "--";
  const similarity = evaluation?.similarity ?? "--";
  const confidence = evaluation?.confidence ?? "--";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all dark:border-slate-700 dark:bg-slate-900">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
          <Brain size={28} />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Evaluation Summary
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Generated instantly using Evalify AI.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-5">

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Similarity Score
          </p>

          <h3 className="mt-2 text-5xl font-bold text-blue-600 dark:text-blue-400">
            {similarity}%
          </h3>

        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-900/20">

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Suggested Marks
          </p>

          <h3 className="mt-2 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            {score} / 20
          </h3>

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <BadgeCheck
            size={18}
            className="text-indigo-600 dark:text-indigo-400"
          />

          <p className="font-semibold text-slate-900 dark:text-white">
            Teacher Override
          </p>

        </div>

        <div className="grid grid-cols-3 gap-3">

          {[15, 16, 17, 18, 19, 20].map((mark) => (

            <Button
              key={mark}
              variant={mark === score ? "default" : "outline"}
              className={`rounded-xl ${
                mark === score
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                  : "dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              }`}
            >
              {mark}
            </Button>

          ))}

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 dark:border-amber-800 dark:from-amber-900/20 dark:to-yellow-900/10">

        <div className="mb-3 flex items-center gap-3">

          <div className="rounded-xl bg-yellow-500 p-2 text-white">
            <Star size={18} />
          </div>

          <div>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              AI Confidence
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Reliability of this evaluation
            </p>

          </div>

        </div>

        <div className="mb-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

          <div
            className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-700"
            style={{ width: `${confidence}%` }}
          />

        </div>

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-600 dark:text-slate-400">
            AI Confidence
          </span>

          <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
            {confidence}%
          </span>

        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/60 p-4 dark:bg-slate-800">

          <Sparkles
            size={18}
            className="mt-0.5 text-indigo-600"
          />

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Evalify AI analyzed the uploaded answer sheet, compared it with the
            question paper, identified important concepts, calculated similarity,
            and generated marks with an explainable confidence score.
          </p>

        </div>

      </div>

    </div>
  );
}