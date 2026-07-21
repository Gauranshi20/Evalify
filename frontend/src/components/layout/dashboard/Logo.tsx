import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      <div
        className="
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          bg-gradient-to-br
          from-violet-600
          via-indigo-600
          to-blue-600
          text-white
          shadow-lg
          transition-all duration-300
          group-hover:scale-105
          group-hover:shadow-xl
        "
      >
        <GraduationCap size={24} />
      </div>

      <div>
        <h2
          className="
            text-xl font-extrabold tracking-tight
            text-slate-900
            transition-colors
            group-hover:text-violet-600

            dark:text-white
            dark:group-hover:text-violet-400
          "
        >
          Evalify
        </h2>

        <p
          className="
            text-xs font-medium tracking-wide
            text-slate-500

            dark:text-slate-400
          "
        >
          AI Academic Suite
        </p>
      </div>
    </Link>
  );
}