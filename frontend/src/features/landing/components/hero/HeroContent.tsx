import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-violet-200

          bg-white/70

          px-5
          py-2

          text-sm
          font-semibold

          text-violet-700

          shadow-md
          backdrop-blur

          dark:border-violet-700/40
          dark:bg-slate-900/70
          dark:text-violet-300
        "
      >
        <Sparkles className="h-4 w-4" />

        AI Powered Academic Evaluation

      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          mt-8

          text-5xl
          font-black
          leading-tight
          tracking-tight

          text-slate-900

          lg:text-7xl

          dark:text-white
        "
      >
        Grade Smarter.

        <br />

        <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Teach Better.
        </span>

        <br />

        <span className="dark:text-slate-200">
          Powered by AI.
        </span>

      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="
          mt-8

          max-w-xl

          text-lg
          leading-8

          text-slate-600

          dark:text-slate-400
        "
      >
        Evaluate answer sheets in minutes using AI powered grading,
        rubric matching, keyword analysis, instant feedback,
        performance analytics and detailed reports.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link to="/register">

          <Button
            size="lg"
            className="
              h-12
              rounded-xl
              px-8

              bg-gradient-to-r
              from-violet-600
              to-indigo-600

              shadow-xl

              hover:scale-105
              hover:from-violet-700
              hover:to-indigo-700
            "
          >
            Start Free

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

        </Link>

        <Button
          variant="outline"
          size="lg"
          className="
            h-12
            rounded-xl
            px-8

            border-slate-300

            bg-white/70

            backdrop-blur

            hover:bg-slate-100

            dark:border-slate-700
            dark:bg-slate-900/60
            dark:hover:bg-slate-800
          "
        >
          <Play className="mr-2 h-5 w-5" />

          Watch Demo

        </Button>

      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-14 grid grid-cols-3 gap-5"
      >

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            10K+
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Sheets Evaluated
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            98.7%
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            AI Accuracy
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            500+
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Teachers
          </p>

        </div>

      </motion.div>

    </div>
  );
}