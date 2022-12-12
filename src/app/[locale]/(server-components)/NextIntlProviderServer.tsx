import { NextIntlServerProvider } from "next-intl/server";
import { notFound } from "next/navigation";
import { getI18n } from "../../../data/i18n";

interface Props {
  readonly children: React.ReactNode;
  readonly locale: string;
}

export async function NextIntlProviderServer({
  children,
  locale,
  // @ts-expect-error Server Component
}: Props): JSX.Element {
  try {
    const messages = await getI18n(locale);

    return (
      <NextIntlServerProvider locale={locale} messages={messages}>
        {children}
      </NextIntlServerProvider>
    );
  } catch {
    notFound();
  }
}
