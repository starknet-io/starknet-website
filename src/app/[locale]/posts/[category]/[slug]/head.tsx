import { getPostBySlug } from "src/data/posts";

import HeadTags from "src/app/[locale]/(components)/HeadTags";

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
}

export default async function Head(props: Props) {
  try {
    const post = await getPostBySlug(props.params.slug, props.params.locale);

    return <HeadTags title={post.title} />;
  } catch {
    return <HeadTags />;
  }
}
