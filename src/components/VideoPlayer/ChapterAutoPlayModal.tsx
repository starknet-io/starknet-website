import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";

type ChapterAutoPlayModalProps = {
  positionStyle?: CSSProperties;
  isOpen: boolean;
  onPlayNextChapter: () => void;
  onReplayCurrentChapter: () => void;
  chapterTimeoutCount: number;
};
export default function ChapterAutoPlayModal(props: ChapterAutoPlayModalProps) {
  const {
    positionStyle,
    isOpen,
    onPlayNextChapter,
    onReplayCurrentChapter,
    chapterTimeoutCount,
  } = props;
  return (
    <Box
      sx={{
        ...positionStyle,
        zIndex: 9999,
        background: "rgba(0,0,0, .7)",
        display: "grid",
        placeContent: "center",
        gap: "30px",
        pointerEvents: isOpen ? "auto" : "none",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "all .5s easy-in-out",
      }}
    >
      <Text textAlign="center" color="white" fontSize="lg">
        Going to next chapter in {chapterTimeoutCount} seconds
      </Text>
      <Flex gap="20px">
        <Button variant="outline" onClick={onReplayCurrentChapter}>
          Replay
        </Button>
        <Button onClick={onPlayNextChapter}>Confirm</Button>
      </Flex>
    </Box>
  );
}
