import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  to,
  label,
  icon: Icon,
}: SidebarItemProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={`
            group relative flex items-center gap-3
            rounded-2xl px-4 py-3
            text-sm font-medium
            transition-all duration-300

            ${
              isActive
                ? `
                  bg-gradient-to-r
                  from-violet-600
                  via-indigo-600
                  to-blue-600
                  text-white
                  shadow-lg
                  shadow-violet-500/20
                `
                : `
                  text-slate-600
                  hover:bg-slate-100
                  hover:text-slate-900

                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-white
                `
            }
          `}
        >
          {/* Active Indicator */}

          {isActive && (
            <span
              className="
                absolute left-0
                h-8 w-1
                rounded-r-full
                bg-white
              "
            />
          )}

          <Icon
            size={20}
            className={`
              transition-all duration-300

              ${
                isActive
                  ? "scale-110"
                  : "group-hover:scale-110"
              }
            `}
          />

          <span className="truncate">
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
}