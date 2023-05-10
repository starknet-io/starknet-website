export { Page } from "src/app/posts/[category]/[slug]/page";

import { Props } from "src/app/posts/[category]/[slug]/page";
import { DocumentProps } from "src/renderer/types";

export function getDocumentProps({ post }: Props): DocumentProps {
  return {
    title: post.title,
    description: post.short_desc,
    image: post.image
  };
}
