import { Box } from "@chakra-ui/react";
import { CSSProperties } from "react";

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
      as="button"
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
        color: "black",
        _hover: {
          color: "#EC796B",
        },
      }}
    >
      <div
        style={{
          filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))",
        }}
      >
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="43.995"
            cy="43.995"
            r="37.665"
            fill="#F6F6F6"
            stroke="#F6F6F6"
            stroke-width="2"
          />
          <g clip-path="url(#clip0_576_7511)">
            <path
              d="M44 7.33331C23.76 7.33331 7.33334 23.76 7.33334 44C7.33334 64.24 23.76 80.6666 44 80.6666C64.24 80.6666 80.6667 64.24 80.6667 44C80.6667 23.76 64.24 7.33331 44 7.33331ZM36.6667 60.5V27.5L58.6667 44L36.6667 60.5Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_576_7511">
              <rect width="88" height="88" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Box>
  );
}
