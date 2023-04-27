import { precisionRound } from "@ui/VideoPlayer/player-core/utils";
import { useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export type UseVolumeProps = {
  playerRef: any;
};
export function useVolume({ playerRef }: UseVolumeProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  const [isInteractingWithVolume, setIsInteractingWithVolume] = useState(false);

  const toggleMute = () => {
    setIsMuted((p) => {
      playerRef.current?.muted(!p);
      return !p;
    });
  };

  const onVolumeScrubStart = (v: number) => {
    setIsInteractingWithVolume(true);
  };
  const onVolumeScrubEnd = (v: number) => {
    setIsInteractingWithVolume(false);
  };

  const onVolumeScrubChange = (vol: number) => {
    if (Number.isNaN(vol)) {
      return;
    }

    setVolume(vol);
    const percentAsDecimal = precisionRound(vol / 100, 2);
    playerRef.current.volume(percentAsDecimal);
  };

  useEffect(() => {
    if (volume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  }, [volume]);

  useHotkeys("m", () => toggleMute());
  useHotkeys("UP", () => setVolume((v) => Math.min(v + 5, 100)));
  useHotkeys("DOWN", () => setVolume((v) => Math.max(v - 5, 0)));

  return {
    toggleMute,
    onVolumeScrubStart,
    onVolumeScrubChange,
    onVolumeScrubEnd,
    setVolume,
    isInteractingWithVolume,
    isMuted,
    volume,
  };
}
