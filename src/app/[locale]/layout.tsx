import { NavbarServer } from "./(server-components)/NavbarServer";
import { NextIntlProviderServer } from "./(server-components)/NextIntlProviderServer";

interface Props {
  readonly children: React.ReactNode;
  readonly params: { readonly locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <NextIntlProviderServer locale={locale}>
      <NavbarServer />

      {children}
    </NextIntlProviderServer>
  );
}
