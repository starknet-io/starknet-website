import { useState } from "react";
import { useInterval, useUpdateEffect } from "react-use";
import { Chapter, CHAPTER_CHANGE_TIMEOUT } from "../../constants";
import { getNextChapter } from "../utils";
import { SeekStatuses } from "./useSeek";

export default function usePlayNextChapter({
  playingStatus,
  currentChapter,
  chapters,
  onChapterChange,
}: {
  playingStatus: SeekStatuses;
  currentChapter: { id: string };
  chapters: Chapter[];
  onChapterChange: (id: string) => void;
}) {
  const [isPlayNextModalOpen, setPlayNextModalOpen] = useState(false);

  const [_, setChapterTimeoutCount] = useState(0);

  useUpdateEffect(() => {
    if (playingStatus !== "ended") {
      setPlayNextModalOpen(false);
    }
  }, [currentChapter, playingStatus]);

  useInterval(
    () => {
      setChapterTimeoutCount((c) => {
        if (c === CHAPTER_CHANGE_TIMEOUT) {
          playNextChapter();
          return c;
        }
        return c + 1;
      });
    },
    isPlayNextModalOpen ? 1000 : null
  );

  const openPlayNextModal = () => {
    setPlayNextModalOpen(true);
    setChapterTimeoutCount(0);
  };

  const closePlayNextModal = () => {
    setPlayNextModalOpen(false);
  };

  const playNextChapter = () => {
    const nextChapter = getNextChapter(chapters, currentChapter.id);
    onChapterChange(nextChapter.id);
  };

  return {
    isPlayNextModalOpen,
    openPlayNextModal,
    closePlayNextModal,
    playNextChapter,
  };
}
