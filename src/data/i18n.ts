import { AbstractIntlMessages } from "next-intl";
import { NextIntlRuntimeConfig } from "next-intl/dist/server/NextIntlConfig";
import { NextIntlConfig } from "next-intl";
import i18nConfig from "i18n/config.json";

export async function getMessages(
  runtimeConfig: NextIntlRuntimeConfig
): Promise<AbstractIntlMessages> {
  try {
    return (await import(`i18n/intl/${runtimeConfig.locale}.json`)).default;
  } catch {}

  return (await import("i18n/intl/en.json")).default;
}

export interface LocaleConfig {
  readonly code: string;
  readonly hrefLang: string;
  readonly name: string;
  readonly localName: string;
  readonly langDir: string;
  readonly dateFormat: string;
}

export const locales: readonly LocaleConfig[] = i18nConfig

export const config: NextIntlConfig = {
  locales: i18nConfig.map((c) => c.code),
  defaultLocale: "en",
  getMessages,
};

export default config
