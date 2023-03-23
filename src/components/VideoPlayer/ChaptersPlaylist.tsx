import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { Chapter } from "./utils";

type ChaptersPlaylistProps = {
  height: number;
  chapters: Chapter[];
  currentChapter: string;
  onChapterSelect: (currentChapter: string) => void;
};

export default function ChaptersPlaylist({
  height,
  chapters,
  currentChapter,
  onChapterSelect,
}: ChaptersPlaylistProps) {
  useEffect(() => {
    const chapterElement = document.getElementById(currentChapter);
    if (chapterElement) {
      chapterElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentChapter]);

  return (
    <Box
      sx={{
        overflow: "scroll",
        maxHeight: height,
        display: "grid",
        gap: "16px",
        cursor: "pointer",
      }}
      maxH={{ base: "300px", lg: height }}
    >
      {chapters.map((chapter) => {
        const isActive = chapter.id === currentChapter;
        return (
          <Box
            key={chapter.id}
            id={chapter.id}
            onClick={() => onChapterSelect(chapter.id)}
            sx={{
              display: "flex",
              gap: "16px",
              pointer: "cursor",
            }}
          >
            <Image
              src={chapter.thumbnail}
              width={142}
              height={80}
              alt={chapter.title}
              style={{
                // borderBottom: isActive ? "1px solid#EC796B" : "",
                borderRadius: "10px",
              }}
            />
            <Box>
              <Box
                as="h2"
                fontSize="sm"
                sx={{
                  lineHeight: 1,
                  marginBottom: "8px",
                  fontWeight: isActive ? 700 : "",
                  color: isActive ? "heading-navy-fg" : "",
                }}
              >
                {chapter.title}
              </Box>
              <Box
                as="p"
                fontSize="xs"
                marginBottom="8px"
                sx={{
                  maxW: "200px",
                  lineHeight: 1,
                  color: isActive ? "heading-navy-fg" : "",
                }}
              >
                {chapter.description}
              </Box>
              <Box
                as="p"
                fontSize="xs"
                lineHeight={1}
                sx={{
                  color: isActive ? "heading-navy-fg" : "",
                }}
              >
                00:20
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
