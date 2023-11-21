/**
 * Module dependencies
 */

import { useEffect, useState } from "react";

/**
 * `Direction` type.
 */

type Direction = "up" | "down" | null;

/**
 * Export `useScrollDirection` function.
 */

export function useScrollDirection(initialDirection: Direction = null, delay = 10) {
  const [scrollDirection, setScrollDirection] = useState<Direction>(initialDirection);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > delay || scrollY - lastScrollY < -delay)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};
