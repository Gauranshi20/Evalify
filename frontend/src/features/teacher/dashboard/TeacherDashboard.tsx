import { User } from "lucide-react";
import { DashboardLayout } from "@/components/layout/dashboard";

import StatsGrid from "./StatsGrid";
import PerformanceChart from "./PerformanceChart";
import RecentEvaluations from "./RecentEvaluations";
import QuickActions from "./QuickActions";

export default function TeacherDashboard() {
  return (
    <DashboardLayout>

      <div className="space-y-8">


        {/* Header */}

        <section
          className="
            flex
            flex-col
            justify-between
            gap-6

            lg:flex-row
            lg:items-center
          "
        >

          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider

                text-blue-600

                dark:text-blue-400
              "
            >
              Teacher Dashboard
            </p>


            <h1
              className="
                mt-2
                text-4xl
                font-bold

                text-slate-900

                dark:text-white
              "
            >
              Greetings, Teacher ✨
            </h1>


            <p
              className="
                mt-3
                max-w-2xl

                text-slate-600

                dark:text-slate-300
              "
            >
              Welcome back! Manage AI powered answer evaluation from one place.
            </p>


          </div>


          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center

                rounded-full

                bg-gradient-to-br
                from-blue-600
                to-indigo-600

                text-white

                shadow-lg
              "
            >

              <User className="h-6 w-6" />

            </div>

          </div>


        </section>



        {/* KPI Cards */}

        <StatsGrid />



        {/* Performance + Quick Actions */}

        <section
          className="
            grid
            gap-8

            xl:grid-cols-3
          "
        >

          <div className="xl:col-span-2">

            <PerformanceChart />

          </div>


          <QuickActions />


        </section>



        {/* Recent Evaluations */}

        <RecentEvaluations />


      </div>

    </DashboardLayout>
  );
}