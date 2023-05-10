export { default as Page } from "src/app/video/(components)/VideoPage";

import { playlist } from "@ui/VideoPlayer/constants";
import { imageUrl } from "@ui/VideoPlayer/getVideoMetadata";
import { Props } from "src/app/video-embed/(components)/VideoEmbedPage";
import { DocumentProps } from "src/renderer/types";

export function getDocumentProps({ chapter }: Props): DocumentProps {
  const currentChapter = playlist.find((p) => p.id === chapter);

  return {
    title: currentChapter?.title,
    description: currentChapter?.description,
    image: imageUrl,
  };
}
