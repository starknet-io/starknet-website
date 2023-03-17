import { RefObject, useEffect, useState } from "react";
import Player from "video.js/dist/types/player";
import { Chapter } from "../utils";

export function useChapters({
  initialActiveChapter,
  chapters,
  playerRef,
}: {
  initialActiveChapter: string;
  chapters: Chapter[];
  playerRef: RefObject<Player | null>;
}) {
  const [currentChapter, setCurrentChapter] = useState(initialActiveChapter);

  const goToChapter = (chapterId: string) => {
    const chapter = chapters.find((p) => p.id === chapterId);
    if (chapterId && chapter) {
      // setCurrentChapter(chapter.id);
      playerRef.current?.currentTime(chapter.startAt);
    }
  };

  const getSeekChapter = (currentTime: number) => {
    const chapter = chapters.find(
      (p) => currentTime >= p.startAt && currentTime < p.endAt
    );

    return chapter;
  };

  return { currentChapter, setCurrentChapter, goToChapter, getSeekChapter };
}
