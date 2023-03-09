"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "react-scrubber/lib/scrubber.css";
import { useMeasure } from "react-use";
import { Chapter } from "./utils";

import { VideoPlayerCore } from "./VideoPlayerCore";

type VideoPlayerInWebsiteProps = {
  chapters: Chapter[];
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
  const [videoContainerRef, { height }] = useMeasure();

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", paddingBottom: "56.25%", flex: 1 }}>
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
            videoContainerRef={videoContainerRef}
          />
        </div>
      </div>
      <Box
        sx={{
          overflow: "scroll",
          maxHeight: height,
          display: "grid",
          gap: "10px",
        }}
      >
        {chapters.map((chapter) => {
          return (
            <Box
              key={chapter.id}
              as={Link}
              href={`/${chapter.id}`}
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Image
                src={chapter.thumbnail}
                width={142}
                height={80}
                alt={chapter.title}
              />
              <Box>
                <Box
                  as="h2"
                  sx={{
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  {chapter.title}
                </Box>
                <Box
                  as="p"
                  sx={{
                    maxW: "200px",
                    fontSize: "12px",
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  {chapter.description}
                </Box>
                <Box as="p" fontSize="12px" lineHeight={1}>
                  00:20
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
