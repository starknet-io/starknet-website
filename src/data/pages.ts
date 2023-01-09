import { MDXProps } from "mdx/types";
import { defaultLocale } from "./i18n";
import { getFirst, getMDXModule } from "./utils";

interface Page {
  readonly path: string;
  readonly title: string;
  readonly MDXContent: (props: MDXProps) => JSX.Element;
}

export async function getPageByFilename(
  filename: string,
  locale: string,
): Promise<Page> {
  try {
    return (await getFirst(
      () => getMDXModule(`pages/${locale}/${filename}.md`),
      () => getMDXModule(`pages/${defaultLocale}/${filename}.md`),
    )) as Page;
  } catch (cause) {
    throw new Error(`Page not found! ${filename}`, {
      cause,
    });
  }
}

export async function getPageByPage(
  page: string,
  locale: string,
): Promise<Page> {
  return getPageByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
