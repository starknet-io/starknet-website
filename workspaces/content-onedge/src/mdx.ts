import * as mdxjs from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import { VFile, VFileCompatible } from "@mdx-js/mdx/lib/compile";
import fs from "node:fs/promises";

async function compile(file: VFileCompatible): Promise<VFile> {
  return mdxjs.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });
}
async function run(code: VFileCompatible): Promise<any> {
  return mdxjs.run(code, { ...runtime });
}

export async function mdx(filepath: string): Promise<any> {
  const file = await fs.readFile(filepath);
  const code = await compile(file);
  const data = await run(code);

  return data;
}
