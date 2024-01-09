export type Chapter = {
  id: string;
  subtitle: string;
  poster: string;
  thumbnail: string;
  title?: string;
  videoId: string;
  durationTime: string;
};

export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    subtitle: "Chapter 1",
    poster: "/assets/video/chapter1.png",
    thumbnail: "/assets/video/chapter1.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_1,
    durationTime: "02:42"
  },
  {
    id: "sequencer",
    subtitle: "Chapter 2",
    poster: "/assets/video/chapter2.png",
    thumbnail: "/assets/video/chapter2.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_2,
    durationTime: "02:24"
  },
  {
    id: "prover",
    subtitle: "Chapter 3",
    poster: "/assets/video/chapter3.png",
    thumbnail: "/assets/video/chapter3.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_3,
    durationTime: "02:26"
  },
  {
    id: "eth-settlement",
    subtitle: "Chapter 4",
    poster: "/assets/video/chapter4.png",
    thumbnail: "/assets/video/chapter4.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_4,
    durationTime: "03:28"
  },
];

export const playlistObject: Record<string, Chapter> = playlist.reduce(
  (acc, chapter) => ({ [chapter.id]: chapter, ...acc }),
  {}
);
export const CHAPTER_CHANGE_TIMEOUT = 5;

export const VIDEOJS_INACTIVITY_TIMEOUT = 3000;

export const VIDEO_SHARE_DOMAIN = import.meta.env.VITE_SITE_URL;
