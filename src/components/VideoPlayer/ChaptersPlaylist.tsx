import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
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
  return (
    <Box
      sx={{
        overflow: "scroll",
        maxHeight: height,
        display: "grid",
        gap: "20px",
      }}
      maxH={{ base: "300px", lg: height }}
    >
      {chapters.map((chapter) => {
        const isActive = chapter.id === currentChapter;
        return (
          <Box
            key={chapter.id}
            onClick={() => onChapterSelect(chapter.id)}
            sx={{
              display: "flex",
              gap: "10px",
              pointer: "cursor",
            }}
          >
            <Image
              src={chapter.thumbnail}
              width={142}
              height={80}
              alt={chapter.title}
              style={{
                borderBottom: isActive ? "1px solid#EC796B" : "",
              }}
            />
            <Box>
              <Box
                as="h2"
                sx={{
                  lineHeight: 1,
                  marginBottom: 2,
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "heading-navy-fg" : "",
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
                  color: isActive ? "heading-navy-fg" : "",
                }}
              >
                {chapter.description}
              </Box>
              <Box
                as="p"
                fontSize="12px"
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
