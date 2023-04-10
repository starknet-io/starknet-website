import { useRef, useState } from "react";
import { PlayerRef } from "../VideoPlayerCore";
import { SeekStatuses } from "./useSeek";

export default function useShareModal({
  playerRef,
  playingStatus,
}: {
  playerRef: PlayerRef;
  playingStatus: SeekStatuses;
}) {
  const prevPlayingStatus = useRef<SeekStatuses>(playingStatus);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const onShareModalOpen = () => {
    setIsShareModalOpen(true);
    playerRef.current?.pause();
    prevPlayingStatus.current = playingStatus;
  };
  const onShareModalClose = () => {
    setIsShareModalOpen(false);
    if (prevPlayingStatus.current === "playing") {
      playerRef.current?.play();
    }
  };

  return {
    isShareModalOpen,
    onShareModalOpen,
    onShareModalClose,
  };
}
