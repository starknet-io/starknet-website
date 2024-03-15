import { Box, Image } from "@chakra-ui/react";
import { Chapter } from "../constants";
import styled from "@emotion/styled";
import { useEffect } from "react";

const ChaptersPlaylistWrapper = styled(Box)`
  ::-webkit-scrollbar {
    width: thin;
  }
`;

type ChaptersPlaylistProps = {
  height: number;
  chapters: Chapter[];
  currentChapter: { id: string };
  onChapterChange: (id: string) => void;
};

export default function ChaptersPlaylist({
  height,
  chapters,
  currentChapter,
  onChapterChange,
}: ChaptersPlaylistProps) {

  useEffect(() => {
    const chapterElement = document.getElementById(currentChapter.id);
    const parentElement = chapterElement?.parentElement;
    if (chapterElement && parentElement) {
      const { offsetTop, offsetLeft } = chapterElement;
      parentElement.scrollLeft = offsetLeft;
      parentElement.scrollTop = offsetTop;
    }
  }, [currentChapter]);

  return (
    <ChaptersPlaylistWrapper
      sx={{
        maxHeight: height,
        cursor: "pointer",
      }}
      display={{ base: "flex", lg: "grid" }}
      maxH={{ base: "auto", lg: height }}
      gap={{ base: "40px", lg: "16px" }}
      paddingBottom={{ base: "12px", lg: "0px" }}
      overflowY="auto"
      overflowX="auto"
      flexWrap="nowrap"
    >
      {chapters.map((chapter) => {
        const isActive = chapter.id === currentChapter.id;
        const textColor = isActive
          ? "heading-navy-fg"
          : "content.accent.disabled";

        return (
          <Box
            key={chapter.id}
            id={chapter.id}
            onClick={() => onChapterChange(chapter.id)}
            sx={{
              display: "flex",
              gap: "16px",
              pointer: "cursor",
            }}
            maxW={{ base: "151px", md: "175px", lg: "100%" }}
            flexDir={{ base: "column", lg: "row" }}
            flexWrap="nowrap"
            padding={{ lg: "0px 4px 0px 0px" }}
            height="max-content"
          >
            <Box minW={{ base: "151px", md: "175px" }}>
              <Image
                src={chapter.thumbnail}
                width={{
                  base: "151px",
                  md: "175px"
                }}
                height="auto"
                alt={chapter.title}
                style={{
                  borderRadius: "8px",
                }}
                aspectRatio="16/9"
                objectFit="cover"
              />
            </Box>

            <Box display="flex" width="100%" flexDir="column" gap="4px" color={textColor}>            
              <Box
                fontSize="12px"
                fontWeight={500}
                lineHeight="normal"
                display="flex"
                justifyContent="space-between"
              >
                {chapter.subtitle}
                <Box
                  display={{
                    base: "block"
                  }}
                >
                  {chapter.durationTime}
                </Box>
              </Box>

              <Box as="h5" fontSize="15px" fontWeight="600" lineHeight="21px">
                {chapter.title}
              </Box>

              <Box
                as="p"
                fontSize="12px"
                lineHeight="normal"
                flex={1}
                display={{
                  base: "none"
                }}
                alignItems="flex-end"
              >
                {chapter.durationTime}
              </Box>
            </Box>
          </Box>
        );
      })}
    </ChaptersPlaylistWrapper>
  );
}
