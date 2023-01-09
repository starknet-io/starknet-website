import type { NextIntlConfig } from "next-intl";
import i18nConfig from "_data/i18n/config.json";
import { getMessages } from "./intl";

export interface LocaleConfig {
  readonly code: string;
  readonly hrefLang: string;
  readonly name: string;
  readonly localName: string;
  readonly langDir: string;
  readonly dateFormat: string;
}

export const locales: readonly LocaleConfig[] = i18nConfig;
export const defaultLocale = "en";

export const config: NextIntlConfig = {
  locales: i18nConfig.map((c) => c.code),
  defaultLocale,
  getMessages({ locale }) {
    return getMessages(locale);
  },
};

export default config;
