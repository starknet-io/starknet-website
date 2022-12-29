import { AbstractIntlMessages } from "next-intl";

export async function getI18n(locale: string): Promise<AbstractIntlMessages> {
  try {
    return (await import(`i18n/intl/${locale}.json`)).default;
  } catch {}

  return (await import("i18n/intl/en.json")).default;
}
