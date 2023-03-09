"use client";

import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Scrubber } from "react-scrubber";
import { ChaptersMenu } from "./ChaptersMenu";
import { useAutoHideToolbar } from "./hooks/useAutoHideToolbar";
import { useChapters } from "./hooks/useChapters";
import { usePlayerPositionStyle } from "./hooks/usePlayerPositionStyle";
import { useSeek } from "./hooks/useSeek";
import { useToggleFullscreen } from "./hooks/useVideoFullscreen";
import { useVolume } from "./hooks/useVolume";
import VideoJS from "./lib/VideoJS";
import VideoMeta from "./meta/VideoMeta";
import "react-scrubber/lib/scrubber.css";
import {
  EmbedButton,
  FullscreenButton,
  PlayButton,
  ShareButton,
  VolumeButton,
} from "./control-bar";

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
  chapters: { id: string; title: string }[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  embeddable?: boolean;
};
export function VideoPlayer({
  chapters,
  initialActiveChapter,
  onChapterChange,
  embeddable,
}: VideoPlayerProps) {
  const playerRef = React.useRef(null);
  const [bufferPercent, setBufferPercent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const embedPositionStyle = usePlayerPositionStyle();
  const positionStyle = embeddable ? embedPositionStyle : { width: "100%" };

  const {
    ref: containerRef,
    toggleFullscreen,
    isFullscreen,
  } = useToggleFullscreen();

  const isControlActive = useAutoHideToolbar();
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

  const { currentChapter, setCurrentChapter, goToChapter, getSeekChapter } =
    useChapters({
      playerRef,
      initialActiveChapter,
      chapters,
    });

  useEffect(() => {
    onChapterChange?.(currentChapter);
  }, [currentChapter, onChapterChange]);

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
      const currentTime = playerRef.current.currentTime();
      setCurrentTime(currentTime);

      const newChapter = getSeekChapter(currentTime);

      if (newChapter && newChapter?.id !== currentChapter) {
        setCurrentChapter(newChapter.id);
      }
    });

    player.on("progress", function () {
      const buffer = playerRef.current.bufferedPercent();
      setBufferPercent(buffer);
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

    const volume = player.volume();
    setVolume(volume * 100);
    goToChapter(currentChapter);
    player.aspectRatio("16:9");
  };

  return (
    <>
      <VideoMeta path="/custom-control" />
      <Box position="absolute" inset={0} ref={containerRef} bg="#000" w="full">
        <ChaptersMenu
          currentChapter={currentChapter}
          setCurrentChapter={(ch) => goToChapter(ch)}
          isControlActive={isControlActive || playingStatus === "paused"}
          chapters={chapters}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          style={{
            ...positionStyle,
            transform: "translateX(-50%) translateY(-50%)",
          }}
          onClick={onPlayToggle}
        >
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </Box>
        <Box
          sx={{
            pos: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 10,
            width: "100%",
            display: "flex",
            flexDir: "column",
            transition: "opacity",
            transitionDuration: "0.5s",
            transitionTimingFunction: "ease-in-out",
          }}
          opacity={isControlActive || playingStatus === "paused" ? 1 : 0}
        >
          <div>
            <Scrubber
              min={0}
              max={totalDuration}
              value={currentTime}
              onScrubStart={(v) => onSeekScrubStart(v)}
              onScrubEnd={(v) => onSeekScrubEnd(v)}
              onScrubChange={(v) => onSeekScrubChange(v)}
              bufferPosition={bufferPercent * totalDuration}
            />
          </div>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              px: 5,
              py: 5,
              bg: "rgba(255, 255, 255, .6)",
              backdropBlur: "sm",
              alignItems: "baseline",
            }}
          >
            <PlayButton
              playingStatus={playingStatus}
              handlePlay={onPlayToggle}
            />
            <VolumeButton
              isMuted={isMuted}
              toggleMute={toggleMute}
              onVolumeChange={onVolumeScrubChange}
              volume={volume}
            />
            <Box
              sx={{
                display: "flex",
                flex: 1,
                gap: 5,
                justifyContent: "flex-end",
              }}
            >
              <ShareButton />
              <EmbedButton />
              <FullscreenButton
                toggleFullscreen={toggleFullscreen}
                isFullscreen={isFullscreen}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
