import VideoJS from "@ui/VideoPlayer/player-core/VideoJS";
import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMeasure, useUpdateEffect } from "react-use";
import Player from "video.js/dist/types/player";
import ChapterAutoPlayModal from "./ChapterAutoPlayModal";
import { Chapter } from "../constants";
import BigPlayButton from "./control-bar/BigPlayButton";
import CustomControl from "./control-bar/CustomControl";
import useGetCurrentChapter from "./hooks/useGetCurrentChapter";
import { usePlayerActive } from "./hooks/usePlayerActive";
import usePlayNextChapter from "./hooks/usePlayNextChapter";
import usePreventDefaultHotkeys from "./hooks/usePreventDefaultHotkeys";
import { SeekStatuses, useSeek } from "./hooks/useSeek";
import useShareModal from "./hooks/useShareModal";
import { useToggleFullscreen } from "./hooks/useToggleFullscreen";
import useVideoJSOptions from "./hooks/useVideoJSOptions";
import { useVolume } from "./hooks/useVolume";
import ShareModal from "./share/ShareModal";
import { isFinalChapter } from "./utils";
import "./player-overrides.css";
import { FinalChapterLeftCTA } from "./chapter-cta/FinalChapterLeftCTA";
import { FinalChapterRightCTA } from "./chapter-cta/FinalChapterRightCTA";
import { Box } from "@chakra-ui/react";

export type PlayerRef = React.MutableRefObject<Player | null>;

