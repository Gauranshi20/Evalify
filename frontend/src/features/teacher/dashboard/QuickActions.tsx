import {
  FileCheck,
  FileText,
  FileUp,
  History,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


const actions = [
  {
    title: "Create Evaluation",
    description: "Start a new AI-powered evaluation",
    icon: FileCheck,
    color: "bg-blue-600",
    path: "/teacher/evaluation",
  },
  {
    title: "Upload Question Paper",
    description: "Upload exam questions for evaluation",
    icon: FileText,
    color: "bg-emerald-600",
    path: "/teacher/evaluation",
  },
  {
    title: "Upload Answer Sheets",
    description: "Upload student answer sheets",
    icon: FileUp,
    color: "bg-violet-600",
    path: "/teacher/evaluation",
  },
  {
    title: "Evaluation History",
    description: "View previous AI evaluation reports",
    icon: History,
    color: "bg-orange-500",
    path: "/teacher/results",
  },
];


export default function QuickActions() {

  const navigate = useNavigate();


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


      <div className="mb-6">

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Quick Actions
        </h2>


        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Frequently used teacher actions
        </p>


      </div>



      <div className="space-y-4">


        {actions.map((action) => (

          <button

            key={action.title}

            onClick={() => navigate(action.path)}

            className="
              group
              w-full
              rounded-2xl

              border
              border-slate-200

              bg-white

              p-5

              text-left

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-400
              hover:shadow-xl

              focus:outline-none
              focus:ring-2
              focus:ring-blue-500

              dark:border-slate-700
              dark:bg-slate-800/70

              dark:hover:border-blue-500
              dark:hover:bg-slate-800
              dark:hover:shadow-black/30
            "

          >


            <div className="flex items-center gap-4">


              <div
                className={`
                  flex
                  h-14
                  w-14
                  flex-shrink-0

                  items-center
                  justify-center

                  rounded-2xl

                  ${action.color}

                  shadow-lg

                  transition-transform
                  duration-300

                  group-hover:scale-110
                `}
              >

                <action.icon
                  size={24}
                  className="text-white"
                />

              </div>



              <div className="flex-1">


                <h3
                  className="
                    font-semibold

                    text-slate-900

                    transition-colors

                    group-hover:text-blue-600

                    dark:text-white
                    dark:group-hover:text-blue-400
                  "
                >

                  {action.title}

                </h3>



                <p
                  className="
                    mt-1

                    text-sm

                    text-slate-500

                    dark:text-slate-400
                  "
                >

                  {action.description}

                </p>


              </div>



              <ArrowRight

                size={20}

                className="
                  text-slate-400

                  transition-all
                  duration-300

                  group-hover:translate-x-2
                  group-hover:text-blue-600

                  dark:text-slate-500
                  dark:group-hover:text-blue-400
                "

              />


            </div>


          </button>


        ))}


      </div>


    </div>

  );
}