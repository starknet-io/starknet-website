import fs from "node:fs/promises";
import path from "node:path";
import { writeYAML, yaml } from "@starknet-io/cms-scripts/src/utils";

const resourceName = "categories";
const resourcePath = path.join(process.cwd(), '../../_data', resourceName)

export async function getCategories(): Promise<any[]> {
  const filenames = await fs.readdir(resourcePath);

  const categories: any[] = [];

  for (const filename of filenames) {
    categories.push({
      ...await yaml(path.join(resourcePath, filename)),
      __FILENAME: filename
    });
  }

  return categories;
}

export async function writeCategory(filename: string, data: any): Promise<void> {
  await writeYAML(path.join(resourcePath, filename), data)
}
