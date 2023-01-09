import "./globals.css";
import "src/css/index.css";

import { NavbarServer } from "./(server-components)/NavbarServer";
import { NextIntlServerProvider } from "next-intl/server";

interface Props {
  readonly children: React.ReactNode;
  readonly params: { readonly locale: string };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlServerProvider locale={locale}>
          <NavbarServer />
          {children}
        </NextIntlServerProvider>
      </body>
    </html>
  );
}
