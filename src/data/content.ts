import { MDXProps } from "mdx/types";

interface Content {
  readonly path: string;
  readonly title: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

function mdxToContent({ default: MDXContent, path, title }: any): Content {
  return { MDXContent, path, title };
}

export async function getContentByFilename(
  filename: string,
  locale: string,
): Promise<Content> {
  try {
    return mdxToContent(await import(`../../content/${locale}/${filename}.md`));
  } catch {}

  try {
    return mdxToContent(await import(`../../content/en/${filename}.md`));
  } catch {}

  throw new Error(`Content not found! ${filename}`);
}

export async function getContentByPage(
  page: string,
  locale: string,
): Promise<Content> {
  return getContentByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
