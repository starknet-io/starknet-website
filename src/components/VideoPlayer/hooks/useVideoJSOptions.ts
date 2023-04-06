import { useMemo } from "react";
import { Chapter } from "../constants";
import { getChapterById, getVideoSrc } from "../utils";

const videoJsBaseOptions = {
  autoplay: false,
  controls: false,
  responsive: true,
  preload: "auto",
  fluid: true,
  userActions: {
    hotkeys: {
      playPauseKey: function () {},
      muteKey: function () {},
      toggleKey: function () {},
    },
  },
  poster:
    "https://image.mux.com/UZMwOY6MgmhFNXLbSFXAuPKlRPss5XNA/thumbnail.jpg?time=11",
};

export default function useVideoJSOptions({
  currentChapter,
  chapters,
}: {
  currentChapter: string;
  chapters: Chapter[];
}) {
  const videoJSOptions = useMemo(() => {
    const chapter = getChapterById(chapters, currentChapter) || chapters[0];
    return {
      ...videoJsBaseOptions,
      sources: [
        {
          src: getVideoSrc(chapter.videoId),
          type: "application/x-mpegURL",
        },
      ],
    };
  }, [currentChapter, chapters]);

  return videoJSOptions;
}
