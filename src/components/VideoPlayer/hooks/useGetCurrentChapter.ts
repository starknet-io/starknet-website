import React, { useMemo } from "react";
import { Chapter } from "../utils";

type UseGetCurrentChapterProps = {
  chapters: Chapter[];
  currentChapter: string;
};
export default function useGetCurrentChapter({
  chapters,
  currentChapter,
}: UseGetCurrentChapterProps) {
  return useMemo(() => {
    const currentChapterIndex = chapters.findIndex(
      (ch) => ch.id === currentChapter
    );
    if (currentChapterIndex === -1) {
      return { chapter: null, chapterIndex: -1 };
    }

    const chapter = chapters[currentChapterIndex];

    return { chapter, chapterIndex: currentChapterIndex };
  }, [currentChapter, chapters]);
}
