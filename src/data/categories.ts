import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFileCompatible } from "@mdx-js/mdx/lib/compile";

interface Category {
  readonly id: string;
  readonly name: string;
}

export async function fileToCategory(file: VFileCompatible): Promise<Category> {
  const code = await mdx.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });

  const { id, name } = await mdx.run(code, { ...runtime });

  return { id, name } satisfies Category;
}

async function getFileByFilename(
  filename: string,
  locale: string,
): Promise<VFileCompatible> {
  try {
    const res = await fetch(
      new URL(
        `categories/${locale}/${filename}.md`,
        process.env.CONTENT_BASE_URL!,
      ),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  try {
    const res = await fetch(
      new URL(`categories/en/${filename}.md`, process.env.CONTENT_BASE_URL!),
    );

    if (res.ok) {
      return res.text();
    }
  } catch {}

  throw new Error(`Category not found! ${filename}`);
}

export async function getCategoryByFilename(
  filename: string,
  locale: string,
): Promise<Category> {
  return fileToCategory(await getFileByFilename(filename, locale));
}
