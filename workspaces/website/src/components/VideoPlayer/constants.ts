export type Chapter = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  videoId: string;
  durationTime: string;
};
export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    title: "How Starknet scales Ethereum",
    description: "Chapter 1 explains how Starknet works at a high level",
    thumbnail: "/assets/video/chapter1.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_1,
    durationTime: "02:42",
  },
  {
    id: "sequencer",
    title: "The Starknet Sequencer",
    description: "Chapter 2 explains about the Starknet Sequencer",
    thumbnail: "/assets/video/chapter2.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_2,
    durationTime: "02:24",
  },
  {
    id: "prover",
    title: "The Starknet Prover",
    description: "Chapter 3 explains how the Starknet Prover works",
    thumbnail: "/assets/video/chapter3.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_3,
    durationTime: "02:26",
  },
  {
    id: "eth-settlement",
    title: "Secure settlement on Ethereum",
    description: "Chapter 4 explains how to secure settlement on Ethereum",
    thumbnail: "/assets/video/chapter4.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_4,
    durationTime: "03:28",
  },
];

export const playlistObject: Record<string, Chapter> = playlist.reduce(
  (acc, chapter) => ({ [chapter.id]: chapter, ...acc }),
  {}
);
export const CHAPTER_CHANGE_TIMEOUT = 5;

export const VIDEOJS_INACTIVITY_TIMEOUT = 3000;

export const VIDEO_SHARE_DOMAIN = "https://www.starknet.io";
