import {
  CheckCircle2,
  Sparkles,
  Brain,
} from "lucide-react";

interface AIInsightsProps {
  evaluation: any;
}

export default function AIInsights({
  evaluation,
}: AIInsightsProps) {
  const feedback =
    evaluation?.feedback ??
    "Upload an answer sheet to generate AI feedback.";

  const keywords =
    evaluation?.keywords ?? [];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Sparkles className="text-violet-600" />

        <h2 className="text-xl font-bold">
          AI Feedback
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex gap-3">
          <Brain className="mt-1 text-blue-600" />

          <p className="text-slate-700">
            {feedback}
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-slate-800">
            Keywords Detected
          </h3>

          <div className="flex flex-wrap gap-2">
            {keywords.length > 0 ? (
              keywords.map((keyword: string) => (
                <span
                  key={keyword}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {keyword}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-500">
                No keywords available yet.
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <CheckCircle2 className="mt-1 text-emerald-600" />

          <p className="text-slate-600">
            AI evaluation completed successfully.
          </p>
        </div>
      </div>
    </div>
  );
}