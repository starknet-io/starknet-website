import { useRef, useState } from "react";
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

  return { toggleFullscreen, isFullscreen, ref };
}
