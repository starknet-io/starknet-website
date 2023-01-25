import { defaultLocale } from "./i18n/config";
import { TopLevelBlock } from "./pages";
import { getFirst, getJSON } from "./utils";

interface Post {
  readonly id: string;
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

export async function getPostByID(
  id: string,
  locale: string,
): Promise<Post> {
  const safeID = id.replace(/[^a-z0-9]/gi, '-').toLowerCase()

  try {
    return (await getFirst(
      () => getJSON(`_dynamic/posts/${locale}/${safeID}.json`),
      () => getJSON(`_dynamic/posts/${defaultLocale}/${safeID}.json`),
    )) as Post;
  } catch (cause) {
    throw new Error(`Post not found! ${id}`, {
      cause,
    });
  }
}
