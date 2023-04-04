"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import VideoJS from "@ui/VideoPlayer/lib/VideoJS";
import React, {
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMeasure, useInterval, useUpdateEffect } from "react-use";
import Player from "video.js/dist/types/player";
import ChaptersPlaylist from "./ChaptersPlaylist";
import { useChapters } from "../hooks/useChapters";
import useGetCurrentChapter from "../hooks/useGetCurrentChapter";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "../hooks/useToggleFullscreen";
import { Chapter, CHAPTER_CHANGE_TIMEOUT } from "../constants";
import ChapterAutoPlayModal from "../ChapterAutoPlayModal";
import ChapterTitle from "./ChapterTitle";
import BigPlayButton from "../control-bar/BigPlayButton";
import CustomControl from "../control-bar/CustomControl";
import usePreventDefaultHotkeys from "../hooks/usePreventDefaultHotkeys";
import { useSeek } from "../hooks/useSeek";
import { useVolume } from "../hooks/useVolume";
import ShareModal from "../share/ShareModal";
import {
  getChapterById,
  getNextChapter,
  getVideoSrc,
  isFinalChapter,
} from "../utils";

const videoJsOptions = {
  autoplay: false,
  controls: false,
  responsive: true,
  preload: "auto",
  fluid: true,
  userActions: {
    hotkeys: {
      playPauseKey: function () {},
      muteKey: function () {},
      toggleKey: function () {},
    },
  },
  poster:
    "https://image.mux.com/UZMwOY6MgmhFNXLbSFXAuPKlRPss5XNA/thumbnail.jpg?time=11",
};

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
  const [bufferPercent, setBufferPercent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerRef, { height }] = useMeasure<HTMLDivElement>();
  const [isBigPlayBtnVisible, setIsBigPlayBtnVisible] = useState(true);
  const [isChapterChangeModalOpen, setIsChapterChangeModalOpen] =
    useState(false);
  const [_, setChapterTimeoutCount] = useState(0);
  const {
    isOpen: isShareModalOpen,
    onClose: onCloseShareModal,
    onOpen: onOpenShareModal,
  } = useDisclosure();

  const { ref, toggleFullscreen, isFullscreen } = useToggleFullscreen();

  const paused = useRef(false);
  const [isControlActive, setIsControlActive] = useState(false);

  const { volume, isMuted, toggleMute, onVolumeScrubChange, setVolume } =
    useVolume({
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

  const lastPlayerTime = useRef(currentTime);

  const { currentChapter, setCurrentChapter } = useChapters({
    playerRef,
    initialActiveChapter,
    chapters,
  });

  const { chapter, chapterIndex } = useGetCurrentChapter({
    chapters,
    currentChapter,
  });

  const playNextChapter = () => {
    const nextChapter = getNextChapter(chapters, currentChapter);
    setCurrentChapter(nextChapter.id);
  };

  useInterval(
    () => {
      setChapterTimeoutCount((c) => {
        if (c === CHAPTER_CHANGE_TIMEOUT) {
          playNextChapter();
          return c;
        }
        return c + 1;
      });
    },
    isChapterChangeModalOpen ? 1000 : null
  );

  usePreventDefaultHotkeys();

  useUpdateEffect(() => {
    onChapterChange?.(currentChapter);
    playerRef.current?.play();
  }, [currentChapter]);

  useUpdateEffect(() => {
    if (playingStatus !== "ended") {
      setIsChapterChangeModalOpen(false);
    }
  }, [currentChapter, playingStatus]);

  const videojsOptionsWithSrc = useMemo(() => {
    const chapter = getChapterById(chapters, currentChapter) || chapters[0];
    return {
      ...videoJsOptions,
      sources: [
        {
          src: getVideoSrc(chapter.videoId),
          type: "application/x-mpegURL",
        },
      ],
    };
  }, [currentChapter, chapters]);

  useEffect(() => {
    setIsBigPlayBtnVisible(playingStatus === "unstarted");
  }, [playingStatus]);

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
      lastPlayerTime.current = playerTime;
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
      setCurrentChapter((chapter) => {
        if (!isFinalChapter(chapters, chapter)) {
          setIsChapterChangeModalOpen(true);
          setChapterTimeoutCount(0);
        }
        return chapter;
      });
    });

    player.on("useractive", () => {
      setIsControlActive(true);
    });

    player.on("userinactive", () => {
      if (!paused.current) {
        setIsControlActive(false);
      }
    });

    player.on("pause", () => {
      paused.current = true;
      setPlayingStatus("paused");
    });

    player.on("play", () => {
      setPlayingStatus("playing");
      paused.current = false;
      setIsControlActive(true);
    });

    const volume = player.volume();
    setVolume(volume * 100);
    setCurrentChapter(currentChapter);
    player.aspectRatio("16:9");
  };

  const onChapterSelect = (ch: string) => {
    setCurrentChapter(ch);
  };

  const onBigPlayBtnClick = () => {
    playerRef.current?.play();
  };

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
      <div style={videoWrapperStyle} ref={ref}>
        <div style={videoPositionStyle} onClick={onPlayToggle}>
          <VideoJS
            options={videojsOptionsWithSrc}
            onReady={handlePlayerReady}
            videoContainerRef={videoContainerRef}
          />
        </div>
        <ChapterAutoPlayModal
          isOpen={isChapterChangeModalOpen}
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
          onClose={onCloseShareModal}
          showEmbed
          currentChapter={currentChapter}
        />
        {chapter && (
          <ChapterTitle
            title={chapter?.title}
            episode={chapterIndex + 1}
            isVisible={isControlActive}
          />
        )}
        {chapter && (
          <CustomControl
            chapter={chapter}
            playingStatus={playingStatus}
            isControlActive={isControlActive}
            totalDuration={totalDuration}
            currentTime={currentTime}
            currentDisplayTime={currentTime}
            onSeekScrubStart={(n) => {
              if (isChapterChangeModalOpen) {
                setIsChapterChangeModalOpen(false);
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
            volume={volume}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
            onShare={onOpenShareModal}
            scrubMin={0}
            scrubMax={totalDuration}
            // isDisabled={isChapterChangeModalOpen}
          />
        )}
      </div>
      <ChaptersPlaylist
        height={height}
        chapters={chapters}
        currentChapter={currentChapter}
        onChapterSelect={onChapterSelect}
      />
    </Box>
  );
}
