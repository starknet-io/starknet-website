import React, { RefObject, useEffect, useState } from "react";

export function usePlayerActive(ref: RefObject<HTMLDivElement> | null) {
  const [isPlayerActive, setIsPlayerActive] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const onMouseEnter = () => {
      setIsPlayerActive((prev: boolean) => {
        if (prev === false) {
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => setIsPlayerActive(false), 4000);
        }
        return true;
      });
    };
    const onMouseLeave = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setIsPlayerActive(false);
    };
    if (!ref?.current) return;

    ref.current.addEventListener("mousemove", onMouseEnter);
    ref.current.addEventListener("mouseleave", onMouseLeave);
    const refElement = ref.current;
    return () => {
      refElement?.removeEventListener("mousemove", onMouseEnter);
      refElement?.removeEventListener("mouseleave", onMouseLeave);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [setIsPlayerActive, ref]);

  return isPlayerActive;
}
