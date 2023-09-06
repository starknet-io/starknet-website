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
        cursor: "pointer",
      }}
      gap={{
        base: "40px",
        lg: "lg",
      }}
      display="flex"
      flexDirection={{ base: "row", lg: "column" }}
      maxH={{ base: "auto", lg: height }}
      flexWrap="nowrap"
    >
      {chapters.map((chapter) => {
        const isActive = chapter.id === currentChapter;
        const textColor = isActive
          ? "content.accent.value"
          : "content.accent.disabled";

        return (
          <Box
            key={chapter.id}
            id={chapter.id}
            onClick={() => onChapterSelect(chapter.id)}
            sx={{
              display: "flex",
              pointer: "cursor",
            }}
            minW={{ base: "151px", md: "175px", lg: "auto" }}
            maxW={{ base: "151px", md: "175px", lg: "none" }}
            flexDirection={{ base: "column", lg: "row" }}
            flexWrap="nowrap"
            padding={{ base: "0px 0px 2rem 0px", lg: "0px 1rem 0px 0px" }}
            height="max-content"
            gap="md"
            _first={{
              marginLeft: {
                base: "auto",
                lg: "0px",
              },
            }}
            _last={{
              marginRight: {
                base: "auto",
                lg: "0px",
              },
            }}
          >
            <Box
              // height="min-content"
              minW={{
                base: "151px",
                md: "175px",
                lg: "151px",
              }}
            >
              <Image
                src={chapter.thumbnail}
                width={{
                  base: "151px",
                  md: "175px",
                  lg: "151px",
                }}
                height="auto"
                alt={chapter.title}
                style={{
                  // borderBottom: isActive ? "1px solid#EC796B" : "",
                  borderRadius: "10px",
                }}
                aspectRatio="16/9"
                objectFit="cover"
              />
            </Box>
            <Box display="flex" flexDir="column" gap="base" color={textColor}>
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
                    base: "block",
                    lg: "none",
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
                  base: "none",
                  lg: "flex",
                }}
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
