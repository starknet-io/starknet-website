// import { Metadata } from "next";
import { VIDEO_SHARE_DOMAIN, playlist, playlistObject } from "./constants";

export const imageUrl =
    "https://www.starknet.io/assets/illustration-how-it-works.png";

export default function getVideoMetadata(chapterId: string) {
  const chapter = playlistObject[chapterId] || playlist[0];
  const videoUrl = `${VIDEO_SHARE_DOMAIN}/video-embed?chapter=${chapter.id}`;

  const title = chapter.title;
  const description = chapter.description;

  const metadata = {
    title,
    description,
    openGraph: {
      siteName: "Starknet",
      url: videoUrl,
      type: "video.other",
      title,
      description,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
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
      title,
      description,
      images: [
        {
          url: imageUrl,
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
