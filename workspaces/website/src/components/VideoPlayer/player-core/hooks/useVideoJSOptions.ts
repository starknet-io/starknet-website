import { useMemo } from "react";
import { Chapter } from "../../constants";
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
};

export default function useVideoJSOptions({
  currentChapter,
  chapters,
}: {
  currentChapter: { id: string };
  chapters: Chapter[];
}) {
  const videoJSOptions = useMemo(() => {
    const chapter = getChapterById(chapters, currentChapter.id) || chapters[0];
    return {
      ...videoJsBaseOptions,
      poster: chapter.thumbnail,
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
