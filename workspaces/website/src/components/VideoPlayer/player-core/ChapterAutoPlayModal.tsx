import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type ChapterAutoPlayModalProps = {
  positionStyle?: CSSProperties;
  isOpen: boolean;
  onPlayNextChapter: () => void;
};
export default function ChapterAutoPlayModal(props: ChapterAutoPlayModalProps) {
  const { onPlayNextChapter, isOpen } = props;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "72px",
        right: "48px",
        zIndex: 9999,
        gap: "30px",
        pointerEvents: isOpen ? "auto" : "none",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "all .5s easy-in-out",
      }}
    >
      <Flex gap="20px">
        <Button variant="education" size="auto" onClick={onPlayNextChapter}>
          {isOpen && (
            <CountdownCircleTimer
              isPlaying={isOpen}
              duration={5}
              colors="#313132"
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
              trailColor="#ffffff"
              size={16}
              strokeWidth={2}
            />
          )}
          <Text>Next Chapter</Text>
          <Image
            src="/assets/video/arrow_right.svg"
            boxSize="20px"
            alt="Right Arrow"
          />
        </Button>
      </Flex>
    </Box>
  );
}
