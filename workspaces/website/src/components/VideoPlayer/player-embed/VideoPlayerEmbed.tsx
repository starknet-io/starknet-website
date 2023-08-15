import React, { CSSProperties, useRef, useState } from "react";
import Player from "video.js/dist/types/player";
import ChaptersDropdown from "./ChaptersDropdown";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { SeekStatuses } from "../player-core/hooks/useSeek";
import { VideoPlayerCore } from "../player-core/VideoPlayerCore";
import { Chapter } from "../constants";

type VideoPlayerEmbedProps = {
  chapters: Chapter[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  embeddable?: boolean;
};
export function VideoPlayerEmbed({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerEmbedProps) {
  const playerRef = React.useRef<Player | null>(null);
  const positionStyle = usePlayerPositionStyle();
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter);

  const [playingStatus, setPlayingStatus] = useState<SeekStatuses>("unstarted");
  const playingStatusBeforeOpeningPlaylist = useRef<SeekStatuses>();

  const videoWrapperStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  };

  const videoPositionStyle: CSSProperties = {
    position: "absolute",
    width: positionStyle.width,
    height: positionStyle.height,
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  };

  const onToggleExpandPlaylist = (isExpanded: boolean) => {
    if (isExpanded) {
      playingStatusBeforeOpeningPlaylist.current = playingStatus;
      playerRef.current?.pause();
    } else if (playingStatusBeforeOpeningPlaylist.current === "playing") {
      playerRef.current?.play();
    }
  };

  return (
    <VideoPlayerCore
      playerRef={playerRef}
      embedded={true}
      videoWrapperStyle={videoWrapperStyle}
      videoPositionStyle={videoPositionStyle}
      chapters={chapters}
      initialActiveChapter={initialActiveChapter}
      currentChapter={currentChapter}
      setCurrentChapter={setCurrentChapter}
      onChapterChange={onChapterChange}
      onPlayingStatusChange={setPlayingStatus}
      renderChapter={({ chapter, isVisible, episode }) => (
        <ChaptersDropdown
          title={chapter?.title}
          episode={episode}
          isControlActive={isVisible}
          chapters={chapters}
          currentChapter={currentChapter}
          onChapterSelect={setCurrentChapter}
          onToggleExpandPlaylist={onToggleExpandPlaylist}
          timeDisplay={chapter.durationTime}
        />
      )}
    />
  );
}
