import { defaultLocale } from "./i18n/config";
import { getFirst, getJSON, getMDXModule } from "./utils";

interface Category {
  readonly id: string;
  readonly name: string;
}

export async function getCategories(
  locale: string,
): Promise<readonly Category[]> {
  try {
    return await getFirst(
      () => getJSON(`_dynamic/categories/${locale}/.json`),
      () => getJSON(`_dynamic/categories/${defaultLocale}/.json`),
    );
  } catch (cause) {
    throw new Error("getCategories failed!", {
      cause,
    });
  }
}

export async function getCategoryByFilename(
  filename: string,
  locale: string,
): Promise<Category> {
  try {
    return (await getFirst(
      () => getMDXModule(`categories/${locale}/${filename}.md`),
      () => getMDXModule(`categories/${defaultLocale}/${filename}.md`),
    )) as Category;
  } catch (cause) {
    throw new Error(`Category not found! ${filename}`, {
      cause,
    });
  }
}
