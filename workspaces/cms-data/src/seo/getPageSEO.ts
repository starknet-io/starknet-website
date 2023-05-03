import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";
import { defaultLocale } from "../i18n/config";

interface PageCommonSEO {
  readonly title: string;
  readonly subtitle: string;
}

export async function getEventsSEO(locale: string): Promise<PageCommonSEO> {
  try {
    return await getFirst(
      ...[locale, defaultLocale].map(
        (value) => async () =>
          JSON.parse(
            await fs.readFile(
              path.join(
                process.cwd(),
                "_crowdin/data/events-seo",
                value + ".json"
              ),
              "utf8"
            )
          )
      )
    );
  } catch (cause) {
    throw new Error("getEventsSEO failed!", {
      cause,
    });
  }
}

// const getPageSettings = (locale: string, page: string) => {
//   return [locale, defaultLocale].map(
//     (value) => async () =>
//       JSON.parse(
//         await fs.readFile(
//           path.join(process.cwd(), `_crowdin/data/${page}`, value + ".json"),
//           "utf8"
//         )
//       )
//   );
// };

// export async function getJobsPageSettings(
//   locale: string
// ): Promise<PageCommonSEO> {
//   try {
//     return await getFirst(...getPageSettings(locale, "jobs-page"));
//   } catch (cause) {
//     throw new Error("getJobsPageSettings failed!", {
//       cause,
//     });
//   }
// }

// export async function getTutorialssPageSettings(
//   locale: string
// ): Promise<PageCommonSEO> {
//   try {
//     return await getFirst(...getPageSettings(locale, "tutorials-page"));
//   } catch (cause) {
//     throw new Error("getTutorialssPageSettings failed!", {
//       cause,
//     });
//   }
// }
