import { Box } from "@chakra-ui/react";

type ChapterTitleProps = {
  isVisible: boolean;
  title?: string;
  episode: number;
};
export default function ChapterTitle({
  isVisible,
  title,
  episode,
}: ChapterTitleProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "16px",
        left: "16px",
        padding: "8px 12px",
        fontWeight: 500,
        background: "rgba(0, 0, 0, 0.85)",
        borderRadius: "4px",
        color: "#D6D6D6",
        pointerEvents: "none",
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
      }}
    >
      <Box as="p" pointerEvents="auto">
        {episode}. {title}
      </Box>
    </Box>
  );
}
