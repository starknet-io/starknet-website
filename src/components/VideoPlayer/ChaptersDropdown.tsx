import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { convertSecondsToMMSS } from "./control-custom/control-bar/utils";
import { Chapter } from "./utils";

interface ChaptersDropdownProps {
  title: string;
  episode: number;
  isVisible: boolean;
  chapters: Chapter[];
  currentChapter: string;
  onChapterSelect: (currentChapter: string) => void;
}
export default function ChaptersDropdown({
  title,
  episode,
  isVisible,
  chapters,
  currentChapter,
  onChapterSelect,
}: ChaptersDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleExpanded = () => setIsExpanded((b) => !b);
  return (
    <Box
      sx={{
        pos: "absolute",
        top: "16px",
        left: 0,
        right: 0,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
        pointerEvents: "none",
      }}
    >
      <Button
        textAlign="center"
        variant="unstyled"
        sx={{
          background: "rgba(22, 22, 22, 0.85)",
          border: "1px solid #313131",
          borderRadius: "40px",
          display: "flex",
          padding: "8px 16px",
          marginInline: "auto",
          gap: "12px",
          alignItems: "center",
          pointerEvents: "auto",
        }}
        onClick={toggleExpanded}
      >
        <Box
          sx={{
            fontWeight: 500,
            fontSize: "sm",
            color: "white",
            lineHeight: 1,
          }}
        >
          {episode}. {title}
        </Box>
        <Image
          src="/assets/video/expand_more.svg"
          width={20}
          height={20}
          alt="Close"
          style={{
            transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform .3s ease-in-out",
          }}
        />
      </Button>
      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          gap: "12px",
          paddingInline: "1rem",
          flexWrap: "nowrap",
          paddingBottom: "1rem",
          overflowX: "auto",
          opacity: isExpanded ? 1 : 0,
          visibility: isExpanded ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
        }}
        justifyContent={{ base: "flex-start", lg: "center" }}
        pointerEvents={isExpanded ? "auto" : "none"}
      >
        {chapters?.map((chapter) => {
          const isActive = currentChapter === chapter.id;
          return (
            <Box
              key={chapter.id}
              id={chapter.id}
              flexShrink={0}
              maxW="142px"
              role="button"
              onClick={() => onChapterSelect(chapter.id)}
            >
              <Image
                src={chapter.thumbnail}
                width={142}
                height={80}
                alt={chapter.title}
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Box
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.85)",
                  padding: "8px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: isActive ? "white" : "#858585",
                }}
              >
                <Box
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  marginBottom="4px"
                  fontWeight={600}
                >
                  {chapter.title}
                </Box>
                <Box fontWeight={500}>
                  {convertSecondsToMMSS(chapter.startAt)}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
