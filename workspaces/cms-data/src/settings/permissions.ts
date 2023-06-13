import fs from "node:fs/promises";
import path from "node:path";

export interface Permission {
  readonly username: string;
  readonly access: string[];
}

export async function getPermissions(): Promise<Permission[]> {
  try {
    return await JSON.parse(
      await fs.readFile(
        path.join(process.cwd(), "_crowdin/data/permissions/en.json"),
        "utf8"
      )
    );
  } catch (cause) {
    throw new Error("getPermissions failed!", {
      cause,
    });
  }
}
