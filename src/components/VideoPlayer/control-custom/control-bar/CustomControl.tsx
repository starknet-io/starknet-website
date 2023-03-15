import { Box } from "@chakra-ui/react";
import React from "react";
import "react-video-seek-slider/styles.css";
import "./VideoSeekSlider.css";
import { VideoSeekSlider } from "react-video-seek-slider";

import { FullscreenButton } from "./FullscreenButton";
import { PlayButton } from "./PlayButton";
import { ShareButton } from "./ShareButton";
import { VolumeButton } from "./VolumeButton";
import { SeekStatuses } from "../hooks/useSeek";
import { convertSecondsToMMSS } from "./utils";

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
      <VideoSeekSlider
        max={totalDuration * 1000}
        currentTime={currentTime * 1000}
        bufferTime={bufferPosition * 1000}
        onChange={(n) => onSeekScrubEnd(n / 1000)}
        secondsPrefix="00:"
        minutesPrefix=""
        limitTimeTooltipBySides={true}
      />

      <Box
        sx={{
          display: "flex",
          gap: "4px",
          px: "20px",
          py: "5px",
          bg: "rgba(0, 0, 0, .75)",
          backdropBlur: "sm",
          alignItems: "center",
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
            alignItems: "center",
            // gap: "8px",
            color: "white",
            fontSize: "sm",
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          <Box sx={{ minWidth: "45px" }}>
            {convertSecondsToMMSS(currentTime)}
          </Box>
          <Box>/</Box>
          <Box sx={{ minWidth: "45px", textAlign: "right" }}>
            {convertSecondsToMMSS(totalDuration)}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            gap: "4px",
            justifyContent: "flex-end",
          }}
        >
          <ShareButton />
          <FullscreenButton
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
        </Box>
      </Box>
    </Box>
  );
}
