/**
 * Module dependencies.
 */

import { useEffect, useRef } from 'react';

/**
 * Export `useIntervalHook`.
 */

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);

  const resetInterval = () => {
    if (intervalId.current && delay) {
      clearInterval(intervalId.current);
      intervalId.current = setInterval(savedCallback.current ?? (() => {}), delay);
    }
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (typeof savedCallback.current === 'function') {
        savedCallback.current();
      }
    }

    if (delay) {
      intervalId.current = setInterval(tick, delay);

      return () => clearInterval(intervalId.current);
    }

    return () => {};
  }, [delay]);

  return { resetInterval };
}
