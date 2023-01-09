import { MDXProps } from "mdx/types";
import { defaultLocale } from "./i18n/config";
import { getFirst, getMDXModule } from "./utils";

interface Post {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getPostByFilename(
  filename: string,
  locale: string,
): Promise<Post> {
  try {
    return (await getFirst(
      () => getMDXModule(`posts/${locale}/${filename}.md`),
      () => getMDXModule(`posts/${defaultLocale}/${filename}.md`),
    )) as Post;
  } catch (cause) {
    throw new Error(`Page not found! ${filename}`, {
      cause,
    });
  }
}
