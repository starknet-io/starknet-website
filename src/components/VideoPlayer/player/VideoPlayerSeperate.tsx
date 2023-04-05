"use client";

import { Box } from "@chakra-ui/react";
import React, { CSSProperties, useCallback, useState } from "react";
import { useUpdateEffect } from "react-use";
import Player from "video.js/dist/types/player";
import { Chapter } from "../constants";
import { useChapters } from "../hooks/useChapters";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import ChaptersPlaylist from "./ChaptersPlaylist";
import { VideoPlayerCore } from "../lib/VideoPlayerCore";
import "../player-overrides.css";

type VideoPlayerSeperateProps = {
  chapters: Chapter[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  embeddable?: boolean;
};
export function VideoPlayerSeperate({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerSeperateProps) {
  const playerRef = React.useRef<Player | null>(null);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerHeight, setVideoContainerHeightChange] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { currentChapter, setCurrentChapter } = useChapters({
    playerRef,
    initialActiveChapter,
    chapters,
  });

  useUpdateEffect(() => {
    onChapterChange?.(currentChapter);
    playerRef.current?.play();
  }, [currentChapter]);

  const onChapterSelect = (ch: string) => {
    setCurrentChapter(ch);
  };

  const onFullscreenChange = useCallback(
    (b: boolean) => {
      setIsFullscreen(b);
    },
    [setIsFullscreen]
  );

  const onContainerHeightChange = useCallback(
    (height: number) => {
      setVideoContainerHeightChange(height);
    },
    [setVideoContainerHeightChange]
  );

  const videoWrapperStyle: CSSProperties = isFullscreen
    ? { position: "absolute", inset: 0, height: "100%", width: "100%" }
    : { position: "relative", flex: 1, paddingBottom: "56.25%" };

  const videoPositionStyle: CSSProperties = isFullscreen
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
        display: "grid",
        gap: "23px",
        position: "relative",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "1fr auto",
      }}
    >
      <VideoPlayerCore
        embeddable={false}
        videoWrapperStyle={videoWrapperStyle}
        videoPositionStyle={videoPositionStyle}
        chapters={chapters}
        initialActiveChapter={initialActiveChapter}
        onFullscreenChange={onFullscreenChange}
        onContainerHeightChange={onContainerHeightChange}
        currentChapter={currentChapter}
        setCurrentChapter={setCurrentChapter}
      />
      <ChaptersPlaylist
        height={videoContainerHeight}
        chapters={chapters}
        currentChapter={currentChapter}
        onChapterSelect={onChapterSelect}
      />
    </Box>
  );
}
