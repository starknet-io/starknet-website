import React, { useEffect } from "react";

export const SPACE = 32;
export const ARROW_UP = 38;
export const ARROW_DOWN = 40;

export default function usePreventDefaultHotkeys() {
  useEffect(() => {
    const preventScrollOnSpace = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      console.log("target.tagName", target.tagName);
      if (
        [SPACE, ARROW_UP, ARROW_DOWN].some((code) => code === e.keyCode) &&
        (target == document.body || target.tagName === "VIDEO")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", preventScrollOnSpace);
    return () => window.removeEventListener("keydown", preventScrollOnSpace);
  }, []);
}
