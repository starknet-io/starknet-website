import { MDXProps } from "mdx/types";
import fs from "node:fs/promises";
import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Content {
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
      new URL(`../../content/${locale}/${filename}.md`, import.meta.url)
    );
  } catch {}

  try {
    return fs.readFile(
      new URL(`../../content/en/${filename}.md`, import.meta.url)
    );
  } catch {}

  throw new Error(`Content not found! ${filename}`);
}

export async function getContentByFilename(
  filename: string,
  locale: string
): Promise<Content> {
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

  return { MDXContent, path, title } as Content;
}

export async function getContentByPage(
  page: string,
  locale: string
): Promise<Content> {
  return getContentByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
