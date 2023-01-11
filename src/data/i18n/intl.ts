import { AbstractIntlMessages } from "next-intl";
// import { getFirst, getJSON } from "../utils";
// import { defaultLocale } from "./config";

// export async function getMessages(
//   locale: string
// ): Promise<AbstractIntlMessages> {
//   try {
//     return await getFirst(
//       () => getJSON(`i18n/intl/${locale}.json`),
//       () => getJSON(`i18n/intl/${defaultLocale}.json`)
//     );
//   } catch (cause) {
//     throw new Error("getMessages failed!", {
//       cause,
//     });
//   }
// }

export async function getMessages(
  locale: string,
): Promise<AbstractIntlMessages> {
  try {
    return (await import(`_data/i18n/intl/${locale}.json`)).default;
  } catch {}

  return (await import("_data/i18n/intl/en.json")).default;
}
