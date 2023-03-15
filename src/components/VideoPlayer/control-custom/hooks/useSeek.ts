import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export type SeekStatuses = "unstarted" | "paused" | "playing" | "ended";

export type UseSeekProps = {
  totalDuration: number;
  playerRef: any;
};

export function useSeek({ totalDuration, playerRef }: UseSeekProps) {
  const _scrubPlayingStatus = useRef<SeekStatuses>();
  const [playingStatus, setPlayingStatus] = useState<SeekStatuses>("unstarted");
  const [currentTime, setCurrentTime] = useState(0);

  const seek = (time: number) => {
    setCurrentTime(time);
    playerRef.current.currentTime(time);
  };

  const onSeekScrubStart = (time: number) => {
    if (!Number.isNaN(time)) {
      _scrubPlayingStatus.current = playingStatus;
      playerRef.current.pause();
      setPlayingStatus("paused");
      seek(time);
    }
  };

  const onSeekScrubChange = (time: number) => {
    if (!Number.isNaN(time)) {
      seek(time);
    }
  };

  const onSeekScrubEnd = (time: number) => {
    if (!Number.isNaN(time)) {
      seek(time);
      if (time === totalDuration) {
        playerRef.current.pause();
        setPlayingStatus("ended");
      } else if (_scrubPlayingStatus.current === "playing") {
        playerRef.current.play();
        setPlayingStatus("playing");
      }
    }
  };

  const onPlayToggle = () => {
    setPlayingStatus((prev) => {
      if (prev === "playing") {
        playerRef.current.pause();
        return "paused";
      } else if (prev === "paused") {
        playerRef.current.play();
        return "playing";
      } else {
        playerRef.current.currentTime(0);
        playerRef.current.play();
        return "playing";
      }
    });
  };

  useHotkeys("SPACE", () => onPlayToggle());
  useHotkeys("RIGHT", () => seek(Math.min(currentTime + 5, totalDuration)));
  useHotkeys("LEFT", () => seek(Math.max(currentTime - 5, 0)));

  return {
    currentTime,
    playingStatus,
    setCurrentTime,
    setPlayingStatus,
    onPlayToggle,
    onSeekScrubStart,
    onSeekScrubChange,
    onSeekScrubEnd,
    seek,
  };
}
