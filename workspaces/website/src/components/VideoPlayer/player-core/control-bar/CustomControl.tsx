import { Box } from "@chakra-ui/react";
import "react-video-seek-slider/styles.css";
// import "./VideoSeekSlider.css";
// import { VideoSeekSlider } from "react-video-seek-slider";
import { Scrubber } from "react-scrubber";
import "react-scrubber/lib/scrubber.css";

import { FullscreenButton } from "./FullscreenButton";
import { PlayButton } from "./PlayButton";
import { ShareButton } from "./ShareButton";
import { VolumeButton } from "./VolumeButton";
import { SeekStatuses } from "../hooks/useSeek";
import { convertSecondsToMMSS } from "./utils";
import { Chapter } from "@ui/VideoPlayer/constants";

type CustomControlProps = {
  playingStatus: SeekStatuses;
  isControlVisible: boolean;
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
  onVolumeScrubStart: (v: number) => void;
  onVolumeScrubEnd: (v: number) => void;
  isInteractingWithVolume: boolean;
  volume: number;
  toggleFullscreen: () => void;
  isFullscreen: boolean;
  chapter: Chapter;
  isDisabled?: boolean;
  onShare: () => void;
};
export default function CustomControl(props: CustomControlProps) {
  const {
    playingStatus,
    isControlVisible,
    totalDuration,
    currentTime,
    onSeekScrubStart,
    onSeekScrubEnd,
    onSeekScrubChange,
    bufferPosition,
    onPlayToggle,
    isMuted,
    toggleMute,
    onVolumeScrubStart,
    onVolumeScrubChange,
    onVolumeScrubEnd,
    isInteractingWithVolume,
    volume,
    toggleFullscreen,
    isFullscreen,
    onShare,
  } = props;

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
      opacity={isControlVisible ? 1 : 0}
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
          min={0}
          max={totalDuration}
          value={currentTime}
          onScrubStart={onSeekScrubStart}
          onScrubEnd={onSeekScrubEnd}
          onScrubChange={onSeekScrubChange}
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
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <PlayButton playingStatus={playingStatus} handlePlay={onPlayToggle} />
        <VolumeButton
          isMuted={isMuted}
          toggleMute={toggleMute}
          onVolumeScrubStart={onVolumeScrubStart}
          onVolumeScrubEnd={onVolumeScrubEnd}
          onVolumeScrubChange={onVolumeScrubChange}
          isInteractingWithVolume={isInteractingWithVolume}
          volume={volume}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
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
          <ShareButton onShare={onShare} />
          <FullscreenButton
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
          />
        </Box>
      </Box>
    </Box>
  );
}
