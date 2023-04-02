import { json } from "./utils";

export interface LocaleConfig {
  readonly code: string;
  readonly hrefLang: string;
  readonly name: string;
  readonly localName: string;
  readonly langDir: string;
  readonly dateFormat: string;
}

export const locales: readonly LocaleConfig[] = await json(
  "_data/i18n/config.json",
);
export const defaultLocale = "en";
