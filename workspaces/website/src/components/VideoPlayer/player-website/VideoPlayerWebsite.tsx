
import { Box } from "@chakra-ui/react";
import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import { useUpdateEffect } from "react-use";
import Player from "video.js/dist/types/player";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import ChaptersPlaylist from "./ChaptersPlaylist";
import ChapterTitle from "./ChapterTitle";
import { VideoPlayerCore } from "../player-core/VideoPlayerCore";
import { Chapter } from "../constants";
import BottomPlaylist from "./BottomPlaylist";

type VideoPlayerWebsiteProps = {
  chapters: Chapter[];
  currentChapter: { id: string };
  onChapterChange: (id: string) => void;
  embeddable?: boolean;
  playlistOnBottom?: boolean;
};
export function VideoPlayerWebsite({
  chapters,
  currentChapter,
  onChapterChange,
  playlistOnBottom,
}: VideoPlayerWebsiteProps) {
  const playerRef = React.useRef<Player | null>(null);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerHeight, setVideoContainerHeightChange] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useUpdateEffect(() => {
    onChapterChange(currentChapter.id);
    playerRef.current?.play();
  }, [currentChapter]);

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

  const playlistProps = useMemo(() => ({
    height: videoContainerHeight,
    chapters,
    currentChapter,
    onChapterChange,
  }), [videoContainerHeight, chapters, currentChapter, onChapterChange]);

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
        position: "relative",
      }}
      gap="32px"
      gridTemplateColumns={{
        base: "1fr",
        lg: playlistOnBottom ? "1fr" : "2fr 1fr",
      }}
    >
      <VideoPlayerCore
        playerRef={playerRef}
        videoWrapperStyle={videoWrapperStyle}
        videoPositionStyle={videoPositionStyle}
        chapters={chapters}
        onFullscreenChange={onFullscreenChange}
        onContainerHeightChange={onContainerHeightChange}
        currentChapter={currentChapter}
        onChapterChange={onChapterChange}
        renderChapter={({ chapter, episode, isVisible }) => (
          <ChapterTitle
            title={chapter?.title}
            episode={episode}
            isVisible={isVisible}
          />
        )}
      />
      {playlistOnBottom ? (
        <BottomPlaylist {...playlistProps}/>
      ) : (
        <ChaptersPlaylist {...playlistProps}/>
      )}
    </Box>
  );
}
