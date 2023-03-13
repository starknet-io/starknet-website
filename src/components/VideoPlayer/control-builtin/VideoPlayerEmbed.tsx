"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import "react-scrubber/lib/scrubber.css";

import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "../hooks/useToggleFullscreen";
import { VideoPlayerCore } from "./VideoPlayerCore";

type VideoPlayerEmbedProps = {
  chapters: { id: string; title: string; startAt: number; endAt: number }[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
};
export function VideoPlayerEmbed({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerEmbedProps) {
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [isControlActive, setIsControlActive] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter);
  const positionStyle = usePlayerPositionStyle();
  const { ref, toggleFullscreen } = useToggleFullscreen<HTMLDivElement>();

  return (
    <Box position="absolute" inset={0} ref={ref} bg="#000" overflow="hidden">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{
          width: positionStyle.width,
          height: positionStyle.height,
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            padding: "0.5rem 1rem",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            color: "white",
            background: "rgba(0, 0, 0, 0.75)",
            border: "1px solid #333333",
            borderRadius: 40,
            opacity: isControlActive ? 1 : 0,
            visibility: isControlActive ? "visible" : "hidden",
          }}
        >
          Chapter 1
        </Box>
        <VideoPlayerCore
          chapters={chapters}
          currentChapter={currentChapter}
          onChapterChange={(ch) => {
            setCurrentChapter(ch);
            onChapterChange?.(ch);
          }}
          onControlActiveChange={(isActive) => setIsControlActive(isActive)}
          onFullscreen={toggleFullscreen}
        />
      </Box>
    </Box>
  );
}
