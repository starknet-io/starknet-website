export { PostsPage as Page } from "src/app/posts/(components)/PostsPage";

import { Props } from "src/app/posts/(components)/PostsPage";
import { DocumentProps } from "src/renderer/types";

export function getDocumentProps({ categories, params }: Props): DocumentProps {
  const category = categories.find((c) => c.id === params.category);

  return {
    title: category?.name,
  };
}
