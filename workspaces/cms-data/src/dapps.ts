import { defaultLocale } from "./i18n/config";
import { getFirst } from "@starknet-io/cms-utils/src/index";

export interface Dapp {
  readonly name: string;
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
}

export async function getDapps(
  locale: string,
  getJSON: (src: string) => Promise<any>
): Promise<readonly Dapp[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/dapps/" + value)
      )
    );
  } catch (cause) {
    throw new Error("getDapps failed!", {
      cause,
    });
  }
}
