import {
  Bell,
  ChevronDown,
  Moon,
  Search,
  Sun,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "@/app/providers/ThemeProvider";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-slate-950/90">

      {/* Search */}

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:bg-slate-900 dark:focus:ring-blue-900/30"
        />

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-3">

        {/* Theme Toggle */}

        <button
          onClick={toggleTheme}
          className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
        >
          {theme === "dark" ? (
            <Sun
              size={19}
              className="text-amber-400"
            />
          ) : (
            <Moon
              size={19}
              className="text-slate-700"
            />
          )}
        </button>

        {/* Notification */}

        <DropdownMenu>

          <DropdownMenuTrigger asChild>

            <button className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">

              <Bell
                size={19}
                className="text-slate-700 dark:text-slate-300"
              />

              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />

            </button>

          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-80 rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >

            <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Notifications
              </h3>

            </div>

            <DropdownMenuItem
              disabled
              className="py-4 text-slate-500 dark:text-slate-400"
            >
              No new notifications
            </DropdownMenuItem>

          </DropdownMenuContent>

        </DropdownMenu>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg">
            GS
          </div>

          <div className="hidden text-left lg:block">

            <p className="font-semibold text-slate-900 dark:text-white">
              Gauranshi
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Teacher
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-500 dark:text-slate-400"
          />

        </button>

      </div>

    </header>
  );
}