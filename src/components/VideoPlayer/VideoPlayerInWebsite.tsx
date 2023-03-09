"use client";

import { useState } from "react";
import "react-scrubber/lib/scrubber.css";

import { VideoPlayerCore } from "./VideoPlayerCore";

type VideoPlayerInWebsiteProps = {
  chapters: { id: string; title: string; startAt: number; endAt: number }[];
  initialActiveChapter: string;
  onChapterChange?: (currentChapter: string) => void;
};
export function VideoPlayerInWebsite({
  chapters,
  initialActiveChapter,
  onChapterChange,
}: VideoPlayerInWebsiteProps) {
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [isControlActive, setIsControlActive] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter);

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <VideoPlayerCore
          chapters={chapters}
          currentChapter={currentChapter}
          onChapterChange={setCurrentChapter}
        />
      </div>
    </div>
  );
}
