/**
 * Module dependencies
 */

import { useLayoutEffect, useState } from "react";

/**
 * Export `useOverflow` hook.
 */

export const useOverflow = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [overflow, setOverflow] = useState({
    hasOverflowX: false,
    hasOverflowY: false,
  });

  useLayoutEffect(() => {
    const { current } = ref;

    const checkOverflow = () => {
      if (!current) {
        return;
      }
      const hasOverflowX = current.scrollWidth > current.clientWidth;
      const hasOverflowY = current.scrollHeight > current.clientHeight;

      setOverflow({
        hasOverflowX,
        hasOverflowY,
      });
    };

    window?.addEventListener("resize", checkOverflow);
    checkOverflow();
    return () => window?.removeEventListener("resize", checkOverflow);
  }, [ref]);

  return overflow;
};
