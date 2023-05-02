import "@fontsource/inter/variable.css";
import "@fontsource/noto-sans-hebrew/hebrew.css";
import "@fontsource/tajawal/arabic.css";
import "@fontsource/noto-sans-jp/japanese.css";
import "@fontsource/noto-sans-sc/chinese-simplified.css";
import "@fontsource/noto-sans-tc/chinese-traditional.css";

import React from "react";
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
  const {
    pageContext: { alerts, mainMenu },
    children,
  } = props;

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={props.pageContext}>
        <ThemeProvider>
          <PageContainer alerts={alerts}>
            <Navbar
              mainMenu={mainMenu}
              env={{
                ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
                ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
                ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
              }}
            />
            {children}
          </PageContainer>
          <Footer mainMenu={mainMenu} />
        </ThemeProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
