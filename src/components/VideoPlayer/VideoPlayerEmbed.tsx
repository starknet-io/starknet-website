"use client";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import "react-scrubber/lib/scrubber.css";

import { usePlayerPositionStyle } from "./hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "./hooks/useVideoFullscreen";
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
  const { ref } = useToggleFullscreen<HTMLDivElement>();

  return (
    <Box position="absolute" inset={0} ref={ref} bg="#000">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{
          ...positionStyle,
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        <VideoPlayerCore
          chapters={chapters}
          currentChapter={currentChapter}
          onChapterChange={(ch) => {
            setCurrentChapter(ch);
            onChapterChange?.(ch);
          }}
          onControlActiveChange={(isActive) => setIsControlActive(isActive)}
        />
      </Box>
    </Box>
  );
}
