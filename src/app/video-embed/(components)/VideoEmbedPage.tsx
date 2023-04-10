"use client";
import { playlist } from "@ui/VideoPlayer/constants";
import { EmbedVideoPlayer } from "@ui/VideoPlayer/player-embed/EmbedVideoPlayer";
import { useRouter } from "next/navigation";
import React from "react";
import { ThemeProvider } from "src/app/providers/ThemeProvider";

interface VideoEmbedPageProps {
  chapter: string;
}
export default function VideoEmbedPage({ chapter }: VideoEmbedPageProps) {
  const router = useRouter();
  const onChapterChange = (currentChapter: string) => {
    router.push(`/video-embed?chapter=${currentChapter}`);
  };

  return (
    <ThemeProvider>
      <EmbedVideoPlayer
        chapters={playlist}
        initialActiveChapter={chapter}
        onChapterChange={onChapterChange}
      />
    </ThemeProvider>
  );
}
