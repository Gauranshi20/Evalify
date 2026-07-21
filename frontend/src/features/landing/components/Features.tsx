import { motion } from "framer-motion";
import {
  Brain,
  FileCheck,
  BarChart3,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Evaluation",
    description:
      "Evaluate descriptive answers using advanced AI with configurable marking rubrics.",
  },
  {
    icon: FileCheck,
    title: "Rubric Based Grading",
    description:
      "Create reusable grading rubrics for every subject and assignment.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track student performance, trends and learning outcomes in real time.",
  },
  {
    icon: Clock3,
    title: "95% Faster Evaluation",
    description:
      "Reduce manual evaluation from hours to only a few minutes using AI.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Role based access, encrypted storage and institutional grade protection.",
  },
  {
    icon: Sparkles,
    title: "Instant AI Feedback",
    description:
      "Generate personalized feedback and performance insights immediately after evaluation.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-28 transition-colors dark:bg-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-600

              dark:border-blue-500/30
              dark:bg-blue-500/10
              dark:text-blue-300
            "
          >
            FEATURES
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900 dark:text-white lg:text-6xl">
            Everything Needed For
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Smart Evaluation
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Evalify combines AI, automation and analytics into one
            intelligent platform built specifically for educational
            institutions.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group

                  rounded-3xl

                  border
                  border-slate-200

                  bg-white/80

                  p-8

                  shadow-lg

                  backdrop-blur

                  transition-all
                  duration-300

                  hover:border-blue-300
                  hover:shadow-2xl

                  dark:border-slate-700
                  dark:bg-slate-900/70
                  dark:hover:border-blue-500
                "
              >

                <div
                  className="
                    mb-8

                    inline-flex

                    rounded-2xl

                    bg-gradient-to-br
                    from-blue-500
                    to-indigo-600

                    p-4

                    text-white

                    shadow-lg

                    transition-all

                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-8 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}