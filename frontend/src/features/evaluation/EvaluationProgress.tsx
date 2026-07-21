import {
  CheckCircle2,
  LoaderCircle,
  UploadCloud,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

interface EvaluationProgressProps {
  evaluation: any;
}

export default function EvaluationProgress({
  evaluation,
}: EvaluationProgressProps) {
  const completed = Boolean(evaluation);

  const steps = [
    {
      title: "Files Uploaded",
      description: "Question paper and answer sheet received.",
      icon: UploadCloud,
      done: completed,
    },
    {
      title: "AI Analysis",
      description: "Evalify AI is understanding answers and extracting keywords.",
      icon: BrainCircuit,
      done: completed,
    },
    {
      title: "Evaluation Complete",
      description: "Marks, similarity, confidence and feedback generated.",
      icon: Sparkles,
      done: completed,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all dark:border-slate-700 dark:bg-slate-900">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            AI Evaluation Progress
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Evalify tracks every stage of the evaluation process.
          </p>

        </div>

        <span
          className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
            completed
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
              : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
          }`}
        >
          {completed ? "Completed" : "Waiting for Upload"}
        </span>

      </div>

      <div className="mt-8">

        <div className="mb-3 flex justify-between text-sm font-medium text-slate-600 dark:text-slate-300">

          <span>Overall Progress</span>

          <span>{completed ? "100%" : "0%"}</span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

          <div
            className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700 ${
              completed ? "w-full" : "w-0"
            }`}
          />

        </div>

      </div>

      <div className="mt-10 space-y-5">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className={`flex items-start gap-4 rounded-2xl border p-5 transition-all ${
                step.done
                  ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20"
                  : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
              }`}
            >

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  step.done
                    ? "bg-emerald-600 text-white"
                    : "bg-blue-600 text-white"
                }`}
              >

                {step.done ? (
                  <CheckCircle2 size={22} />
                ) : index === 2 ? (
                  <LoaderCircle className="animate-spin" size={22} />
                ) : (
                  <Icon size={22} />
                )}

              </div>

              <div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}