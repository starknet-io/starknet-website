"use client";

import { NextIntlProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  try {
    const messages = require(`../../../i18n/intl/${locale}.json`);

    return (
      <NextIntlProvider locale={locale} messages={messages}>
        {children}
      </NextIntlProvider>
    );
  } catch (error) {
    notFound();
  }
}
