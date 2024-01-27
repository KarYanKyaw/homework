import { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((prev) => {
          return {
            error: null,
            loading: false,
            data: data,
          };
        });
      } catch (e) {
        setData((prev) => {
          return {
            error: e.message,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);

  return data;
};

export default useFetch;
