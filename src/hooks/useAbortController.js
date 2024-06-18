import { useEffect, useRef } from "react";

const useAbortController = () => {
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    const abortController = abortControllerRef.current;

    return () => {
      abortController.abort();
    };
  }, []);

  return abortControllerRef.current;
};

export default useAbortController;
