import {
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
} from "lucide-react";

const activities = [
  {
    title: "Mathematics Mid-Term",
    subtitle: "48 answer sheets evaluated",
    icon: FileText,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
    time: "2 mins ago",
  },
  {
    title: "AI Feedback Generated",
    subtitle: "Class 10 Science",
    icon: Sparkles,
    color:
      "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
    time: "8 mins ago",
  },
  {
    title: "Evaluation Completed",
    subtitle: "English Assignment",
    icon: CheckCircle2,
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
    time: "15 mins ago",
  },
  {
    title: "New Upload",
    subtitle: "History Unit Test",
    icon: Clock3,
    color:
      "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
    time: "22 mins ago",
  },
];

export default function RecentActivity() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200/70
        bg-white/80
        p-6
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        hover:shadow-xl

        dark:border-slate-700
        dark:bg-slate-900/70
      "
    >

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h3>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Latest AI evaluation events
        </p>
      </div>


      <div className="space-y-5">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                p-3
                transition-all
                duration-300
                hover:bg-slate-50

                dark:hover:bg-slate-800/60
              "
            >

              {/* Icon */}

              <div
                className={`
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  transition-transform
                  duration-300
                  group-hover:scale-110

                  ${activity.color}
                `}
              >
                <Icon size={22} />
              </div>


              {/* Content */}

              <div className="flex-1">

                <h4
                  className="
                    font-semibold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {activity.title}
                </h4>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  {activity.subtitle}
                </p>

              </div>


              {/* Time */}

              <span
                className="
                  whitespace-nowrap
                  text-xs
                  font-medium
                  text-slate-400

                  dark:text-slate-500
                "
              >
                {activity.time}
              </span>

            </div>
          );
        })}

      </div>


      {/* Footer */}

      <button
        className="
          mt-8
          w-full
          rounded-xl
          border
          border-slate-200
          py-3
          text-sm
          font-semibold
          text-blue-600
          transition
          hover:bg-blue-50

          dark:border-slate-700
          dark:text-blue-400
          dark:hover:bg-blue-500/10
        "
      >
        View All Activities
      </button>


    </div>
  );
}