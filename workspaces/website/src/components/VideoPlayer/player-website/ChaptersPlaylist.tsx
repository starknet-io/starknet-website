import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { Chapter } from "../constants";
import { useUpdateEffect } from "react-use";

type ChaptersPlaylistProps = {
  height: number;
  chapters: Chapter[];
  currentChapter: string;
  onChapterSelect: (currentChapter: string) => void;
  playlistOnBottom?: boolean;
};

export default function ChaptersPlaylist({
  height,
  chapters,
  currentChapter,
  onChapterSelect,
  playlistOnBottom,
}: ChaptersPlaylistProps) {
  // useUpdateEffect(() => {
  //   const chapterElement = document.getElementById(currentChapter);
  //   if (chapterElement) {
  //     chapterElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //       inline: isMobile ? "center" : "nearest",
  //     });
  //   }
  // }, [currentChapter, isMobile]);

  return (
    <Box
      sx={{
        overflow: "scroll",
        cursor: "pointer",
      }}
      gap={{
        base: "40px",
        lg: playlistOnBottom ? "40px" : "lg",
      }}
      display="flex"
      flexDirection={{ base: "row", lg: playlistOnBottom ? "row" : "column" }}
      maxH={{ base: "auto", lg: playlistOnBottom ? "auto" : height }}
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
            minW={{
              base: "151px",
              md: "175px",
              lg: playlistOnBottom ? "175px" : "auto",
            }}
            maxW={{
              base: "151px",
              md: "175px",
              lg: playlistOnBottom ? "175px" : "none",
            }}
            flexDirection={{
              base: "column",
              lg: playlistOnBottom ? "column" : "row",
            }}
            flexWrap="nowrap"
            padding={{ base: "0px 0px 2rem 0px", lg: "0px 1rem 0px 0px" }}
            height="max-content"
            gap="md"
            _first={{
              marginLeft: {
                base: "auto",
                lg: playlistOnBottom ? "auto" : "0px",
              },
            }}
            _last={{
              marginRight: {
                base: "auto",
                lg: playlistOnBottom ? "auto" : "0px",
              },
            }}
          >
            <Box
              // height="min-content"
              minW={{
                base: "151px",
                md: "175px",
                lg: playlistOnBottom ? "175px" : "151px",
              }}
            >
              <Image
                src={chapter.thumbnail}
                width={{
                  base: "151px",
                  md: "175px",
                  lg: playlistOnBottom ? "175px" : "151px",
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
                    lg: playlistOnBottom ? "block" : "none",
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
                  lg: playlistOnBottom ? "none" : "flex",
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
