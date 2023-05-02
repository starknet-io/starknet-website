import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";

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

export async function getWallets(locale: string): Promise<readonly Wallet[]> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () => getJSON("data/wallets/" + value)
      )
    );
  } catch (cause) {
    throw new Error("getWallets failed!", {
      cause,
    });
  }
}
