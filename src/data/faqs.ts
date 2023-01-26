import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getYAML } from "./utils";

interface Faq {
  readonly faq_item: string;
  readonly body: string;
}

export async function getFaqs(locale: string): Promise<readonly Faq[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/faqs/${locale}.json`),
      () => getJSON(`_dynamic/faqs/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getFaqs failed!", {
      cause,
    });
  }
}

export async function getFaqByFilename(
  filename: string,
  locale: string,
): Promise<Faq> {
  try {
    return await getFirst(
      () => getYAML(`faqs/${locale}/${filename}.yml`),
      () => getYAML(`faqs/${defaultLocale}/${filename}.yml`),
    );
  } catch (cause) {
    throw new Error(`Faqs not found! ${filename}`, {
      cause,
    });
  }
}
