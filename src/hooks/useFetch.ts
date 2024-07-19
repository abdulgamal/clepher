import { useEffect, useState } from "react";
import { getGlobalMarketStatus } from "../lib/requests";

function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGlobalMarketStatus(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data };
}

export default useFetch;
