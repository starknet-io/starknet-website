import { NextIntlServerProvider } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function NextIntlProvider({ children, locale }: Props) {
  try {
    const messages = (await import(`../../../i18n/intl/${locale}.json`))
      .default;

    return (
      <NextIntlServerProvider locale={locale} messages={messages}>
        {children}
      </NextIntlServerProvider>
    );
  } catch (error) {
    notFound();
  }
}
