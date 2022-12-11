export type Page<T extends {} = {}> = T & {
  readonly page: string;
  readonly pages: readonly Page<T>[];
};

export interface MainMenu<P extends Page = Page> {
  readonly pages: readonly P[];
}

export async function getMainMenu(locale: string): Promise<MainMenu> {
  try {
    return import(`./settings/${locale}/main-menu.yml`);
  } catch (err) {}

  return (await import("./settings/en/main-menu.yml")).default;
}

type PageTransformer<P extends Page, P2 extends P> = (page: P) => Promise<P2>;

export async function transformMainMenu<P extends Page, P2 extends P>(
  mainMenu: MainMenu<P>,
  pageTransformer: PageTransformer<P, P2>
): Promise<MainMenu<P2>> {
  return {
    pages: await transformPages(mainMenu.pages, pageTransformer),
  };
}

export async function transformPages<P extends Page, P2 extends P>(
  pages: readonly P[],
  pageTransformer: PageTransformer<P, P2>
): Promise<readonly P2[]> {
  return await Promise.all(
    pages.map(async (page) => {
      return {
        ...(await pageTransformer(page)),
        pages:
          page.pages != null
            ? await transformPages(page.pages as any, pageTransformer)
            : [],
      };
    })
  );
}

interface Content {
  readonly path: string;
  readonly title: string;
  readonly MDXContent: React.Component;
}

function mdxToContent({ default: MDXContent, path, title }: any): Content {
  return { MDXContent, path, title };
}

export async function getContentByFilename(
  filename: string,
  locale: string
): Promise<Content> {
  try {
    return mdxToContent(
      (await import(`../content/${locale}/${filename}.md`)).default
    );
  } catch (err) {}

  try {
    return mdxToContent(require(`../content/en/${filename}.md`));
  } catch (err) {}

  throw new Error(`Content not found! ${filename}`);
}

export async function getContentByPage(
  page: string,
  locale: string
): Promise<Content> {
  return getContentByFilename(page.replace(/(^\/|\/$)/g, ""), locale);
}
