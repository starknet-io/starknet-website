import { PageContainer } from "./(components)/PageContainer";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ClientLocaleProvider } from "./(components)/ClientLocaleProvider";
import { getMessages } from "src/data/i18n/intl";
import Navbar from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";
import { getMainMenu } from "src/data/settings/main-menu";
import React from "react";

// import { NavbarServer } from "./(server-components)/NavbarServer";
// import { FooterServer } from "./(server-components)/FooterServer";

interface Props extends React.PropsWithChildren<LocaleProps> {}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props): Promise<JSX.Element> {
  const mainMenu = await getMainMenu(locale);
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <ClientLocaleProvider value={{ locale, messages }}>
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
