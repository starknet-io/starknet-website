import { useState } from "react";
import { useEffectOnce } from "react-use";

export const usePageScrolled = () => {
  const [isPageScrolled, useIsPageScrolled] = useState(false);
  useEffectOnce(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        useIsPageScrolled(true);
      } else {
        useIsPageScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { isPageScrolled };
};
