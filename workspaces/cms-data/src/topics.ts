import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";

export interface Topic {
  readonly id: string;
  readonly name: string;
}

export async function getTopics(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/topics",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getTopics failed!", {
      cause,
    });
  }
}
