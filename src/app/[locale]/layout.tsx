import { PageContainer } from "./(components)/PageContainer";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ClientLocaleProvider } from "./(components)/ClientLocaleProvider";
import { getMessages } from "src/data/i18n/intl";
import { use, useMemo } from "react";
import Navbar from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";
import { getMainMenu } from "src/data/settings/main-menu";
import React from "react";

interface Props extends React.PropsWithChildren<LocaleProps> {}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const mainMenu = use(getMainMenu(locale));
  const messages = use(getMessages(locale));

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <ClientLocaleProvider
            value={useMemo(() => ({ locale, messages }), [locale, messages])}
          >
            <PageContainer>
              <Navbar mainMenu={mainMenu} />

              {children}
            </PageContainer>
            <Footer mainMenu={mainMenu} />
          </ClientLocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
