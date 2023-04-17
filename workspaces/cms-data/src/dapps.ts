import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";

export interface Dapp {
  readonly name: string;
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
}

export async function getDapps(locale: string): Promise<readonly Dapp[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/dapps",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getDapps failed!", {
      cause,
    });
  }
}
