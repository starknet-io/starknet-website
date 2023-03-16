import { Box } from "@chakra-ui/react";
import React from "react";
import "react-video-seek-slider/styles.css";
import "./VideoSeekSlider.css";
import { VideoSeekSlider } from "react-video-seek-slider";
import { Scrubber } from "react-scrubber";
import "react-scrubber/lib/scrubber.css";

import { FullscreenButton } from "./FullscreenButton";
import { PlayButton } from "./PlayButton";
import { ShareButton } from "./ShareButton";
import { VolumeButton } from "./VolumeButton";
import { SeekStatuses } from "../hooks/useSeek";
import { convertSecondsToMMSS } from "./utils";
import { Chapter } from "@ui/VideoPlayer/utils";

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
  chapter: Chapter;
  isDisabled?: boolean;
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
    chapter,
    isDisabled,
  } = props;

  const shouldShowControl = () => {
    if (playingStatus === "unstarted") {
      return false;
    }
    return isControlActive || playingStatus === "paused";
  };

  const callIfWithingChapter = (t: number, func: (t: number) => void) => {
    if (!isDisabled && chapter && t <= chapter.endAt) {
      func(t);
    }
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
      {/* <VideoSeekSlider
        max={totalDuration * 1000}
        currentTime={currentTime * 1000}
        bufferTime={bufferPosition * 1000}
        onChange={(n) => onSeekScrubEnd(n / 1000)}
        secondsPrefix="00:"
        minutesPrefix=""
        limitTimeTooltipBySides={true}
      /> */}
      <div
        style={{
          height: 4,
          cursor: "pointer",
        }}
      >
        <Scrubber
          min={Math.floor(chapter.startAt)}
          max={Math.ceil(chapter.endAt)}
          value={currentTime}
          onScrubStart={(v) => callIfWithingChapter(v, onSeekScrubStart)}
          onScrubEnd={(v) => callIfWithingChapter(v, onSeekScrubEnd)}
          onScrubChange={(v) => callIfWithingChapter(v, onSeekScrubChange)}
          bufferPosition={bufferPosition}
        />
      </div>
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
            {convertSecondsToMMSS(Math.ceil(currentTime - chapter.startAt))}
          </Box>
          <Box>/</Box>
          <Box sx={{ minWidth: "45px", textAlign: "right" }}>
            {convertSecondsToMMSS(Math.floor(chapter.endAt - chapter.startAt))}
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
