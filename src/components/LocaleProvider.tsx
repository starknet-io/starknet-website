"use client"

import React from "react";
import { IntlProvider } from "react-intl";

interface LocaleProviderProps {
  readonly children: React.ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const locale = 'en';
  // const messages = require(`../../i18n/intl/${locale}.json`);

  return (
    <IntlProvider locale={locale} key={locale} messages={{}}>
      {children}
    </IntlProvider>
  );
}
