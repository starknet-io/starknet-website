import { Box } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { HiArrowRight } from "react-icons/hi2";
import { useChapterCTAStyles } from "./useChapterCTAStyles";

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
  const {
    top,
    rightCTAStart,
    gap,
    borderRadius,
    fontSize,
    paddingY,
    paddingX,
  } = useChapterCTAStyles({
    height,
    width,
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={gap}
      pos="absolute"
      left={rightCTAStart}
      top={top}
      pointerEvents={isVisible ? "auto" : "none"}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      {buttons.map(({ label, link }) => (
        <Button
          key={label}
          as="a"
          variant="solid"
          borderRadius={borderRadius}
          fontSize={fontSize}
          lineHeight={1}
          href={link}
          target="_blank"
          isExternal
          padding={0}
          paddingY={paddingY}
          paddingInline={paddingX}
          rightIcon={<HiArrowRight />}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};
