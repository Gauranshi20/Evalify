import { useEffect, useState } from "react";
import {
  fetchEvaluationById,
  type Evaluation,
} from "@/services/api";

export function useEvaluation(id: string) {
  const [data, setData] =
    useState<Evaluation | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const result =
          await fetchEvaluationById(id);

        setData(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load evaluation"
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      load();
    }
  }, [id]);

  return {
    data,
    loading,
    error,
  };
}