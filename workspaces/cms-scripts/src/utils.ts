import fs from "node:fs/promises";
import YAML from "yaml";

const cache: { [key: string]: any } = {};

export async function json(filepath: string): Promise<any> {
  if (cache[`json-${filepath}`] == null) {
    cache[`json-${filepath}`] = (async () => {
      return JSON.parse(await fs.readFile(filepath, { encoding: "utf8" }));
    })();
  }

  return cache[`json-${filepath}`];
}
export async function yaml(filepath: string): Promise<any> {
  if (cache[`yaml-${filepath}`] == null) {
    cache[`yaml-${filepath}`] = (async () => {
      return YAML.parse(await fs.readFile(filepath, { encoding: "utf8" }));
    })();
  }

  return cache[`yaml-${filepath}`];
}

export async function write(filepath: string, data: any): Promise<void> {
  await fs.writeFile(filepath, JSON.stringify(data), {
    encoding: "utf8",
  });
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

export function slugify(value: string): string {
  return value
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replaceAll("&", "and") // replace "&" with "and"
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); // separator
}
