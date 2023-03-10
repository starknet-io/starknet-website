"use client";

import { Box } from "@chakra-ui/react";
import React, { Ref, useEffect, useRef, useState } from "react";
import "react-scrubber/lib/scrubber.css";
import VideoJS from "./lib/VideoJS";

import { createShareButton, createFullscreenButton } from "./control-bar";
import Player from "video.js/dist/types/player";

const videoJsOptions = {
  autoplay: false,
  controls: true,
  responsive: false,
  preload: "auto",
  fluid: true,
  poster:
    "https://image.mux.com/UZMwOY6MgmhFNXLbSFXAuPKlRPss5XNA/thumbnail.jpg?time=11",
  controlBar: {
    fullscreenToggle: false,
    pictureInPictureToggle: false,
  },
  userActions: {
    doubleClick: false,
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
  chapters: { id: string; title: string; startAt: number; endAt: number }[];
  currentChapter: string;
  onChapterChange?: (currentChapter: string) => void;
  onFullscreen?: () => void;
  onControlActiveChange?: (b: boolean) => void;
  videoContainerRef?: Ref<HTMLDivElement>;
};
export function VideoPlayerCore({
  chapters,
  currentChapter,
  onChapterChange,
  onFullscreen,
  onControlActiveChange,
  videoContainerRef,
}: VideoPlayerProps) {
  const [isShareVisible, setIsShareVisible] = useState(false);
  const paused = useRef(false);
  const playerRef = useRef<Player | null>(null);

  const goToChapter = (chapterId: string) => {
    const chapter = chapters.find((p) => p.id === chapterId);
    if (chapterId && chapter) {
      // setCurrentChapter(chapter.id);
      playerRef.current?.currentTime(chapter.startAt);
    }
  };

  useEffect(() => {
    goToChapter(currentChapter);
  }, [currentChapter]);

  const onShare = () => {
    if (document?.fullscreenElement) {
      document.exitFullscreen();
      // modalRef.current?.requestFullscreen()
    }
    setIsShareVisible(true);
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log('player is waiting')
    });

    player.on("dispose", () => {
      // videojs.log('player will dispose')
    });

    player.on("useractive", () => {
      onControlActiveChange?.(true);
    });

    player.on("userinactive", () => {
      if (!paused.current) {
        onControlActiveChange?.(false);
      }
    });

    player.on("pause", () => {
      // setIsPlaying(false)
      paused.current = true;
    });

    player.on("play", () => {
      paused.current = false;
      onControlActiveChange?.(true);
    });

    if (onChapterChange) {
      player.on("timeupdate", function () {
        const currentTime = playerRef.current?.currentTime();

        if (currentTime === undefined) {
          return;
        }

        const newChapter = chapters.find(
          (p) => currentTime >= p.startAt && currentTime < p.endAt
        );

        if (newChapter && newChapter?.id !== currentChapter) {
          onChapterChange(newChapter.id);
        }
      });
    }

    player.aspectRatio("16:9");
    createShareButton({ player, onShare });
    if (onFullscreen) {
      createFullscreenButton({ player, onFullscreen });
    }
    goToChapter?.(currentChapter);
  };

  return (
    <VideoJS
      options={videoJsOptions}
      onReady={handlePlayerReady}
      videoContainerRef={videoContainerRef}
    />
  );
}
