import { MDXProps } from "mdx/types";
import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Topic {
  readonly name: string;
  readonly type: string[];
  readonly image: string;
  readonly twitter: string;
  readonly website_url: string;
  readonly description: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getWallets(locale: string): Promise<readonly Topic[]> {
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

export async function getWalletByFilename(
  filename: string,
  locale: string,
): Promise<Topic> {
  try {
    return await getFirst(
      () => getMDXModule(`wallets/${locale}/${filename}.md`),
      () => getMDXModule(`wallets/${defaultLocale}/${filename}.md`),
    );
  } catch (cause) {
    throw new Error(`Wallet not found! ${filename}`, {
      cause,
    });
  }
}
