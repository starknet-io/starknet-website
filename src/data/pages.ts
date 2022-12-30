import { MDXProps } from "mdx/types";
import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Page {
  readonly path: string;
  readonly title: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

async function getFileByFilename(
  filename: string,
  locale: string,
): Promise<VFileCompatible> {
  try {
    const res = await fetch(
      new URL(`pages/${locale}/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  try {
    const res = await fetch(
      new URL(`pages/en/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  throw new Error(`Page not found! ${filename}`);
}

export async function getPageByFilename(
  filename: string,
  locale: string,
): Promise<Page> {
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

  return { MDXContent, path, title } as Page;
}

export async function getPageByPage(
  page: string,
  locale: string,
): Promise<Page> {
  return getPageByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
