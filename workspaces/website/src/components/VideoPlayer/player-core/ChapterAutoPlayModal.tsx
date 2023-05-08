import { Box, Button, Flex, Text } from "@chakra-ui/react";
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
        bottom: "100px",
        right: "100px",
        zIndex: 9999,
        gap: "30px",
        pointerEvents: isOpen ? "auto" : "none",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "all .5s easy-in-out",
      }}
    >
      <Flex gap="20px">
        <Button
          variant="unstyled"
          onClick={onPlayNextChapter}
          color="#FFFFFF"
          bg="rgba(0, 0, 0, 0.85)"
          border="1px solid #313131"
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)"
          borderRadius="40px"
          display="flex"
          gap="12px"
          alignItems="center"
          fontSize="sm"
          fontWeight="500"
          p="12px"
          pr="20px"
        >
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
          <img
            src="/assets/video/arrow_right.svg"
            width={20}
            height={20}
            alt="Right Arrow"
          />
        </Button>
      </Flex>
    </Box>
  );
}
