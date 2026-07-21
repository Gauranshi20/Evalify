import {
  Download,
  FileSpreadsheet,
  FileText,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExportPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all dark:border-slate-700 dark:bg-slate-900">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Export Results
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Export evaluated reports in different formats.
          </p>

        </div>

        <div className="rounded-xl bg-amber-100 p-2 dark:bg-amber-900/40">
          <Lock
            size={18}
            className="text-amber-600 dark:text-amber-300"
          />
        </div>

      </div>

      <div className="mt-8 space-y-4">

        <Button
          disabled
          className="h-12 w-full justify-start gap-3 opacity-70"
        >
          <Download size={18} />
          Export PDF
          <span className="ml-auto text-xs">
            Soon
          </span>
        </Button>

        <Button
          disabled
          variant="outline"
          className="h-12 w-full justify-start gap-3 border-slate-300 dark:border-slate-700 opacity-70"
        >
          <FileSpreadsheet size={18} />
          Export Excel
          <span className="ml-auto text-xs">
            Soon
          </span>
        </Button>

        <Button
          disabled
          variant="outline"
          className="h-12 w-full justify-start gap-3 border-slate-300 dark:border-slate-700 opacity-70"
        >
          <FileText size={18} />
          Generate Report
          <span className="ml-auto text-xs">
            Soon
          </span>
        </Button>

      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/40">

        <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
          PDF, Excel and detailed report generation will be enabled in the next release.
        </p>

      </div>

    </div>
  );
}