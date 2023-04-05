"use client";
import { playlist } from "@ui/VideoPlayer/constants";
// import { VideoPlayerEmbed } from "@ui/VideoPlayer/player-embed/VideoPlayerEmbed";
import { VideoPlayerEmbedSeperate } from "@ui/VideoPlayer/player-embed/VideoPlayerEmbedSeperate";
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
      <VideoPlayerEmbedSeperate
        chapters={playlist}
        initialActiveChapter={chapter}
        onChapterChange={onChapterChange}
      />
    </ThemeProvider>
  );
}
