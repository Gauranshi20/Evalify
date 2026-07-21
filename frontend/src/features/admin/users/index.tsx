import { DashboardLayout } from "@/components/layout/dashboard";
import UsersTable from "./UsersTable";

export default function AdminUsersPage() {
  return (
    <DashboardLayout>

      <div className="space-y-8">


        {/* Header */}

        <section>

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
            User Management
          </h1>



          <p
            className="
              mt-3

              text-slate-600

              dark:text-slate-400
            "
          >
            Manage students, teachers, parents and admins.
          </p>


        </section>



        <UsersTable />


      </div>


    </DashboardLayout>
  );
}