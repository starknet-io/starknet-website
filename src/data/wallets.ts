import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "./utils";

export interface Wallet {
  readonly name: string;
  readonly type: string[];
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
}

export async function getWallets(locale: string): Promise<readonly Wallet[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/wallets/${locale}.json`),
      () => getJSON(`_dynamic/wallets/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getWallets failed!", {
      cause,
    });
  }
}
