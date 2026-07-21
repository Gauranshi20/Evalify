import { DashboardLayout } from "@/components/layout/dashboard";
import { useAdminDashboard } from "@/hooks/useAdminDashboard";

import {
  Users,
  GraduationCap,
  Shield,
  UserCheck,
  BookOpen,
  RefreshCw,
} from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";


export default function AdminDashboard() {

  const navigate = useNavigate();

  const {
    data,
    loading,
    error,
  } = useAdminDashboard();


  const totalUsers =
    (data?.students ?? 0) +
    (data?.teachers ?? 0) +
    (data?.parents ?? 0) +
    (data?.admins ?? 0);



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
                tracking-widest
                text-blue-600

                dark:text-blue-400
              "
            >
              Admin Panel
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
              Admin Dashboard
            </h1>


            <p
              className="
                mt-3
                text-slate-600

                dark:text-slate-400
              "
            >
              Monitor users, evaluations and platform statistics.
            </p>


          </div>



          <button
            onClick={() => window.location.reload()}
            className="
              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-blue-600

              px-5
              py-3

              font-medium
              text-white

              transition-all
              duration-300

              hover:bg-blue-700
              hover:shadow-lg
            "
          >

            <RefreshCw size={18} />

            Refresh

          </button>



        </section>





        {/* Stats */}

        {loading ? (

          <section
            className="
              grid
              gap-6

              md:grid-cols-2
              xl:grid-cols-5
            "
          >

            {[1,2,3,4,5].map((i)=>(

              <div
                key={i}
                className="
                  rounded-3xl
                  border
                  border-slate-200

                  bg-white

                  p-6

                  shadow-sm


                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >

                <Skeleton
                  className="
                    h-12
                    w-12
                    rounded-xl
                  "
                />


                <Skeleton
                  className="
                    mt-4
                    h-4
                    w-24
                  "
                />


                <Skeleton
                  className="
                    mt-2
                    h-8
                    w-16
                  "
                />


              </div>


            ))}


          </section>


        ) : error ? (


          <section
            className="
              rounded-3xl

              border
              border-red-200

              bg-red-50

              p-6


              dark:border-red-900
              dark:bg-red-950/30
            "
          >

            <p
              className="
                text-red-600

                dark:text-red-400
              "
            >
              {error}
            </p>


          </section>



        ) : (


          <section
            className="
              grid
              gap-6

              md:grid-cols-2
              xl:grid-cols-5
            "
          >


            <StatCard
              title="Total Users"
              value={totalUsers}
              color="bg-blue-100 dark:bg-blue-900/30"
              icon={
                <Users
                  className="
                    text-blue-600
                    dark:text-blue-400
                  "
                  size={24}
                />
              }
              onClick={() => navigate("/admin/users")}
            />



            <StatCard
              title="Students"
              value={data?.students ?? 0}
              color="bg-emerald-100 dark:bg-emerald-900/30"
              icon={
                <GraduationCap
                  className="
                    text-emerald-600
                    dark:text-emerald-400
                  "
                  size={24}
                />
              }
              onClick={() => navigate("/admin/users")}
            />


            <StatCard
              title="Teachers"
              value={data?.teachers ?? 0}
              color="bg-violet-100 dark:bg-violet-900/30"
              icon={
                <Shield
                  className="
                    text-violet-600
                    dark:text-violet-400
                  "
                  size={24}
                />
              }
              onClick={() => navigate("/admin/users")}
            />



            <StatCard
              title="Parents"
              value={data?.parents ?? 0}
              color="bg-amber-100 dark:bg-amber-900/30"
              icon={
                <UserCheck
                  className="
                    text-amber-600
                    dark:text-amber-400
                  "
                  size={24}
                />
              }
              onClick={() => navigate("/admin/users")}
            />



            <StatCard
              title="Evaluations"
              value={data?.evaluations ?? 0}
              color="bg-red-100 dark:bg-red-900/30"
              icon={
                <BookOpen
                  className="
                    text-red-600
                    dark:text-red-400
                  "
                  size={24}
                />
              }
              onClick={() => navigate("/teacher/results")}
            />


          </section>


        )}
        {/* Quick Actions */}


        <section
          className="
            rounded-3xl

            border
            border-slate-200

            bg-white

            p-8

            shadow-sm

            transition-all
            duration-300


            dark:border-slate-700
            dark:bg-slate-900
          "
        >


          <h2
            className="
              text-xl
              font-bold

              text-slate-900

              dark:text-white
            "
          >
            Quick Actions
          </h2>



          <div
            className="
              mt-6

              grid
              gap-5

              md:grid-cols-3
            "
          >



            <QuickActionCard
              title="Manage Users"
              description="Create, edit, suspend and manage all users."
              icon={
                <Users
                  className="
                    text-blue-600
                    dark:text-blue-400
                  "
                />
              }
              border="hover:border-blue-500"
              onClick={() => navigate("/admin/users")}
            />



            <QuickActionCard
              title="View Evaluations"
              description="Monitor all AI generated evaluation records."
              icon={
                <BookOpen
                  className="
                    text-red-600
                    dark:text-red-400
                  "
                />
              }
              border="hover:border-red-500"
              onClick={() => navigate("/teacher/results")}
            />



            <QuickActionCard
              title="System Settings"
              description="Configure platform preferences and security."
              icon={
                <Shield
                  className="
                    text-violet-600
                    dark:text-violet-400
                  "
                />
              }
              border="hover:border-violet-500"
              onClick={() => navigate("/admin/settings")}
            />



          </div>


        </section>



      </div>

    </DashboardLayout>

  );

}





interface StatCardProps {

  title: string;

  value: number;

  icon: React.ReactNode;

  color: string;

  onClick?: () => void;

}



function StatCard({
  title,
  value,
  icon,
  color,
  onClick,
}: StatCardProps) {


  return (

    <button

      onClick={onClick}

      className="
        w-full

        rounded-3xl

        border
        border-slate-200

        bg-white

        p-6

        text-left

        shadow-sm

        transition-all
        duration-300


        hover:-translate-y-1
        hover:shadow-xl


        dark:border-slate-700
        dark:bg-slate-900
      "

    >


      <div className="flex items-center gap-4">


        <div
          className={`
            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-2xl

            ${color}
          `}
        >

          {icon}

        </div>



        <div>


          <p
            className="
              text-sm
              font-medium

              text-slate-500

              dark:text-slate-400
            "
          >

            {title}

          </p>



          <p
            className="
              mt-2

              text-3xl

              font-bold

              text-slate-900

              dark:text-white
            "
          >

            {value}

          </p>


        </div>



      </div>



    </button>

  );

}






interface QuickActionCardProps {

  title: string;

  description: string;

  icon: React.ReactNode;

  border: string;

  onClick: () => void;

}



function QuickActionCard({
  title,
  description,
  icon,
  border,
  onClick,
}: QuickActionCardProps) {


  return (

    <button

      onClick={onClick}

      className={`
        rounded-2xl

        border
        border-slate-200

        bg-white

        p-6

        text-left

        transition-all
        duration-300


        hover:-translate-y-1
        hover:shadow-xl

        ${border}


        dark:border-slate-700
        dark:bg-slate-800/70

        dark:hover:bg-slate-800
      `}

    >


      <div className="mb-4">

        {icon}

      </div>



      <h3
        className="
          font-semibold

          text-slate-900

          dark:text-white
        "
      >

        {title}

      </h3>



      <p
        className="
          mt-2

          text-sm

          text-slate-500

          dark:text-slate-400
        "
      >

        {description}

      </p>


    </button>

  );

}