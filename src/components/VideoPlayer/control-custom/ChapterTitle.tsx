import { Box } from "@chakra-ui/react";
import React from "react";

type ChapterTitleProps = {
  isVisible: boolean;
  title: string;
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
        top: "0px",
        left: "0px",
        right: "0px",
        paddingX: "50px",
        paddingTop: "20px",
        paddingBottom: "10%",
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "34px",
        color: "#FFFFFF",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)",
        pointerEvents: "none",
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
      }}
    >
      <Box as="p" pointerEvents="auto">
        {title}
      </Box>
      <Box as="p" pointerEvents="auto">
        Episode {episode}
      </Box>
    </Box>
  );
}
