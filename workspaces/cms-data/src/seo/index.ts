import { getFirst } from "@starknet-io/cms-utils/src/index";
import fs from "node:fs/promises";
import path from "node:path";
import { defaultLocale } from "../i18n/config";

interface PageCommonSEO {
  readonly title: string;
  readonly subtitle: string;
}

const getSEO = (locale: string, page: string) => {
  return [locale, defaultLocale].map(
    (value) => async () =>
      JSON.parse(
        await fs.readFile(
          path.join(
            process.cwd(),
            `_crowdin/data/seo/${page}`,
            value + ".json"
          ),
          "utf8"
        )
      )
  );
};

export async function getTutorialsSEO(locale: string): Promise<PageCommonSEO> {
  try {
    return await getFirst(...getSEO(locale, "tutorials"));
  } catch (cause) {
    throw new Error("getTutorialsSEO failed!", {
      cause,
    });
  }
}

export async function getEventsSEO(locale: string): Promise<PageCommonSEO> {
  try {
    return await getFirst(...getSEO(locale, "events"));
  } catch (cause) {
    throw new Error("getEventsSEO failed!", {
      cause,
    });
  }
}

export async function getJobsSEO(locale: string): Promise<PageCommonSEO> {
  try {
    return await getFirst(...getSEO(locale, "jobs"));
  } catch (cause) {
    throw new Error("getJobsSEO failed!", {
      cause,
    });
  }
}

export async function getFooterSEO(locale: string): Promise<{
  footerText: string;
}> {
  try {
    return await getFirst(...getSEO(locale, "footer"));
  } catch (cause) {
    throw new Error("getFooterSEO failed!", {
      cause,
    });
  }
}

export async function getHomeSEO(locale: string): Promise<{
  heroText: string;
}> {
  try {
    return await getFirst(...getSEO(locale, "home"));
  } catch (cause) {
    throw new Error("getHomeSEO failed!", {
      cause,
    });
  }
}

export async function getSearchSEO(locale: string): Promise<{
  title: string;
  cancel: string;
}> {
  try {
    return await getFirst(...getSEO(locale, "search"));
  } catch (cause) {
    throw new Error("getSearchSEO failed!", {
      cause,
    });
  }
}

export type LanguageCenterSEO = {
  title: string;
  subtitle: string;
  description: string;
  callToAction: string;
};

export async function getLanguageCenterSEO(
  locale: string
): Promise<LanguageCenterSEO> {
  try {
    return await getFirst(...getSEO(locale, "language"));
  } catch (cause) {
    throw new Error("getLanguageCenterSEO failed!", {
      cause,
    });
  }
}
