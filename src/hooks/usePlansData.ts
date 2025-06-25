import { useEffect, useState } from "react";
import type { ApiResponse } from "../types";

export function usePlansData() {
  const [data, setData] = useState<ApiResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/api.json")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
