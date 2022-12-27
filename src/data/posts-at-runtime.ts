import { MDXProps } from "mdx/types";
import fs from "node:fs/promises";
import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Post {
  readonly path: string;
  readonly title: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

async function getFileByFilename(
  filename: string,
  locale: string
): Promise<VFileCompatible> {
  try {
    return fs.readFile(
      new URL(`../../_posts/${locale}/${filename}.md`, import.meta.url)
    );
  } catch {}

  try {
    return fs.readFile(
      new URL(`../../_posts/en/${filename}.md`, import.meta.url)
    );
  } catch {}

  throw new Error(`Post not found! ${filename}`);
}

export async function getPostByFilename(
  filename: string,
  locale: string
): Promise<Post> {
  let file = await getFileByFilename(filename, locale);

  const code = await mdx.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });

  const {
    default: MDXContent,
    path,
    title,
  } = await mdx.run(code, { ...runtime });

  return { MDXContent, path, title } as Post;
}

export async function getPostByPage(
  page: string,
  locale: string
): Promise<Post> {
  return getPostByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
