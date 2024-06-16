import { useState, useEffect } from "react";

export function useFetch<R>(query: () => Promise<R>) {
  const [data, setData] = useState<null | R>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchData = async (ignoreUpdate?: boolean) => {
    if (error) {
      setError(false);
      setErrorMsg(null);
    }

    setIsLoading(true);
    try {
      const response = await query();

      if (!ignoreUpdate) {
        setData(response);
      }
    } catch (error) {
      setData(null);
      const errorMsg = (error as Error).message;
      if (errorMsg) {
        setErrorMsg(errorMsg);
      }
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const retry = () => {
    fetchData();
  };

  useEffect(() => {
    let ignore = false;
    fetchData(ignore);

    return () => {
      ignore = true;
    };
  }, []);

  return { data, retry, isLoading, error, errorMsg };
}
