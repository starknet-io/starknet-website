import { PageContainer } from "./(components)/PageContainer";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ClientLocaleProvider } from "./(components)/ClientLocaleProvider";
import { getMessages } from "src/data/i18n/intl";
import Navbar from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";
import { getMainMenu } from "src/data/settings/main-menu";
import React from "react";
import { i18nConfig } from "src/data/i18n/config";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic'

interface Props extends React.PropsWithChildren<LocaleProps> {}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props): Promise<JSX.Element> {
  const localeConfig = i18nConfig.find((c) => c.code === locale);

  if (localeConfig == null) {
    notFound();
  }

  const mainMenu = await getMainMenu(locale);
  const messages = await getMessages(locale);

  return (
    <ThemeProvider>
      <ClientLocaleProvider value={{ locale, messages }}>
        <PageContainer>
          <Navbar
            mainMenu={mainMenu}
            env={{
              ALGOLIA_INDEX: process.env.ALGOLIA_INDEX!,
              ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
              ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
            }}
          />
          {children}
        </PageContainer>
        <Footer mainMenu={mainMenu} />
      </ClientLocaleProvider>
    </ThemeProvider>
  );
}