type VideoPlayerCoreProps = {
  playerRef: PlayerRef;
  videoWrapperStyle: CSSProperties;
  videoPositionStyle: CSSProperties;
  chapters: Chapter[];
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onContainerHeightChange?: (height: number, width: number) => void;
  currentChapter: { id: string };
  onChapterChange: (id: string) => void;
  renderChapter: (options: {
    chapter: Chapter;
    episode: number;
    isVisible: boolean;
  }) => React.ReactNode;
  embedded?: boolean;
  onPlayingStatusChange?: (playingStatus: SeekStatuses) => void;
};
export function VideoPlayerCore({
  playerRef,
  videoWrapperStyle,
  videoPositionStyle,
  onFullscreenChange,
  onContainerHeightChange,
  currentChapter,
  onChapterChange,
  renderChapter,
  chapters,
  embedded,
  onPlayingStatusChange,
}: VideoPlayerCoreProps) {
  const [bufferPercent, setBufferPercent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [videoContainerRef, { height, width }] = useMeasure<HTMLDivElement>();
  const [isBigPlayBtnVisible, setIsBigPlayBtnVisible] = useState(true);
  const currentChapterRef = useRef(currentChapter.id);

  const {
    ref: videoWrapperRef,
    toggleFullscreen,
    isFullscreen,
  } = useToggleFullscreen();

  const isPlayerActive = usePlayerActive(videoWrapperRef);

  const {
    volume,
    isMuted,
    toggleMute,
    onVolumeScrubStart,
    onVolumeScrubChange,
    onVolumeScrubEnd,
    isInteractingWithVolume,
    setVolume,
  } = useVolume({
    playerRef,
  });

  const {
    playingStatus,
    currentTime,
    onPlayToggle,
    onSeekScrubStart,
    onSeekScrubChange,
    onSeekScrubEnd,
    setCurrentTime,
    setPlayingStatus,
  } = useSeek({ totalDuration, playerRef });

  const { onShareModalClose, onShareModalOpen, isShareModalOpen } =
    useShareModal({
      playerRef,
      playingStatus,
    });

  const { chapter, chapterIndex } = useGetCurrentChapter({
    chapters,
    currentChapter,
  });

  const {
    isPlayNextModalOpen,
    openPlayNextModal,
    closePlayNextModal,
    playNextChapter,
  } = usePlayNextChapter({
    chapters,
    currentChapter,
    playingStatus,
    onChapterChange,
  });

  const videojsOptions = useVideoJSOptions({
    chapters,
    currentChapter,
  });

  usePreventDefaultHotkeys();

  useUpdateEffect(() => {
    onChapterChange?.(currentChapter.id);
    playerRef.current?.play();
    currentChapterRef.current = currentChapter.id;
  }, [currentChapter]);

  useEffect(() => {
    setIsBigPlayBtnVisible(playingStatus === "unstarted");
  }, [playingStatus]);

  useEffect(() => {
    onFullscreenChange?.(isFullscreen);
  }, [isFullscreen, onFullscreenChange]);
  useEffect(() => {
    onContainerHeightChange?.(height, width);
  }, [height, width, onContainerHeightChange]);

  useEffect(() => {
    onPlayingStatusChange?.(playingStatus);
  }, [playingStatus, onPlayingStatusChange]);

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log('player is waiting')
    });

    player.on("dispose", () => {
      // videojs.log('player will dispose')
    });

    player.on("timeupdate", function () {
      const playerTime = playerRef.current?.currentTime();
      if (playerTime === undefined) {
        return;
      }

      setCurrentTime(playerTime);
    });

    player.on("progress", function () {
      const buffer = playerRef.current?.bufferedPercent();
      setBufferPercent(buffer || 0);
    });

    player.on("dblclick", function () {
      toggleFullscreen();
    });

    player.on("durationchange", function () {
      if (playerRef.current) {
        const duration = playerRef.current.duration();
        setCurrentTime(0);
        setTotalDuration(duration);
      }
    });

    player.on("ended", function () {
      setPlayingStatus("ended");
      if (!isFinalChapter(chapters, currentChapterRef.current)) {
        openPlayNextModal();
      }
    });

    player.on("pause", () => {
      setPlayingStatus("paused");
    });

    player.on("play", () => {
      const volume = player.volume();
      setVolume(volume * 100);
      setPlayingStatus("playing");
    });

    onChapterChange?.(currentChapter.id);
    player.aspectRatio("16:9");
  };

  const onBigPlayBtnClick = () => {
    playerRef.current?.play();
  };

  const isControlVisible = useMemo(() => {
    if (playingStatus === "unstarted") {
      return false;
    }

    if (playingStatus === "paused" || playingStatus === "ended") {
      return true;
    }
    return isPlayerActive || isInteractingWithVolume;
  }, [isInteractingWithVolume, isPlayerActive, playingStatus]);

  const shouldShowChapterCTA =
    chapter?.id === chapters[chapters.length - 1].id &&
    totalDuration !== 0 &&
    totalDuration - currentTime < 5;

  return (
    <Box
      sx={{
        ".video-js, .video-js .vjs-tech, .vjs-poster img": {
          borderRadius: "8px",
        },
      }} 
      style={videoWrapperStyle} 
      ref={videoWrapperRef}
    >
      <div style={videoPositionStyle} onClick={onPlayToggle}>
        <VideoJS
          options={videojsOptions}
          onReady={handlePlayerReady}
          videoContainerRef={videoContainerRef}
        />

        <FinalChapterLeftCTA
          height={height}
          width={width}
          isVisible={shouldShowChapterCTA}
        />
        <FinalChapterRightCTA
          height={height}
          width={width}
          isVisible={shouldShowChapterCTA}
        />
      </div>
      <ChapterAutoPlayModal
        isOpen={isPlayNextModalOpen}
        onPlayNextChapter={playNextChapter}
        positionStyle={videoPositionStyle}
      />
      <BigPlayButton
        onClick={onBigPlayBtnClick}
        positionStyle={videoPositionStyle}
        isVisible={isBigPlayBtnVisible}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={onShareModalClose}
        chapter={chapter || chapters[0]}
        embedded={embedded}
      />
      {chapter &&
        renderChapter({
          chapter,
          episode: chapterIndex + 1,
          isVisible: isControlVisible,
        })}

      {chapter && (
        <CustomControl
          chapter={chapter}
          playingStatus={playingStatus}
          isControlVisible={isControlVisible}
          totalDuration={totalDuration}
          currentTime={currentTime}
          onSeekScrubStart={(n) => {
            if (isPlayNextModalOpen) {
              closePlayNextModal();
            }
            onSeekScrubStart(n);
          }}
          onSeekScrubEnd={(time) => {
            if (playingStatus === "ended") {
              setPlayingStatus("paused");
            }

            onSeekScrubEnd(time);
          }}
          onSeekScrubChange={onSeekScrubChange}
          bufferPosition={totalDuration * bufferPercent}
          onPlayToggle={onPlayToggle}
          isMuted={isMuted}
          toggleMute={toggleMute}
          onVolumeScrubChange={onVolumeScrubChange}
          onVolumeScrubStart={onVolumeScrubStart}
          onVolumeScrubEnd={onVolumeScrubEnd}
          isInteractingWithVolume={isInteractingWithVolume}
          volume={volume}
          toggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
          onShare={onShareModalOpen}
        />
      )}
    </Box>
  );
}
