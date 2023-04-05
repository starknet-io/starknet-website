import React, { RefObject, useEffect, useState } from "react";

export function useAutoHideToolbar(ref: RefObject<HTMLDivElement> | null) {
  const [isControlActive, setIsControlActive] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const onMouseEnter = () => {
      setIsControlActive((prev: boolean) => {
        if (prev === false) {
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => setIsControlActive(false), 4000);
        }
        return true;
      });
    };
    const onMouseLeave = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      setIsControlActive(false);
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
  }, [setIsControlActive, ref]);

  return isControlActive;
}
