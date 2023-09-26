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
    videoId: "2805da1fb7f9cd49888f680c26e386fd",
    durationTime: "02:42",
  },
  {
    id: "sequencer",
    title: "The Starknet Sequencer",
    description: "Chapter 2 explains about the Starknet Sequencer",
    thumbnail: "/assets/video/chapter2.png",
    videoId: "47d80010706a05bc4e4dae6cdd43b8be",
    durationTime: "02:24",
  },
  {
    id: "prover",
    title: "The Starknet Prover",
    description: "Chapter 3 explains how the Starknet Prover works",
    thumbnail: "/assets/video/chapter3.png",
    videoId: "a23465bbd7c3b27489a29abf4373a55d",
    durationTime: "02:26",
  },
  {
    id: "eth-settlement",
    title: "Secure settlement on Ethereum",
    description: "Chapter 4 explains how to secure settlement on Ethereum",
    thumbnail: "/assets/video/chapter4.png",
    videoId: "69ba2bd9bdd2ba2970c0fbe3b75c3ec0",
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
