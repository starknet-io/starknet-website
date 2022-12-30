import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function fileToTopic(file: VFileCompatible): Promise<Topic> {
  const code = await mdx.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });

  const {
    id,
    name,
  } = await mdx.run(code, { ...runtime });

  return { id, name } satisfies Topic;
}

async function getFileByFilename(
  filename: string,
  locale: string,
): Promise<VFileCompatible> {
  try {
    const res = await fetch(
      new URL(`topics/${locale}/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  try {
    const res = await fetch(
      new URL(`topics/en/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  throw new Error(`Topic not found! ${filename}`);
}

export async function getTopicByFilename(
  filename: string,
  locale: string,
): Promise<Topic> {
  return fileToTopic(await getFileByFilename(filename, locale));
}
