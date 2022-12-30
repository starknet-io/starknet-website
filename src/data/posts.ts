import { MDXProps } from "mdx/types";
import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Post {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function fileToPost(file: VFileCompatible): Promise<Post> {
  const code = await mdx.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });

  const {
    default: MDXContent,
    id,
    title,
    category,
    topic,
    short_desc,
  } = await mdx.run(code, { ...runtime });

  return { MDXContent, id, title, category, topic, short_desc } satisfies Post;
}

async function getFileByFilename(
  filename: string,
  locale: string,
): Promise<VFileCompatible> {
  try {
    const res = await fetch(
      new URL(`posts/${locale}/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  try {
    const res = await fetch(
      new URL(`posts/en/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  throw new Error(`Post not found! ${filename}`);
}

export async function getPostByFilename(
  filename: string,
  locale: string,
): Promise<Post> {
  return fileToPost(await getFileByFilename(filename, locale));
}
