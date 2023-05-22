import { Post } from "@starknet-io/cms-data/src/posts";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";
import PostByCategory from "./[category]/(components)/PostByCategory";

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
  readonly categories: readonly Category[]
  readonly topics: readonly Topic[]
  readonly post: Post
}

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

export function Page({ params: { slug, locale }, categories, topics, post }: Props): JSX.Element {
  const category = categories.find((c) => c.id === post.category)!;
  return (
    <PostByCategory
      post={post}
      category={category}
      locale={locale}
      topics={topics}
    />
  )
}
