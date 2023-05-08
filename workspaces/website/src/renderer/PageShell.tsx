import "@fontsource/inter/variable.css";
import "@fontsource/noto-sans-hebrew/hebrew.css";
import "@fontsource/tajawal/arabic.css";
import "@fontsource/noto-sans-jp/japanese.css";
import "@fontsource/noto-sans-sc/chinese-simplified.css";
import "@fontsource/noto-sans-tc/chinese-traditional.css";

import React, { Suspense } from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { ThemeProvider } from "./ThemeProvider";
import { PageContainer } from "src/app/(components)/PageContainer";
import Navbar from "src/app/(components)/Navbar";
import { Footer } from "src/app/(components)/Footer";

interface Props {
  readonly pageContext: PageContext;
  readonly children: React.ReactNode;
}

export function PageShell(props: Props) {
  const { pageContext, children } = props;

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={props.pageContext}>
        <ThemeProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <PageContainer alerts={pageContext.alerts}>
              <Navbar
                mainMenu={pageContext.mainMenu}
                env={{
                  ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
                  ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
                  ALGOLIA_SEARCH_API_KEY: import.meta.env
                    .VITE_ALGOLIA_SEARCH_API_KEY!,
                }}
                searchSEO={pageContext.seo.search}
                languageCenterSeo={pageContext.seo.language}
              />
              {children}
            </PageContainer>
            <Footer
              mainMenu={pageContext.mainMenu}
              seo={pageContext.seo.footer}
            />
          </Suspense>
        </ThemeProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
