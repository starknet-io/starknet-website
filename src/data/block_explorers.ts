import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

export interface BlockExplorer {
  readonly name: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
  readonly description: string;
}

export async function getBlockExplorers(
  locale: string,
): Promise<readonly BlockExplorer[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/block_explorers/${locale}.json`),
      () => getJSON(`_dynamic/block_explorers/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getBlockExplorers failed!", {
      cause,
    });
  }
}

export async function getBlockExplorerByFilename(
  filename: string,
  locale: string,
): Promise<BlockExplorer> {
  try {
    return await getFirst(
      () => getYAML(`block_explorers/${locale}/${filename}.yml`),
      () => getYAML(`block_explorers/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`BlockExplorer not found! ${filename}`, {
      cause,
    });
  }
}
