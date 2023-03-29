import { Metadata } from "next";

export default function getVideoMetadata(chapter: string) {
  const videoUrl = `https://my-video-player-demo.jprq.live/en/video/${chapter}`;
  const description =
    "Starknet is the secure scaling technology bringing Ethereum’s benefits to the world.";

  const metadata: Metadata = {
    title: "Starknet | Education Video Tutorial",
    description,
    openGraph: {
      siteName: "Starknet",
      url: videoUrl,
      type: "video.other",
      title: "Starknet | education video tutorial",
      description,
      images: [
        {
          url: "https://www.starknet.io/assets/illustration-how-it-works.png",
          secureUrl:
            "https://www.starknet.io/assets/illustration-how-it-works.png",
          type: "image/jpg",
          width: 1280,
          height: 720,
        },
      ],
      videos: [
        {
          url: videoUrl,
          secureUrl: videoUrl,
          type: "text/html",
          width: 1280,
          height: 720,
        },
      ],
    },
    twitter: {
      card: "player",
      site: "@starknet",
      title: "Starknet | Starknet education tutorial",
      description,
      images: [
        {
          url: "https://www.starknet.io/assets/illustration-how-it-works.png",
        },
      ],
      players: [
        {
          streamUrl: videoUrl,
          playerUrl: videoUrl,
          height: 720,
          width: 1280,
        },
      ],
    },
  };

  return metadata;
}
