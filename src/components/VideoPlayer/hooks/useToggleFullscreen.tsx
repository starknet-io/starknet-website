import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export function useToggleFullscreen<T extends HTMLDivElement>() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = useRef<T>(null);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      setIsFullscreen(true);
      ref.current?.requestFullscreen();
    }
  };

  useHotkeys("f", toggleFullscreen);

  useEffect(() => {
    const updateFullscreenState = () => {
      console.log("updateFullscreenState");
      if (!document.fullscreenElement) {
        console.log("inside if");
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", updateFullscreenState);

    return () => {
      document.removeEventListener("fullscreenchange", updateFullscreenState);
    };
  }, []);

  return { toggleFullscreen, isFullscreen, ref };
}
