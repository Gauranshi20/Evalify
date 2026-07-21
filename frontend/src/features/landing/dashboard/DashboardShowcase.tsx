import { motion } from "framer-motion";
import {
  Brain,
  FileCheck2,
  Users,
  GraduationCap,
} from "lucide-react";

import StatCard from "./StatCard";
import PerformanceChart from "./PerformanceChart";
import RecentActivity from "./RecentActivity";

export default function DashboardShowcase() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
            DASHBOARD
          </span>


          <h2 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Everything You Need In
            <span className="text-blue-600 dark:text-blue-400">
              {" "}One Dashboard
            </span>
          </h2>


          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Monitor evaluations, track student performance, generate AI
            feedback and manage assessments from one intelligent workspace.
          </p>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        >


          <div className="grid gap-6 lg:grid-cols-4">


            <StatCard
              title="Students"
              value="1,248"
              subtitle="+18% this month"
              icon={Users}
              iconBg="bg-blue-100 dark:bg-blue-500/20"
              iconColor="text-blue-600 dark:text-blue-400"
            />


            <StatCard
              title="AI Reviews"
              value="14,392"
              subtitle="+12% this week"
              icon={Brain}
              iconBg="bg-violet-100 dark:bg-violet-500/20"
              iconColor="text-violet-600 dark:text-violet-400"
            />


            <StatCard
              title="Assignments"
              value="842"
              subtitle="Active"
              icon={FileCheck2}
              iconBg="bg-emerald-100 dark:bg-emerald-500/20"
              iconColor="text-emerald-600 dark:text-emerald-400"
            />


            <StatCard
              title="Teachers"
              value="96"
              subtitle="Across campus"
              icon={GraduationCap}
              iconBg="bg-orange-100 dark:bg-orange-500/20"
              iconColor="text-orange-600 dark:text-orange-400"
            />


          </div>



          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">

            <PerformanceChart />

            <RecentActivity />

          </div>


        </motion.div>


      </div>
    </section>
  );
}