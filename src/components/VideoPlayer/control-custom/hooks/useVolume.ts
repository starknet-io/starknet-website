import { precisionRound } from "@ui/VideoPlayer/utils";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export type UseVolumeProps = {
  playerRef: any;
};
export function useVolume({ playerRef }: UseVolumeProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);

  const toggleMute = () => {
    setIsMuted((p) => {
      playerRef.current?.muted(!p);
      return !p;
    });
  };
  const onVolumeScrubChange = (volume: number) => {
    if (Number.isNaN(volume)) {
      return;
    }
    if (volume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    setVolume(volume);
    const percentAsDecimal = precisionRound(volume / 100, 2);
    playerRef.current.volume(percentAsDecimal);
  };

  useHotkeys("m", () => toggleMute());
  useHotkeys("UP", () => setVolume((v) => Math.min(v + 5, 100)));
  useHotkeys("DOWN", () => setVolume((v) => Math.max(v - 5, 0)));

  return {
    toggleMute,
    onVolumeScrubChange,
    setVolume,
    isMuted,
    volume,
  };
}
