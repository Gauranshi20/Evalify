import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/components/ui/utils";

interface FloatingCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  className?: string;
}

export default function FloatingCard({
  title,
  value,
  icon,
  className,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
      className={cn(
        "w-52 rounded-2xl border",
        "border-white/40 dark:border-slate-700/70",
        "bg-white/80 dark:bg-slate-900/80",
        "backdrop-blur-xl",
        "shadow-2xl",
        "p-5",
        className
      )}
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>

        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600
            dark:bg-blue-500/20
            dark:text-blue-400
          "
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}