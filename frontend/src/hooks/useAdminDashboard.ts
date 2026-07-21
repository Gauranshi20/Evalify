import { useEffect, useState } from "react";
import {
  fetchAdminDashboard,
  type AdminDashboardStats,
} from "@/services/api";

export function useAdminDashboard() {
  const [data, setData] =
    useState<AdminDashboardStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const result = await fetchAdminDashboard();
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    data,
    loading,
    error,
  };
}