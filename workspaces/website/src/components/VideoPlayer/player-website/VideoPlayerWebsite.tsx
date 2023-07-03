
import { Box } from "@chakra-ui/react";
import React, { CSSProperties, useCallback, useState } from "react";
import { useUpdateEffect } from "react-use";
import Player from "video.js/dist/types/player";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import ChaptersPlaylist from "./ChaptersPlaylist";
import ChapterTitle from "./ChapterTitle";
import { VideoPlayerCore } from "../player-core/VideoPlayerCore";
import { Chapter } from "../constants";

type VideoPlayerWebsiteProps = {
  chapters: Chapter[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  embeddable?: boolean;
};
export function VideoPlayerWebsite({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerWebsiteProps) {
  const playerRef = React.useRef<Player | null>(null);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerHeight, setVideoContainerHeightChange] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter);

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
        playerRef={playerRef}
        videoWrapperStyle={videoWrapperStyle}
        videoPositionStyle={videoPositionStyle}
        chapters={chapters}
        initialActiveChapter={initialActiveChapter}
        onFullscreenChange={onFullscreenChange}
        onContainerHeightChange={onContainerHeightChange}
        currentChapter={currentChapter}
        setCurrentChapter={setCurrentChapter}
        renderChapter={({ chapter, episode, isVisible }) => (
          <ChapterTitle
            title={chapter?.title}
            episode={episode}
            isVisible={isVisible}
          />
        )}
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
