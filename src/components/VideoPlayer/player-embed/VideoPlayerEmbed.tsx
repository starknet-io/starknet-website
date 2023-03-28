"use client";

import VideoJS from "@ui/VideoPlayer/lib/VideoJS";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { useMeasure, useInterval } from "react-use";
import Player from "video.js/dist/types/player";
import { useChapters } from "../hooks/useChapters";
import useGetCurrentChapter from "../hooks/useGetCurrentChapter";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "../hooks/useToggleFullscreen";
import VideoMeta from "../meta/VideoMeta";
import { Chapter } from "../constants";
import ChapterAutoPlayModal from "../ChapterAutoPlayModal";
import ChaptersDropdown from "./ChaptersDropdown";
import BigPlayButton from "../control-bar/BigPlayButton";
import CustomControl from "../control-bar/CustomControl";
import usePreventDefaultHotkeys from "../hooks/usePreventDefaultHotkeys";
import { SeekStatuses, useSeek } from "../hooks/useSeek";
import { useVolume } from "../hooks/useVolume";
import { useDisclosure } from "@chakra-ui/react";
import ShareModal from "../share/ShareModal";

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
  sources: [
    {
      src: process.env.NEXT_PUBLIC_CUSTOMER_URL,
      type: "application/x-mpegURL",
    },
    // {
    //   src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    //   type: "video/mp4",
    // },
  ],
};

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
  const [bufferPercent, setBufferPercent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerRef, { height }] = useMeasure<HTMLDivElement>();
  const [isBigPlayBtnVisible, setIsBigPlayBtnVisible] = useState(true);
  const [isChapterChangeModalOpen, setIsChapterChangeModalOpen] =
    useState(false);
  const {
    isOpen: isShareModalOpen,
    onClose: onCloseShareModal,
    onOpen: onOpenShareModal,
  } = useDisclosure();

  const [_, setChapterTimeoutCount] = React.useState(5);

  const { ref, toggleFullscreen, isFullscreen } = useToggleFullscreen();

  const playingStatusBeforeOpeningPlaylist = useRef<SeekStatuses>();
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

  const { currentChapter, setCurrentChapter, goToChapter, getSeekChapter } =
    useChapters({
      playerRef,
      initialActiveChapter,
      chapters,
    });

  const { chapter, chapterIndex } = useGetCurrentChapter({
    chapters,
    currentChapter,
  });

  const playNextChapter = () => {
    setIsChapterChangeModalOpen(false);
    playerRef.current?.play();
    setPlayingStatus("playing");
    const nextChapter = getSeekChapter(playerRef.current!.currentTime() + 2);
    if (nextChapter) {
      playerRef.current?.currentTime(nextChapter.startAt);
      setCurrentChapter(nextChapter.id);
    }
  };

  useInterval(
    () => {
      setChapterTimeoutCount((c) => {
        if (c === 0) {
          playNextChapter();
          return c;
        }
        return c - 1;
      });
    },
    isChapterChangeModalOpen ? 1000 : null
  );

  usePreventDefaultHotkeys();

  useEffect(() => {
    onChapterChange?.(currentChapter);
  }, [currentChapter, onChapterChange]);

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

      const activeChapter = getSeekChapter(playerTime);

      if (
        activeChapter &&
        activeChapter?.endAt - playerTime > 0 &&
        activeChapter?.endAt - playerTime < 0.4 &&
        playerTime - lastPlayerTime.current > 0 &&
        playerTime - lastPlayerTime.current < 1
      ) {
        playerRef.current?.pause();
        setIsChapterChangeModalOpen(true);
        setChapterTimeoutCount(5);
      } else if (activeChapter) {
        setCurrentChapter(activeChapter.id);
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

    player.one("loadedmetadata", function () {
      if (playerRef.current) {
        const duration = playerRef.current.duration();
        setTotalDuration(duration);
      }
    });

    player.one("ended", function () {
      setPlayingStatus("ended");
    });

    player.on("useractive", () => {
      setIsControlActive(true);
    });

    player.on("userinactive", () => {
      if (playingStatus === "playing") {
        setIsControlActive(false);
      }
    });

    player.on("pause", () => {
      setPlayingStatus("paused");
    });

    player.on("play", () => {
      setIsControlActive(true);
      setPlayingStatus("playing");
    });

    const volume = player.volume();
    setVolume(volume * 100);
    goToChapter(currentChapter);
    setCurrentChapter(currentChapter);
    player.aspectRatio("16:9");
  };

  const onChapterSelect = (ch: string) => {
    goToChapter(ch);
    playerRef.current?.play();
    if (isChapterChangeModalOpen) {
      setIsChapterChangeModalOpen(false);
    }
  };

  const onToggleExpandPlaylist = (isExpanded: boolean) => {
    if (isExpanded) {
      playingStatusBeforeOpeningPlaylist.current = playingStatus;
      playerRef.current?.pause();
    } else if (playingStatusBeforeOpeningPlaylist.current === "playing") {
      playerRef.current?.play();
    }
  };

  const onBigPlayBtnClick = () => {
    playerRef.current?.play();
  };

  const videoWrapperStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    // height: "100%",
    // width: "100%",
  };

  const videoPositionStyle: CSSProperties = {
    position: "absolute",
    width: positionStyle.width,
    height: positionStyle.height,
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  };

  return (
    <>
      <VideoMeta path="/custom-control" />

      <div style={videoWrapperStyle} ref={ref}>
        <div style={videoPositionStyle} onClick={onPlayToggle}>
          <VideoJS
            options={videoJsOptions}
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
        <ShareModal isOpen={isShareModalOpen} onClose={onCloseShareModal} />
        {chapter && (
          <ChaptersDropdown
            title={chapter?.title}
            episode={chapterIndex + 1}
            isControlActive={isControlActive}
            chapters={chapters}
            currentChapter={currentChapter}
            onChapterSelect={onChapterSelect}
            onToggleExpandPlaylist={onToggleExpandPlaylist}
          />
        )}
        {chapter && (
          <CustomControl
            chapter={chapter}
            playingStatus={playingStatus}
            isControlActive={isControlActive}
            totalDuration={totalDuration}
            currentTime={currentTime}
            onSeekScrubStart={onSeekScrubStart}
            onSeekScrubEnd={onSeekScrubEnd}
            onSeekScrubChange={onSeekScrubChange}
            bufferPosition={totalDuration * bufferPercent}
            onPlayToggle={onPlayToggle}
            isMuted={isMuted}
            toggleMute={toggleMute}
            onVolumeScrubChange={onVolumeScrubChange}
            volume={volume}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
            isDisabled={isChapterChangeModalOpen}
            onShare={onOpenShareModal}
          />
        )}
      </div>
    </>
  );
}
