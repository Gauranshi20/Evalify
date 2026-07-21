import { useEffect, useMemo, useState } from "react";

import { DashboardLayout } from "@/components/layout/dashboard";
import { fetchEvaluations, type Evaluation } from "@/services/api";

import ResultFilters from "./ResultFilters";
import ResultsTable from "./ResultsTable";
import ExportPanel from "./ExportPanel";

export default function ResultsPage() {
  const [results, setResults] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadResults() {
      try {
        const data = await fetchEvaluations();
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadResults();
  }, []);

  const filteredResults = useMemo(() => {
    if (!search.trim()) return results;

    const keyword = search.toLowerCase();

    return results.filter(
      (item) =>
        item.studentName.toLowerCase().includes(keyword) ||
        item.subject.toLowerCase().includes(keyword)
    );
  }, [results, search]);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Results Management
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
              Student Results
            </h1>

            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-400">
              Review AI evaluated answer sheets, verify marks and manage published results.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6 text-white shadow-xl">
            <p className="text-sm opacity-90">
              Total Evaluations
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              {results.length}
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Stored in database
            </p>
          </div>

        </section>

        <ResultFilters
          search={search}
          setSearch={setSearch}
        />

        <section className="grid gap-8 xl:grid-cols-4">

          <div className="xl:col-span-3">
            <ResultsTable
              results={filteredResults}
              loading={loading}
            />
          </div>

          <ExportPanel />

        </section>

      </div>
    </DashboardLayout>
  );
}