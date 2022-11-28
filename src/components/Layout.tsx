import React from "react";
import { IntlProvider } from "react-intl";
import { LocaleProvider } from "gatsby-theme-i18n";
import Navbar from "./Navbar";

interface DocumentLayoutProps {
  readonly children: React.ReactNode;
  readonly pageContext: {
    readonly locale: string;
  };
}

export function DocumentLayout({ children, pageContext }: DocumentLayoutProps) {
  const locale = pageContext.locale;
  const messages = require(`../../i18n/intl/${locale}.json`);

  return (
    <LocaleProvider pageContext={pageContext}>
      <IntlProvider locale={locale} key={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocaleProvider>
  );
}

interface PageLayoutProps {
  readonly children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
