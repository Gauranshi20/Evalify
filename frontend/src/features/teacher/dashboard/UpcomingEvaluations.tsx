import { Calendar } from "lucide-react";

export default function UpcomingEvaluations() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
      "
    >

      <h2
        className="
          mb-6
          text-xl
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        Upcoming Evaluations
      </h2>


      <div className="flex flex-col items-center justify-center py-8">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl

            bg-slate-100

            dark:bg-slate-800
          "
        >

          <Calendar
            className="
              h-6
              w-6
              text-slate-400

              dark:text-slate-500
            "
          />

        </div>


        <p
          className="
            mt-4
            text-slate-500

            dark:text-slate-400
          "
        >
          No upcoming evaluations
        </p>


      </div>

    </div>
  );
}