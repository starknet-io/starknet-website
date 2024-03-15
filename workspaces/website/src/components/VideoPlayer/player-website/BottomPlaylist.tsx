
/**
 * Module dependencies
 */

import { Box, Image } from "@chakra-ui/react";
import { Chapter } from "../constants";
import { useRef } from "react";

/**
 * `BottomPlaylistProps` type.
 */

type BottomPlaylistProps = {
  height: number;
  chapters: Chapter[];
  currentChapter: { id: string };
  onChapterChange: (id: string) => void;
  playlistOnBottom?: boolean;
};

/**
 * Export `BottomPlaylist` component.
 */

export default function BottomPlaylist({
  chapters,
  currentChapter,
  onChapterChange
}: BottomPlaylistProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box
      borderColor="border.divider"
      borderStyle="solid"
      display="flex"
      flexDirection={{ base: "row", lg: 'row' }}
      flexWrap="nowrap"
      gap={{
        base: "40px",
        lg: '40px',
      }}
      marginTop={'24px'}
      maxH={{ base: "auto", lg: 'auto' }}
      overflowX="auto"
      ref={ref}
      sx={{
        overflow: "auto",
        cursor: "pointer",
      }}
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
              pointer: "cursor",
            }}
            minW={{
              base: "151px",
              md: "175px"
            }}
            maxW={{
              base: "151px",
              md: "175px"
            }}
            flexDirection={{
              base: "column"
            }}
            flexWrap="nowrap"
            padding={{
              base: "0px 0px 1rem 0px",
            }}
            height="max-content"
            gap="16px"
            _first={{
              marginLeft: {
                base: "auto"
              },
            }}
            _last={{
              marginRight: {
                base: "auto"
              },
            }}
          >
            <Box
              minW={{
                base: "151px",
                md: "175px"
              }}
            >
              <Image
                src={chapter.thumbnail}
                width={{
                  base: "151px",
                  md: "175px"
                }}
                height="auto"
                alt={chapter.title}
                style={{
                  borderRadius: "10px",
                }}
                aspectRatio="16/9"
                objectFit="cover"
              />
            </Box>

            <Box display="flex" flexDir="column" gap="8px" color={textColor}>
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
    </Box>
  );
}
