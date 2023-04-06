import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";

export interface Bridge {
  readonly name: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getBridges(locale: string): Promise<readonly Bridge[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(`_crowdin/data/bridges/${value}.json`, "utf8")
          )
      )
    );
  } catch (cause) {
    throw new Error("getBridges failed!", {
      cause,
    });
  }
}
