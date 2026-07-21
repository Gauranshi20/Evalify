import { Sparkles } from "lucide-react";

const insights = [
  "AI grading accuracy improved by 9% this semester.",
  "Students score highest in Data Structures.",
  "DBMS descriptive answers need more detail.",
  "AI reduced manual evaluation time by 78%.",
];

export default function AnalyticsInsights() {
  return (
    <div
      className="
        rounded-3xl

        border
        border-blue-500/20

        bg-gradient-to-br
        from-blue-600
        via-indigo-600
        to-violet-600

        p-8

        text-white

        shadow-xl

        transition-all
        duration-300

        hover:shadow-2xl
      "
    >

      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-2xl

            bg-white/20

            backdrop-blur-md
          "
        >
          <Sparkles
            size={24}
            className="text-white"
          />
        </div>


        <h2 className="text-2xl font-bold">
          AI Insights
        </h2>

      </div>


      <ul
        className="
          mt-6
          space-y-4

          text-sm
          leading-6

          text-blue-50
        "
      >

        {insights.map((item) => (
          <li
            key={item}
            className="
              rounded-xl

              bg-white/10

              px-4
              py-3

              backdrop-blur-sm

              transition

              hover:bg-white/20
            "
          >
            • {item}
          </li>
        ))}

      </ul>


    </div>
  );
}