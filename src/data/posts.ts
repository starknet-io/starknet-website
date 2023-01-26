import { defaultLocale } from "./i18n/config";
import { TopLevelBlock } from "./pages";
import { getFirst, getJSON } from "./utils";

interface Post {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
  readonly locale: string;
  readonly filepath: string;
  readonly blocks: readonly TopLevelBlock[];
  readonly body: string;
}

export async function getPostBySlug(
  slug: string,
  locale: string,
): Promise<Post> {
  try {
    return (await getFirst(
      () => getJSON(`_dynamic/posts/${locale}/${slug}.json`),
      () => getJSON(`_dynamic/posts/${defaultLocale}/${slug}.json`),
    )) as Post;
  } catch (cause) {
    throw new Error(`Post not found! ${slug}`, {
      cause,
    });
  }
}
