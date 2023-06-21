import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { Chapter } from "../constants";
import { convertSecondsToMMSS } from "../player-core/control-bar/utils";

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

  useEffect(() => {
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
          >
            <Box maxW={{ base: "151px", lg: "99px", xl: "151px" }}>
              <img
                src={chapter.thumbnail}
                width={151}
                height={85}
                alt={chapter.title}
                style={{
                  // borderBottom: isActive ? "1px solid#EC796B" : "",
                  borderRadius: "10px",
                }}
              />
            </Box>
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
                {convertSecondsToMMSS(chapter.duration)}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
