import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Topic {
  readonly name: string;
  readonly type: string;
  readonly website_url: string;
  readonly image: string;
  readonly company_name: string;
  readonly twitter: string;
}

export async function getBridges(locale: string): Promise<readonly Topic[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/bridges/${locale}.json`),
      () => getJSON(`_dynamic/bridges/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getBridges failed!", {
      cause,
    });
  }
}

export async function getBridgeByFilename(
  filename: string,
  locale: string,
): Promise<Topic> {
  try {
    return await getFirst(
      () => getMDXModule(`bridges/${locale}/${filename}.md`),
      () => getMDXModule(`bridges/${defaultLocale}/${filename}.md`),
    );
  } catch (cause) {
    throw new Error(`Bridge not found! ${filename}`, {
      cause,
    });
  }
}
