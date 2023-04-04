import fs from "node:fs/promises";
import path from "node:path";
export * from './browser'

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
