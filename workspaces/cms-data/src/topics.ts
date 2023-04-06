import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";

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
            await fs.readFile(`_crowdin/data/topics/${locale}.json`, "utf8")
          )
      )
    );
  } catch (cause) {
    throw new Error("getTopics failed!", {
      cause,
    });
  }
}
