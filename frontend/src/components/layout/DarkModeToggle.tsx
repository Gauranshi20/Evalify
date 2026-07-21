import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/app/providers/ThemeProvider";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="
        group
        h-11 w-11
        rounded-xl

        border
        border-slate-200
        bg-white/80
        backdrop-blur-xl

        transition-all
        duration-300

        hover:scale-105
        hover:bg-slate-100
        hover:shadow-md

        dark:border-slate-700
        dark:bg-slate-900/80
        dark:hover:bg-slate-800
      "
    >
      {isDark ? (
        <Sun
          size={20}
          className="
            text-amber-400
            transition-transform
            duration-500
            group-hover:rotate-180
          "
        />
      ) : (
        <Moon
          size={20}
          className="
            text-slate-700
            transition-transform
            duration-500
            group-hover:-rotate-12

            dark:text-slate-300
          "
        />
      )}
    </Button>
  );
}