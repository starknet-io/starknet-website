import React, { useEffect } from "react";

export const SPACE = 32;
export const ARROW_UP = 38;
export const ARROW_DOWN = 40;

export default function usePreventDefaultHotkeys() {
  useEffect(() => {
    const preventScrollOnSpace = (e: KeyboardEvent) => {
      if (
        [SPACE, ARROW_UP, ARROW_DOWN].some((code) => code === e.keyCode) &&
        e.target == document.body
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", preventScrollOnSpace);
    return () => window.removeEventListener("keydown", preventScrollOnSpace);
  }, []);
}
