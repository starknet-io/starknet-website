import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export function useToggleFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const ref = useRef<HTMLElement>();

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
