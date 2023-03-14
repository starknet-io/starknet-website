import fs from "node:fs/promises";
import path from "node:path";
import { DefaultLogFields } from "simple-git";

export interface Meta {
  readonly gitlog?: DefaultLogFields | undefined | null;
  readonly sourceFilepath: string;
  readonly locale: string;
}

export async function getJSON(filepath: string): Promise<any> {
  const file = await fs.readFile(
    path.join(process.cwd(), "_data", filepath),
    "utf8",
  );

  return JSON.parse(file);
}

export async function getString(filepath: string): Promise<string> {
  const file = await fs.readFile(
    path.join(process.cwd(), "_data", filepath),
    "utf8",
  );

  return file;
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
