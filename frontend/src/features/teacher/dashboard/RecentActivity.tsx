import { Clock } from "lucide-react";

export default function RecentActivity() {
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

        hover:shadow-xl

        dark:border-slate-700
        dark:bg-slate-900
        dark:hover:shadow-black/30
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
        Recent Activity
      </h2>


      <div
        className="
          flex
          flex-col
          items-center
          justify-center

          py-8
        "
      >


        <div
          className="
            flex

            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            bg-slate-100

            transition-transform
            duration-300

            hover:scale-105

            dark:bg-slate-800
          "
        >

          <Clock
            className="
              h-7
              w-7

              text-slate-400

              dark:text-slate-500
            "
          />

        </div>



        <p
          className="
            mt-4

            text-sm

            text-slate-500

            dark:text-slate-400
          "
        >
          No recent activity
        </p>


        <p
          className="
            mt-2
            text-xs

            text-slate-400

            dark:text-slate-500
          "
        >
          Activity updates will appear here
        </p>


      </div>

    </div>
  );
}