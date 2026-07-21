import {
  ArrowLeft,
  Brain,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Sparkles,
  User,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";

import { useEvaluation } from "@/hooks/useEvaluation";
import { Skeleton } from "@/components/ui/skeleton";

export default function EvaluationDetails() {
  const { id } = useParams();

  const {
    data: evaluation,
    loading,
    error,
  } = useEvaluation(id || "");

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl space-y-6">
          <Skeleton className="h-10 w-40 bg-slate-200 dark:bg-slate-800" />
          <Skeleton className="h-40 w-full rounded-3xl" />
          <Skeleton className="h-80 w-full rounded-3xl" />
        </div>
      </div>
    );
  }

  if (error || !evaluation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div
          className="
            rounded-3xl 
            bg-white 
            p-10 
            shadow
            dark:bg-slate-900
            dark:border
            dark:border-slate-800
            dark:text-white
          "
        >
          <h2 className="text-2xl font-bold text-red-600">
            Evaluation not found
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            {error ?? "No evaluation exists."}
          </p>

          <Link
            to="/teacher/dashboard"
            className="
              mt-6
              inline-flex
              rounded-xl
              bg-blue-600
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-8 px-6">

        {/* Back Button */}

        <Link
          to="/teacher/dashboard"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-white
            px-5
            py-3
            text-slate-700
            shadow-sm
            transition
            hover:bg-slate-50
            dark:bg-slate-900
            dark:text-slate-200
            dark:border
            dark:border-slate-800
            dark:hover:bg-slate-800
          "
        >
          <ArrowLeft size={18} />
          Back
        </Link>


        {/* Header */}

        <section
          className="
            rounded-3xl
            bg-white
            p-8
            shadow-sm
            dark:bg-slate-900
            dark:border
            dark:border-slate-800
          "
        >

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Evaluation Report
              </p>

              <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                {evaluation.studentName}
              </h1>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Subject : {evaluation.subject}
              </p>

            </div>


            <span
              className={`rounded-full px-5 py-2 text-sm font-semibold ${
                evaluation.status === "completed"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              }`}
            >
              {evaluation.status}
            </span>


          </div>

        </section>


        {/* Basic Information */}

        <section className="grid gap-6 lg:grid-cols-3">


          <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
              dark:border
              dark:border-slate-800
            "
          >

            <div className="mb-4 flex items-center gap-3">

              <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
                <User className="text-blue-600 dark:text-blue-400" />
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Student
              </h2>

            </div>


            <p className="font-semibold text-slate-800 dark:text-slate-200">
              {evaluation.studentName}
            </p>


            <p className="mt-2 text-slate-500 dark:text-slate-400">
              {evaluation.studentId
                ? String(evaluation.studentId)
                : "Not linked"}
            </p>


          </div>


          <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
              dark:border
              dark:border-slate-800
            "
          >

            <div className="mb-4 flex items-center gap-3">

              <div className="rounded-xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
                <ClipboardCheck className="text-indigo-600 dark:text-indigo-400" />
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Subject
              </h2>

            </div>


            <p className="font-semibold text-slate-800 dark:text-slate-200">
              {evaluation.subject}
            </p>


          </div>
                    <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
              dark:border
              dark:border-slate-800
            "
          >

            <div className="mb-4 flex items-center gap-3">

              <div className="rounded-xl bg-orange-100 p-3 dark:bg-orange-900/30">
                <Calendar className="text-orange-600 dark:text-orange-400" />
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Evaluated On
              </h2>

            </div>


            <p className="font-semibold text-slate-800 dark:text-slate-200">
              {format(
                new Date(evaluation.createdAt),
                "dd MMM yyyy"
              )}
            </p>

            <p className="text-slate-500 dark:text-slate-400">
              {format(
                new Date(evaluation.createdAt),
                "hh:mm a"
              )}
            </p>

          </div>


        </section>


        {/* Score Cards */}

        <section className="grid gap-6 md:grid-cols-3">


          {[
            {
              title: "Score",
              value: evaluation.score,
              icon: CheckCircle2,
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              title: "Similarity",
              value: `${evaluation.similarity.toFixed(1)}%`,
              icon: Brain,
              color: "text-emerald-600 dark:text-emerald-400",
            },
            {
              title: "Confidence",
              value: `${evaluation.confidence.toFixed(1)}%`,
              icon: Sparkles,
              color: "text-violet-600 dark:text-violet-400",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-sm
                  dark:bg-slate-900
                  dark:border
                  dark:border-slate-800
                "
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-slate-500 dark:text-slate-400">
                      {item.title}
                    </p>

                    <h2
                      className={`
                        mt-2
                        text-5xl
                        font-bold
                        ${item.color}
                      `}
                    >
                      {item.value}
                    </h2>

                  </div>


                  <Icon
                    className={item.color}
                    size={48}
                  />


                </div>

              </div>
            );
          })}


        </section>



        {/* AI Feedback */}


        <section
          className="
            rounded-3xl
            bg-white
            p-8
            shadow-sm
            dark:bg-slate-900
            dark:border
            dark:border-slate-800
          "
        >

          <div className="mb-6 flex items-center gap-3">

            <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
              <Brain className="text-blue-600 dark:text-blue-400" />
            </div>


            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              AI Feedback
            </h2>


          </div>


          <div
            className="
              rounded-2xl
              bg-slate-50
              p-6
              leading-8
              text-slate-700
              dark:bg-slate-800
              dark:text-slate-300
            "
          >
            {evaluation.feedback}
          </div>


        </section>




        {/* Keywords */}


        <section
          className="
            rounded-3xl
            bg-white
            p-8
            shadow-sm
            dark:bg-slate-900
            dark:border
            dark:border-slate-800
          "
        >

          <div className="mb-6 flex items-center gap-3">


            <div className="rounded-xl bg-emerald-100 p-3 dark:bg-emerald-900/30">
              <Sparkles className="text-emerald-600 dark:text-emerald-400" />
            </div>


            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Keywords Detected
            </h2>


          </div>


          <div className="flex flex-wrap gap-3">


            {evaluation.keywords.length === 0 ? (

              <p className="text-slate-500 dark:text-slate-400">
                No keywords detected.
              </p>

            ) : (

              evaluation.keywords.map(
                (keyword: string) => (

                  <span
                    key={keyword}
                    className="
                      rounded-full
                      bg-blue-100
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-blue-700
                      dark:bg-blue-900/30
                      dark:text-blue-400
                    "
                  >
                    {keyword}
                  </span>

                )
              )

            )}


          </div>


        </section>




        {/* Uploaded Files */}


        <section className="grid gap-6 lg:grid-cols-2">


          {[
            {
              title: "Question Paper",
              value: evaluation.questionPaper,
              iconColor:
                "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
            },
            {
              title: "Answer Sheet",
              value: evaluation.answerSheet,
              iconColor:
                "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
            },
          ].map((file) => (

            <div
              key={file.title}
              className="
                rounded-3xl
                bg-white
                p-8
                shadow-sm
                dark:bg-slate-900
                dark:border
                dark:border-slate-800
              "
            >

              <div className="mb-5 flex items-center gap-3">


                <div className={`rounded-xl p-3 ${file.iconColor}`}>
                  <FileText />
                </div>


                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {file.title}
                </h2>


              </div>


              <p className="break-all text-slate-600 dark:text-slate-400">
                {file.value}
              </p>


            </div>

          ))}


        </section>


      </div>
    </div>
  );
}