import { useEffect, useState } from "react";
import {
  fetchStudents,
  type Student,
} from "@/services/api";

export function useStudents() {
  const [data, setData] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStudents() {
      try {
        setLoading(true);
        setError(null);

        const result = await fetchStudents();

        setData(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load students"
        );
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  return {
    data,
    loading,
    error,
  };
}