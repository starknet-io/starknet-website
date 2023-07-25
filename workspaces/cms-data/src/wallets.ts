import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getShuffledArray } from "@starknet-io/cms-utils/src/index";

export interface Type {
  readonly type: string;
  readonly url: string;
}
export interface Wallet {
  readonly name: string;
  readonly type_list: Type[];
  readonly image: string;
  readonly twitter: string;
  readonly discord?: string;
  readonly website_url: string;
  readonly description: string;
}

export async function getWallets(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<readonly Wallet[]> {
  try {
    const wallets = await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/wallets/" + value, context)
      )
    );

    return getShuffledArray(wallets)
  } catch (cause) {
    throw new Error("getWallets failed!", {
      cause,
    });
  }
}
