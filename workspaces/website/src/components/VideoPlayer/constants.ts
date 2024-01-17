export type Chapter = {
  id: string;
  subtitle: string;
  poster: string;
  thumbnail: string;
  title?: string;
  videoId: string;
  durationTime: string;
  description: string;
};

export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    subtitle: "Chapter 1",
    poster: "/assets/video/chapter1.png",
    thumbnail: "/assets/video/chapter1.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_1,
    durationTime: "02:42",
    title: "How Starknet Scales Ethereum",
    description: "Discover how Ethereum tackles the scalability challenge while preserving security and decentralization. Dive into the world of blockchain and learn about the Starknet Validity Rollup—a game-changing solution for Ethereum's growth. Starknet's approach shifts transaction processing off the Ethereum Mainnet (off-chain), maintaining transaction summaries on-chain. Transactions are batched, processed efficiently, and summarized into a single on-chain transaction. Explore how STARK proofs ensure transaction integrity without costly re-execution."
  },
  {
    id: "sequencer",
    subtitle: "Chapter 2",
    poster: "/assets/video/chapter2.png",
    thumbnail: "/assets/video/chapter2.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_2,
    durationTime: "02:24",
    title: "The Starknet Sequencer",
    description: "Get acquainted with the Starknet Sequencer, the cornerstone of Starknet's architecture. Sequencers play a vital role in validating and executing transactions, shaping the future of blockchain technology. They efficiently group transactions, ensuring only successful ones proceed, significantly boosting transaction throughput compared to Ethereum nodes."
  },
  {
    id: "prover",
    subtitle: "Chapter 3",
    poster: "/assets/video/chapter3.png",
    thumbnail: "/assets/video/chapter3.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_3,
    durationTime: "02:26",
    title: "The Starknet Prover",
    description: "The Starknet Prover, a key player in ensuring the integrity of blockchain transactions. Dive into the world of mathematical validation as the Prover generates STARK proofs for block transactions. Blocks are processed efficiently in groups, with the Prover meticulously documenting each step in the Execution Trace and tracking changes in the system's state, known as the State Diff. Discover how the Prover's algorithm scrutinizes and safeguards data integrity, making any issues unmistakable. Random samples from the expanded dataset are selected to create a powerful STARK proof, validating thousands of transactions seamlessly."
  },
  {
    id: "eth-settlement",
    subtitle: "Chapter 4",
    poster: "/assets/video/chapter4.png",
    thumbnail: "/assets/video/chapter4.png",
    videoId: import.meta.env.VITE_ED_VIDEO_ID_4,
    durationTime: "03:28",
    title: "Secure Settlement on Ethereum",
    description: "Explore the secure settlement process on Ethereum through the lens of STARK technology. Witness how the STARK proof and State Diff are seamlessly transmitted as a transaction to Ethereum, where the magic unfolds. Ethereum's Verifier and Starknet Core smart contracts take center stage. The Verifier meticulously dissects the proof and examines its samples, swiftly rejecting any hint of problematic data. Once the proof is validated, it journeys to the Starknet Core smart contract. The Core contract authenticates the proof, acknowledges the State Diff, and updates the Starknet state on the Ethereum blockchain. This updated state becomes part of an Ethereum block, undergoing validation and voting across the node network. Once it garners enough votes, it attains \"finalized\" status, becoming an immutable part of Ethereum's history."
  },
];

export const playlistObject: Record<string, Chapter> = playlist.reduce(
  (acc, chapter) => ({ [chapter.id]: chapter, ...acc }),
  {}
);
export const CHAPTER_CHANGE_TIMEOUT = 5;

export const VIDEOJS_INACTIVITY_TIMEOUT = 3000;

export const VIDEO_SHARE_DOMAIN = import.meta.env.VITE_SITE_URL;
