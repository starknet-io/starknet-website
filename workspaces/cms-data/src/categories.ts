import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";

export interface Category {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
}

export async function getCategories(
  locale: string
): Promise<readonly Category[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/categories",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getCategories failed!", {
      cause,
    });
  }
}
