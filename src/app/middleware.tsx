import { createIntlMiddleware } from "next-intl/server";
import i18nConfig from "i18n/config.json";

export default createIntlMiddleware({
  locales: i18nConfig.map((c) => c.code),
  defaultLocale: "en",
});
