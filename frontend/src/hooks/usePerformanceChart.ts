import { useMemo } from "react";
import { useEvaluations } from "./useEvaluations";

export function usePerformanceChart() {
  const { data, loading, error } = useEvaluations();

  const chartData = useMemo(() => {
    if (!data) return [];

    const grouped: Record<string, number> = {};

    data.forEach((evaluation) => {
      const month = new Date(
        evaluation.createdAt
      ).toLocaleString("default", {
        month: "short",
      });

      grouped[month] =
        (grouped[month] || 0) + 1;
    });

    return Object.entries(grouped).map(
      ([month, evaluations]) => ({
        month,
        evaluations,
      })
    );
  }, [data]);

  return {
    chartData,
    loading,
    error,
  };
}