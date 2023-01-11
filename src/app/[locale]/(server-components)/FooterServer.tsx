import { Footer } from "../(components)/Footer";
import { useLocale, useTranslations } from "next-intl";
import { NextIntlClientProvider } from "next-intl/client";
import { getMainMenu } from "src/data/settings/main-menu";
import { use } from "react";

export function FooterServer(): JSX.Element {
  const t = useTranslations();
  const locale = useLocale();
  const mainMenu = use(getMainMenu(locale));

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{
        search: t("search"),
      }}
    >
      <Footer mainMenu={mainMenu} />
    </NextIntlClientProvider>
  );
}
