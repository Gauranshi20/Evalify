import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-white/80
        p-6
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-300
        hover:shadow-2xl

        dark:border-slate-700
        dark:bg-slate-900/70
        dark:hover:border-blue-500/50
      "
    >
      {/* Decorative Gradient */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100

          bg-gradient-to-br
          from-blue-500/5
          via-indigo-500/5
          to-violet-500/5
        "
      />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h3
            className="
              mt-3
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            {value}
          </h3>

          <p className="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {subtitle}
          </p>

        </div>

        <div
          className={`
            ${iconBg}
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            shadow-md
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
          `}
        >
          <Icon
            size={30}
            className={iconColor}
          />
        </div>

      </div>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-500
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </motion.div>
  );
}