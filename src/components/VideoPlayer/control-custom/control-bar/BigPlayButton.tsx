import { Box } from "@chakra-ui/react";
import React, { CSSProperties } from "react";

type BigPlayButtonProps = {
  onClick: () => void;
  isVisible: boolean;
  positionStyle?: CSSProperties;
};
export default function BigPlayButton({
  onClick,
  isVisible,
  positionStyle,
}: BigPlayButtonProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...positionStyle,
        height: "100%",
        width: "100%",
        display: "grid",
        placeContent: "center",
        zIndex: isVisible ? 9 : 0,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        cursor: "pointer",
      }}
    >
      <svg
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.9999 0.333313C16.7599 0.333313 0.333252 16.76 0.333252 37C0.333252 57.24 16.7599 73.6666 36.9999 73.6666C57.2399 73.6666 73.6666 57.24 73.6666 37C73.6666 16.76 57.2399 0.333313 36.9999 0.333313ZM29.6666 53.5V20.5L51.6666 37L29.6666 53.5Z"
          fill="#EC796B"
        />
      </svg>
    </Box>
  );
}
