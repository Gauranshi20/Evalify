import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";


interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}


export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: StatCardProps) {

  return (

    <motion.div

      whileHover={{
        y: -6,
        scale: 1.02,
      }}

      transition={{
        duration: 0.2,
      }}

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
      "

    >


      <div className="flex items-center justify-between">


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



          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-slate-900

              dark:text-white
            "
          >
            {value}
          </h2>



          <p
            className="
              mt-3
              text-sm
              font-semibold
              text-emerald-600

              dark:text-emerald-400
            "
          >
            {change}
          </p>


        </div>




        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            ${color}
            shadow-lg
          `}
        >

          <Icon
            className="text-white"
            size={30}
          />

        </div>



      </div>


    </motion.div>

  );
}