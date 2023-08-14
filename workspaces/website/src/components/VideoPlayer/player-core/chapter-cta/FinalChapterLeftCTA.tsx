import { Box } from "@chakra-ui/react";
import { useChapterCTAStyles } from "./useChapterCTAStyles";
import { ChapterCTA } from "./ChapterCTA";

const buttons = [
  {
    label: "Starknet docs",
    link: "https://docs.starknet.io/",
  },
  {
    label: "Starknet book",
    link: "https://book.starknet.io/",
  },
  {
    label: "Starknet basecamp",
    link: "https://starknet.io/",
  },
];

type FinalChapterLeftCTAProps = {
  isVisible: boolean;
  height: number;
  width: number;
};

export const FinalChapterLeftCTA = ({
  height,
  width,
  isVisible,
}: FinalChapterLeftCTAProps) => {
  const { top, leftCTAStart, gap, borderRadius, fontSize, paddingY, paddingX } =
    useChapterCTAStyles({
      height,
      width,
    });

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={gap}
      pos="absolute"
      left={leftCTAStart}
      top={top}
      pointerEvents={isVisible ? "auto" : "none"}
      visibility={isVisible ? "visible" : "hidden"}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      {buttons.map(({ label, link }) => (
        <ChapterCTA
          key={label}
          label={label}
          link={link}
          borderRadius={borderRadius}
          fontSize={fontSize}
          paddingY={paddingY}
          paddingX={paddingX}
        />
      ))}
    </Box>
  );
};
