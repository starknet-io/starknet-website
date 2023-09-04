// import { Metadata } from "next";
import { Chapter, VIDEO_SHARE_DOMAIN } from "./constants";

export const getEducationVideoMeta = (chapter: Chapter) => {
  const fallbackImage =
    "https://www.starknet.io/assets/illustration-how-it-works.png";

  const imageUrl = `${VIDEO_SHARE_DOMAIN}${chapter.thumbnail}` || fallbackImage;
  const videoUrl = `${VIDEO_SHARE_DOMAIN}/video-embed?chapter=${chapter.id}`;

  return { imageUrl, videoUrl };
};
