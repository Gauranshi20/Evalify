import { useEffect, useState } from "react";
import {
  fetchEvaluations,
  fetchStudentEvaluations,
  type Evaluation,
} from "@/services/api";

export function useEvaluations(student = false) {
  const [data, setData] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const result = student
          ? await fetchStudentEvaluations()
          : await fetchEvaluations();

        setData(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load evaluations"
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [student]);

  return {
    data,
    loading,
    error,
  };
}