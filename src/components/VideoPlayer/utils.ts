export function precisionRound(number: number, precision = 2) {
  var factor = Math.pow(10, precision);
  var n = precision < 0 ? number : 0.01 / factor + number;
  return Math.round(n * factor) / factor;
}

export type Chapter = {
  id: string;
  title: string;
  startAt: number;
  endAt: number;
  thumbnail: string;
  description: string;
};
export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    title: "Scaling Ethereum",
    description: "Episode 1 explains how Starknet works at a high level",
    startAt: 0,
    endAt: 24,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
  },
  {
    id: "starknet",
    title: "Starknet",
    description: "Episode 2 explains how Starknet works at a high level",
    startAt: 25,
    endAt: 50,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
  },
  {
    id: "sequencer",
    title: "The Sequencer",
    description: "Episode 3 explains how Starknet works at a high level",
    startAt: 51,
    endAt: 74,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
  },
  {
    id: "prover",
    title: "The Prover",
    description: "Episode 4 explains how Starknet works at a high level",
    startAt: 75,
    endAt: 89,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
  },
  {
    id: "eth-settlement",
    title: "Ethereum settlement",
    description: "Episode 5 explains how Starknet works at a high level",
    startAt: 90,
    endAt: 110,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
  },
  {
    id: "builders",
    title: "Builders",
    description: "Episode 6 explains how Starknet works at a high level",
    startAt: 111,
    endAt: 136,
    thumbnail: "/assets/video-thumbnail-placeholder.jpg",
  },
];
