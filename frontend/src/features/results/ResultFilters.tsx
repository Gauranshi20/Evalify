import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ResultFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function ResultFilters({
  search,
  setSearch,
}: ResultFiltersProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-900 lg:flex-row lg:items-center lg:justify-between">

      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Evaluation Results
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Search and review AI evaluated answer sheets.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:w-auto">

        <div className="relative w-full sm:w-96">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200"
          />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student or subject..."
            className="h-11 rounded-xl border-slate-300 pl-11 transition-all focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />

        </div>

        <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Live Search
        </span>

      </div>

    </div>
  );
}