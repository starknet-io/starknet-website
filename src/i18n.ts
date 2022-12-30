import { NextIntlConfig } from "next-intl";
import i18nConfig from "i18n/config.json";
import { getI18n } from "./data/i18n";

const config: NextIntlConfig = {
  locales: i18nConfig.map((c) => c.code),
  defaultLocale: "en",
  async getMessages({ locale }) {
    return getI18n(locale);
  },
};

export default config;
