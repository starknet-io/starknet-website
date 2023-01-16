import { SubNavBlog } from "../(components)/SubNavBlog";
import { useLocale, useTranslations } from "next-intl";
import { NextIntlClientProvider } from "next-intl/client";
import { use } from "react";
// import { getCategories } from "src/data/categories";

export function SubNavServer(): JSX.Element {
  const t = useTranslations();
  const locale = useLocale();
  // const categories = use(getCategories(locale));

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{
        search: t("search"),
      }}
    >
      <SubNavBlog
        categories={[
          { id: "1", name: "All posts" },
          { id: "2", name: "Engineering" },
          { id: "3", name: "Starstruck" },
        ]}
      />
    </NextIntlClientProvider>
  );
}
