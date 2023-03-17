"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import VideoJS from "@ui/VideoPlayer/lib/VideoJS";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { useMeasure, useInterval } from "react-use";
import Player from "video.js/dist/types/player";
import ChaptersPlaylist from "../ChaptersPlaylist";
import { useChapters } from "../hooks/useChapters";
import useGetCurrentChapter from "../hooks/useGetCurrentChapter";
import { usePlayerPositionStyle } from "../hooks/usePlayerPositionStyle";
import { useToggleFullscreen } from "../hooks/useToggleFullscreen";
import VideoMeta from "../meta/VideoMeta";
import { Chapter } from "../utils";
import ChapterTitle from "./ChapterTitle";
import BigPlayButton from "./control-bar/BigPlayButton";
import CustomControl from "./control-bar/CustomControl";
import usePreventDefaultHotkeys from "./hooks/usePreventDefaultHotkeys";
import { useSeek } from "./hooks/useSeek";
import { useVolume } from "./hooks/useVolume";

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

type VideoPlayerProps = {
  chapters: Chapter[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  embeddable?: boolean;
};
export function VideoPlayer({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerProps) {
  const playerRef = React.useRef<Player | null>(null);
  const [bufferPercent, setBufferPercent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const positionStyle = usePlayerPositionStyle();
  const [videoContainerRef, { height }] = useMeasure<HTMLDivElement>();
  const [isBigPlayBtnVisible, setIsBigPlayBtnVisible] = useState(true);
  const [isChapterChangeModalOpen, setIsChapterChangeModalOpen] =
    useState(false);
  const [isRunning, toggleIsRunning] = useState(false);

  const [chapterTimeoutCount, setChapterTimeoutCount] = React.useState(5);

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
    toggleIsRunning(false);
    playerRef.current?.play();
    setPlayingStatus("playing");
    const nextChapter = getSeekChapter(playerRef.current!.currentTime() + 2);
    if (nextChapter) {
      playerRef.current?.currentTime(nextChapter.startAt);
      setCurrentChapter(nextChapter.id);
    }
  };

  const replayCurrentChapter = () => {
    setIsChapterChangeModalOpen(false);
    toggleIsRunning(false);

    const activeChapter = getSeekChapter(playerRef.current!.currentTime() - 1);
    if (activeChapter) {
      playerRef.current?.currentTime(activeChapter.startAt);
      playerRef.current?.play();
      setPlayingStatus("playing");
      setCurrentChapter(activeChapter.id);
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
    isRunning ? 1000 : null
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
        setPlayingStatus("paused");
        toggleIsRunning(true);
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
      if (!paused.current) {
        setIsControlActive(false);
      }
    });

    player.on("pause", () => {
      paused.current = true;
    });

    player.on("play", () => {
      paused.current = false;
      setIsControlActive(true);
    });

    const volume = player.volume();
    setVolume(volume * 100);
    goToChapter(currentChapter);
    setCurrentChapter(currentChapter);
    player.aspectRatio("16:9");
  };

  const onChapterSelect = (ch: string) => {
    goToChapter(ch);
    if (playingStatus === "unstarted") {
      setPlayingStatus("paused");
      playerRef.current?.play();
      playerRef.current?.pause();
    }

    if (isChapterChangeModalOpen) {
      setIsChapterChangeModalOpen(false);
      toggleIsRunning(false);
      setPlayingStatus("playing");
      playerRef.current?.play();
    }
  };

  const onBigPlayBtnClick = () => {
    playerRef.current?.play();
    setPlayingStatus("playing");
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
    <>
      <VideoMeta path="/custom-control" />

      <Box
        sx={{
          display: "grid",
          gap: "20px",
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
              options={videoJsOptions}
              onReady={handlePlayerReady}
              videoContainerRef={videoContainerRef}
            />
          </div>
          <Box
            sx={{
              ...videoPositionStyle,
              zIndex: 9999,
              background: "rgba(0,0,0, .7)",
              display: "grid",
              placeContent: "center",
              gap: "30px",
              pointerEvents: isChapterChangeModalOpen ? "auto" : "none",
              opacity: isChapterChangeModalOpen ? 1 : 0,
              visibility: isChapterChangeModalOpen ? "visible" : "hidden",
              transition: "all .5s easy-in-out",
            }}
          >
            <Text textAlign="center" color="white" fontSize="lg">
              Going to next chapter in {chapterTimeoutCount} seconds
            </Text>
            <Flex gap="20px">
              <Button variant="outline" onClick={replayCurrentChapter}>
                Replay
              </Button>
              <Button onClick={playNextChapter}>Confirm</Button>
            </Flex>
          </Box>
          <BigPlayButton
            onClick={onBigPlayBtnClick}
            positionStyle={videoPositionStyle}
            isVisible={isBigPlayBtnVisible}
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
    </>
  );
}
