import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON } from "./utils";

export interface Category {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
}

export async function getCategories(
  locale: string,
): Promise<readonly Category[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/categories/${locale}.json`),
      () => getJSON(`_dynamic/categories/${defaultLocale}.json`),
    );
  } catch (cause) {
    throw new Error("getCategories failed!", {
      cause,
    });
  }
}
