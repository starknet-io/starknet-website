import { useEffect, useState } from "react";

export interface QueryParams {
  [key: string]: string;
}

const useQueryString = () => {
  const [queryString, setQueryString] = useState<QueryParams>({});

  const url = new URL(window.location.href);
  useEffect(() => {
    const queryString = url.search;
    const searchParams = new URLSearchParams(queryString);

    const paramsObject = Object.fromEntries(searchParams.entries());
    setQueryString(paramsObject);
  }, [url.pathname]);

  return queryString;
};

export default useQueryString;
