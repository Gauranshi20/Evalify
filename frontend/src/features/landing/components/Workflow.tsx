import { motion } from "framer-motion";
import {
  Upload,
  ScanText,
  BrainCircuit,
  ClipboardCheck,
  MessageSquareText,
  BarChart3,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Answer Sheets",
    description:
      "Teachers upload scanned PDFs or images of handwritten answer sheets.",
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  },
  {
    icon: ScanText,
    title: "OCR Processing",
    description:
      "Extract handwritten or printed text with high accuracy using OCR.",
    color:
      "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "AI Evaluation",
    description:
      "Gemini AI evaluates answers using predefined marking rubrics.",
    color:
      "bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400",
  },
  {
    icon: ClipboardCheck,
    title: "Rubric Matching",
    description:
      "Every answer is checked against subject-specific marking criteria.",
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
  {
    icon: MessageSquareText,
    title: "Feedback Generation",
    description:
      "Generate constructive, personalized feedback for every student.",
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visual reports, trends, strengths and weaknesses are instantly available.",
    color:
      "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-white py-28 transition-colors dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
            AI WORKFLOW
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            From Answer Sheet
            <span className="text-blue-600 dark:text-blue-400">
              {" "}to AI Insights
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Evalify automates the complete evaluation lifecycle while
            maintaining transparency, consistency and speed.
          </p>

        </div>


        {/* Timeline */}

        <div className="relative mt-20">

          <div
            className="
            absolute left-1/2 top-0 hidden h-full w-1 
            -translate-x-1/2 rounded-full 
            bg-slate-200 dark:bg-slate-800 
            lg:block
            "
          />


          <div className="space-y-14">

            {steps.map((step, index) => {

              const Icon = step.icon;
              const reverse = index % 2 !== 0;


              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity:0,
                    y:40
                  }}
                  whileInView={{
                    opacity:1,
                    y:0
                  }}
                  transition={{
                    duration:0.5,
                    delay:index*0.08
                  }}
                  viewport={{
                    once:true
                  }}
                  className={`
                    grid items-center gap-8 lg:grid-cols-2
                    ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                  `}
                >

                  <div
                    className={
                      reverse
                      ? "lg:pl-16"
                      : "lg:pr-16"
                    }
                  >

                    <div
                      className="
                      group rounded-3xl 
                      border border-slate-200
                      bg-white
                      p-8
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-2xl

                      dark:border-slate-800
                      dark:bg-slate-900/80
                      dark:shadow-black/30
                      "
                    >

                      <div
                        className={`
                        mb-6 inline-flex rounded-2xl 
                        p-4 transition
                        group-hover:scale-110
                        ${step.color}
                        `}
                      >
                        <Icon size={30}/>
                      </div>


                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>


                      <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>

                    </div>

                  </div>


                  {/* Center Node */}

                  <div className="hidden justify-center lg:flex">

                    <div
                      className="
                      rounded-full
                      border-8
                      border-white
                      bg-blue-600
                      p-4
                      shadow-xl

                      dark:border-slate-950
                      "
                    >
                      <ArrowDown
                        className="text-white"
                        size={24}
                      />
                    </div>

                  </div>


                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}