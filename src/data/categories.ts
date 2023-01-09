import { defaultLocale } from "./i18n";
import { getFirst, getMDXModule } from "./utils";

interface Category {
  readonly id: string;
  readonly name: string;
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
