import { PageContainer } from "./(components)/PageContainer";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ClientLocaleProvider } from "./(components)/ClientLocaleProvider";
import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import Navbar from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import React from "react";
import { i18nConfig } from "@starknet-io/cms-data/src/i18n/config";
import { notFound } from "next/navigation";

export const metadata = {
  title: {
    default: "Starknet",
    template: "%s - Starknet",
  },
  description:
    "Starknet is a Validity Rollup Layer 2. It provides high throughput, low gas costs, and retains Ethereum Layer 1 levels of security",
  openGraph: {
    type: "website",
    siteName: "StarkNet",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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
  const alerts = await getAlerts(locale);

  return (
    <ThemeProvider>
      <ClientLocaleProvider value={{ locale, messages }}>
        <PageContainer alerts={alerts}>
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
