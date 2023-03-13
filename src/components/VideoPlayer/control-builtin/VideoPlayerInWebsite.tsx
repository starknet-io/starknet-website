"use client";

import { Box } from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import "react-scrubber/lib/scrubber.css";
import { useMeasure } from "react-use";
import ChaptersPlaylist from "../ChaptersPlaylist";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "../hooks/useToggleFullscreen";
import { Chapter } from "../utils";

import { VideoPlayerCore } from "./VideoPlayerCore";

type VideoPlayerInWebsiteProps = {
  chapters: Chapter[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
};
export function VideoPlayerInWebsite({
  chapters,
  initialActiveChapter,
}: VideoPlayerInWebsiteProps) {
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter);
  const [videoContainerRef, { height }] = useMeasure<HTMLDivElement>();
  const { ref, isFullscreen, toggleFullscreen } = useToggleFullscreen();
  const positionStyle = usePlayerPositionStyle();

  const videoWrapperStyle: CSSProperties = isFullscreen
    ? { position: "absolute", inset: 0, height: "100%", width: "100%" }
    : { position: "relative", paddingBottom: "56.25%", flex: 1 };

  const videoStyle: CSSProperties = isFullscreen
    ? {
        position: "absolute",
        width: positionStyle.width,
        height: positionStyle.height,
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      }
    : {
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
      };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        position: "relative",
      }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <div style={videoWrapperStyle} ref={ref}>
        <div style={videoStyle}>
          <VideoPlayerCore
            chapters={chapters}
            currentChapter={currentChapter}
            onChapterChange={setCurrentChapter}
            videoContainerRef={videoContainerRef}
            onFullscreen={toggleFullscreen}
          />
        </div>
      </div>
      <ChaptersPlaylist
        height={height}
        chapters={chapters}
        currentChapter={currentChapter}
        onChapterSelect={(ch) => setCurrentChapter(ch)}
      />
    </Box>
  );
}
