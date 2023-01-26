import fs from "node:fs/promises";
import YAML from "yaml";

export async function getJSON(filepath: string): Promise<any> {
  const file = await fs.readFile(
    new URL(`../../_data/${filepath}`, import.meta.url).pathname,
    "utf8",
  );

  return JSON.parse(file);
}

export async function getString(filepath: string): Promise<string> {
  const file = await fs.readFile(
    new URL(`../../_data/${filepath}`, import.meta.url).pathname,
    "utf8",
  );

  return file;
}

export async function getYAML(filepath: string): Promise<any> {
  return YAML.parse(await getString(filepath));
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
