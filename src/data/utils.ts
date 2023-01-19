import { MDXProps } from "mdx/types";
import fs from "node:fs/promises";
import * as mdx from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import * as runtime from "react/jsx-runtime";
import YAML from "yaml";

export async function getJSON(filepath: string): Promise<any> {
  if (process.env.CONTENT_BASE_URL === "_data") {
    console.log(new URL(`../../_data/${filepath}`, import.meta.url).pathname);
    const file = await fs.readFile(
      new URL(`../../_data/${filepath}`, import.meta.url).pathname,
      {
        encoding: "utf8",
      },
    );

    return JSON.parse(file);
  } else {
    const res = await fetch(new URL(filepath, process.env.CONTENT_BASE_URL));

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Failed to fetch ${res.url}`, {
        cause: res,
      });
    }
  }
}

export async function getString(filepath: string): Promise<string> {
  if (process.env.CONTENT_BASE_URL === "_data") {
    const file = await fs.readFile(
      new URL(`../../_data/${filepath}`, import.meta.url).pathname,
      {
        encoding: "utf8",
      },
    );

    return file;
  } else {
    const res = await fetch(new URL(filepath, process.env.CONTENT_BASE_URL));

    if (res.ok) {
      return res.text();
    } else {
      throw new Error(`Failed to fetch ${res.url}`, {
        cause: res,
      });
    }
  }
}
export async function getYAML(filepath: string): Promise<any> {
  return YAML.parse(await getString(filepath));
}

export interface MDXModule {
  readonly [key: string]: any;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getMDXModule(filepath: string): Promise<any | MDXModule> {
  let file = await getString(filepath);

  const code = await mdx.compile(file, {
    development: false,
    outputFormat: "function-body",
    providerImportSource: undefined,
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  });

  const { default: MDXContent, ...frontmatter } = await mdx.run(code, {
    ...runtime,
  });

  return {
    ...frontmatter,
    MDXContent,
  };
}

export async function getFirst<T>(...fns: Array<() => Promise<T>>): Promise<T> {
  let cause = [];

  for (const fn of fns) {
    try {
      return await fn();
    } catch (err) {
      cause.push(err);
    }
  }

  throw new Error("getFirst failed!", {
    cause,
  });
}
