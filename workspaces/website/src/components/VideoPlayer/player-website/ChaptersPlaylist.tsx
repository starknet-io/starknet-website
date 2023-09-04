import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { Chapter } from "../constants";
import { useUpdateEffect } from "react-use";

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
  const isMobile = useBreakpointValue({ base: true, lg: false });

  useUpdateEffect(() => {
    const chapterElement = document.getElementById(currentChapter);
    if (chapterElement) {
      chapterElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: isMobile ? "center" : "nearest",
      });
    }
  }, [currentChapter, isMobile]);

  return (
    <Box
      sx={{
        overflow: "scroll",
        maxHeight: height,
        gap: "16px",
        cursor: "pointer",
      }}
      display={{ base: "flex", lg: "grid" }}
      maxH={{ base: "auto", lg: height }}
      flexWrap="nowrap"
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
            minW={{ base: "151px", lg: "auto" }}
            flexDir={{ base: "column", lg: "row" }}
            flexWrap="nowrap"
            padding={{ base: "0px 0px 2rem", lg: "0px 1rem 0px" }}
            height="max-content"
          >
            <Box
              maxW={{ base: "151px", lg: "99px", xl: "151px" }}
              height="min-content"
            >
              <Image
                src={chapter.thumbnail}
                width={{
                  base: "151px",
                  lg: "99px",
                  xl: "151px",
                }}
                height="auto"
                alt={chapter.title}
                style={{
                  // borderBottom: isActive ? "1px solid#EC796B" : "",
                  borderRadius: "10px",
                }}
                aspectRatio="16/9"
              />
            </Box>
            <Box display="flex" flexDir="column" gap="4px">
              <Box
                as="h5"
                fontSize="sm"
                fontWeight="bold"
                color={isActive ? "heading-navy-fg" : "fg-muted"}
                lineHeight="normal"
              >
                {chapter.title}
              </Box>
              <Box
                as="p"
                fontSize="12px"
                lineHeight="15px"
                sx={{
                  maxW: "200px",
                  color: isActive ? "heading-navy-fg" : "fg-muted",
                }}
              >
                {chapter.description}
              </Box>
              <Box
                as="p"
                fontSize="xs"
                lineHeight={1}
                sx={{
                  color: isActive ? "heading-navy-fg" : "fg-muted",
                }}
                flex={1}
                display="flex"
                alignItems="flex-end"
              >
                {chapter.durationTime}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
