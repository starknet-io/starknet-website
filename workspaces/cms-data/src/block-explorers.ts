import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

export interface BlockExplorer {
  readonly name: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getBlockExplorers(
  locale: string
): Promise<readonly BlockExplorer[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/block-explorers/" + value)
      )
    );
  } catch (cause) {
    throw new Error("getBlockExplorers failed!", {
      cause,
    });
  }
}
