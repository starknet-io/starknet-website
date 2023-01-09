import fs from "node:fs/promises";
import YAML from "yaml";

export async function json(filepath: string): Promise<any> {
  return JSON.parse(await fs.readFile(filepath, { encoding: "utf8" }));
}
export async function yaml(filepath: string): Promise<any> {
  return YAML.parse(await fs.readFile(filepath, { encoding: "utf8" }));
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
