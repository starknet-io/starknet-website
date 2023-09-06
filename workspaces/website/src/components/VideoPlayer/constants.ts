export type Chapter = {
  id: string;
  subtitle: string;
  title: string;
  thumbnail: string;
  description: string;
  videoId: string;
  durationTime: string;
};
export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    subtitle: "Chapter 1",
    title: "How Starkness Scales Ethereum",
    description: "Chapter 1 explains how Starknet works at a high level",
    thumbnail: "/assets/video/chapter1.png",
    videoId: "abd99c9696f1862f828c6e18136d75e5",
    durationTime: "02:42",
  },
  {
    id: "sequencer",
    subtitle: "Chapter 2",
    title: "The Starknet Sequencer",
    description: "Chapter 2 explains about the Starknet Sequencer",
    thumbnail: "/assets/video/chapter2.png",
    videoId: "7ca4a89a8031a1737e4632ec498afb55",
    durationTime: "02:24",
  },
  {
    id: "prover",
    subtitle: "Chapter 3",
    title: "The Starknet Prover",
    description: "Chapter 3 explains how the Starknet Prover works",
    thumbnail: "/assets/video/chapter3.png",
    videoId: "b66a934468bf72606e60abd7d475acf3",
    durationTime: "02:26",
  },
  {
    id: "eth-settlement",
    subtitle: "Chapter 4",
    title: "Secure Settlement on Ethereum",
    description: "Chapter 4 explains how to secure settlement on Ethereum",
    thumbnail: "/assets/video/chapter4.png",
    videoId: "af654c93367a0d4eae7ea90252ac342e",
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
