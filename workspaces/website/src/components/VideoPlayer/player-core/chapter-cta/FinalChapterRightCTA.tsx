import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { HiArrowRight } from "react-icons/hi2";
import { useChapterCTAStyles } from "./useChapterCTAStyles";
import { ChapterCTA } from "./ChapterCTA";

const buttons = [
  {
    label: "Starknet Hub",
    link: "http://starknet.io",
  },
  {
    label: "Discord",
    link: "https://starknet.io/discord",
  },
];

type FinalChapterRightCTAProps = {
  isVisible: boolean;
  height: number;
  width: number;
};

export const FinalChapterRightCTA = ({
  isVisible,
  height,
  width,
}: FinalChapterRightCTAProps) => {
  const { top, rightCTAStart, gap, fontSize } = useChapterCTAStyles({
    height,
    width,
  });

  const br = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "md",
  });

  console.log("br", br);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={gap}
      pos="absolute"
      left={rightCTAStart}
      top={top}
      pointerEvents={isVisible ? "auto" : "none"}
      visibility={isVisible ? "visible" : "hidden"}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      {buttons.map(({ label, link }) => (
        <ChapterCTA key={label} label={label} link={link} fontSize={fontSize} />
      ))}
    </Box>
  );
};
