export interface LocaleConfig {
  readonly code: string;
  readonly hrefLang: string;
  readonly name: string;
  readonly localName: string;
  readonly langDir: string;
  readonly dateFormat: string;
}

export const i18nConfig: readonly LocaleConfig[] = [
  {
    code: "en",
    hrefLang: "en",
    name: "English",
    localName: "English",
    langDir: "ltr",
    dateFormat: "MM/DD/YYYY",
  }
];

export const defaultLocale = "en";

export const locales: readonly string[] = i18nConfig.map((c) => c.code);
export const preRenderedLocales: readonly string[] = ["en"];
