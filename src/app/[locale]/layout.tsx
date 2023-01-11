import { PageContainer } from "./(components)/PageContainer";
import { FooterServer } from "./(server-components)/FooterServer";
import { NavbarServer } from "./(server-components)/NavbarServer";
import { NextIntlServerProvider } from "next-intl/server";
import { ThemeProvider } from "../providers/ThemeProvider";

interface Props {
  readonly children: React.ReactNode;
  readonly params: { readonly locale: string };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlServerProvider locale={locale}>
          <ThemeProvider>
            <PageContainer>
              <NavbarServer />

              {children}
            </PageContainer>
            <FooterServer />
          </ThemeProvider>
        </NextIntlServerProvider>
      </body>
    </html>
  );
}
