import { Box } from "@chakra-ui/react";
import React from "react";
import { Scrubber } from "react-scrubber";
// import { EmbedButton } from "./EmbedButton";
import { FullscreenButton } from "./FullscreenButton";
import { PlayButton } from "./PlayButton";
import { ShareButton } from "./ShareButton";
import { VolumeButton } from "./VolumeButton";
import { SeekStatuses } from "../hooks/useSeek";

type CustomControlProps = {
  playingStatus: SeekStatuses;
  isControlActive: boolean;
  totalDuration: number;
  currentTime: number;
  onSeekScrubStart: (val: number) => void;
  onSeekScrubEnd: (val: number) => void;
  onSeekScrubChange: (val: number) => void;
  bufferPosition: number;
  onPlayToggle: () => void;
  isMuted: boolean;
  toggleMute: () => void;
  onVolumeScrubChange: (v: number) => void;
  volume: number;
  toggleFullscreen: () => void;
  isFullscreen: boolean;
};
export default function CustomControl(props: CustomControlProps) {
  const {
    playingStatus,
    isControlActive,
    totalDuration,
    currentTime,
    onSeekScrubStart,
    onSeekScrubEnd,
    onSeekScrubChange,
    bufferPosition,
    onPlayToggle,
    isMuted,
    toggleMute,
    onVolumeScrubChange,
    volume,
    toggleFullscreen,
    isFullscreen,
  } = props;

  const shouldShowControl = () => {
    if (playingStatus === "unstarted") {
      return false;
    }
    return isControlActive || playingStatus === "paused";
  };

  return (
    <Box
      sx={{
        pos: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 10,
        width: "100%",
        display: "flex",
        flexDir: "column",
        transition: "opacity",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
      }}
      opacity={shouldShowControl() ? 1 : 0}
    >
      <div
        style={{
          height: 4,
          cursor: "pointer",
        }}
      >
        <Scrubber
          min={0}
          max={totalDuration}
          value={currentTime}
          onScrubStart={(v) => onSeekScrubStart(v)}
          onScrubEnd={(v) => onSeekScrubEnd(v)}
          onScrubChange={(v) => onSeekScrubChange(v)}
          bufferPosition={bufferPosition}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          px: "20px",
          py: "5px",
          bg: "rgba(0, 0, 0, .75)",
          backdropBlur: "sm",
          alignItems: "baseline",
        }}
      >
        <PlayButton playingStatus={playingStatus} handlePlay={onPlayToggle} />
        <VolumeButton
          isMuted={isMuted}
          toggleMute={toggleMute}
          onVolumeChange={onVolumeScrubChange}
          volume={volume}
        />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            gap: 5,
            justifyContent: "flex-end",
          }}
        >
          <ShareButton />
          {/* <EmbedButton /> */}
          <FullscreenButton
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
        </Box>
      </Box>
    </Box>
  );
}
