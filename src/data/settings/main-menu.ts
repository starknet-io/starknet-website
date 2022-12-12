export type Page<T extends {} = {}> = T & {
  readonly page: string;
  readonly pages: readonly Page<T>[];
};

export interface MainMenu<P extends Page = Page> {
  readonly pages: readonly P[];
}

export async function getMainMenu(locale: string): Promise<MainMenu> {
  try {
    return (await import(`../../settings/${locale}/main-menu.yml`)).default;
  } catch {}

  return (await import("../../settings/en/main-menu.yml")).default;
}

type PageTransformer<P extends Page, P2 extends P> = (page: P) => Promise<P2>;

export async function transformMainMenu<P extends Page, P2 extends P>(
  mainMenu: MainMenu<P>,
  pageTransformer: PageTransformer<P, P2>,
): Promise<MainMenu<P2>> {
  return {
    pages: await transformPages(mainMenu.pages, pageTransformer),
  };
}

export async function transformPages<P extends Page, P2 extends P>(
  pages: readonly P[],
  pageTransformer: PageTransformer<P, P2>,
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
    }),
  );
}
