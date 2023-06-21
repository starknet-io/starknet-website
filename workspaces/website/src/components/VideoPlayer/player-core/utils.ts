import { Chapter } from "../constants";

export function precisionRound(number: number, precision = 2) {
  var factor = Math.pow(10, precision);
  var n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
}

export const getVideoSrc = (videoId: string) => {
  return `${import.meta.env.VITE_CF_STREAM_URL}/${videoId}/manifest/video.m3u8`;
};

export const getChapterById = (chapters: Chapter[], id: string) => {
  return chapters.find((c) => c.id === id);
};

export const getNextChapter = (
  chapters: Chapter[],
  currentChapterId: string
) => {
  const currentChapterIndex = chapters.findIndex(
    (c) => c.id === currentChapterId
  );
  return chapters[currentChapterIndex + 1] || chapters[0];
};

export const isFinalChapter = (
  chapters: Chapter[],
  currentChapterId: string
) => {
  return currentChapterId === chapters[chapters.length - 1].id;
};
