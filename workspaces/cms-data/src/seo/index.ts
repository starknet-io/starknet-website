import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";
import { defaultLocale } from "../i18n/config";

export interface SEOTexts {
  home: {
    heroText: string;
  };
  footer: {
    footerText: string;
    footerDisclaimers: {
      text: string;
      link: string;
    }[]
  };
  tutorials: {
    title: string;
    subtitle: string;
  };
  events: {
    title: string;
    subtitle: string;
  };
  jobs: {
    title: string;
    subtitle: string;
    description: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    description: string;
  };
  search: {
    search: string;
    cancel: string;
  };
  language: {
    title: string;
    subtitle: string;
    description: string;
    callToAction: string;
  };
}

async function getSEO<T extends keyof SEOTexts>(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>,
  page: T
): Promise<any> {
  return getFirst(
    ...[locale, defaultLocale].map(
      (value) => async () => getJSON("data/seo/" + page + "/" + value, context)
    )
  );
}

export async function getTutorialsSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["tutorials"]> {
  try {
    return await getSEO(locale, context, "tutorials");
  } catch (cause) {
    throw new Error("getTutorialsSEO failed!", {
      cause,
    });
  }
}

export async function getEventsSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["events"]> {
  try {
    return await getSEO(locale, context, "events");
  } catch (cause) {
    throw new Error("getEventsSEO failed!", {
      cause,
    });
  }
}

export async function getJobsSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["jobs"]> {
  try {
    return await getSEO(locale, context, "jobs");
  } catch (cause) {
    throw new Error("getJobsSEO failed!", {
      cause,
    });
  }
}

export async function getFooterSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["footer"]> {
  try {
    return await getSEO(locale, context, "footer");
  } catch (cause) {
    throw new Error("getFooterSEO failed!", {
      cause,
    });
  }
}

export async function getHomeSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["home"]> {
  try {
    return await getSEO(locale, context, "home");
  } catch (cause) {
    throw new Error("getHomeSEO failed!", {
      cause,
    });
  }
}

export async function getSearchSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["search"]> {
  try {
    return await getSEO(locale, context, "search");
  } catch (cause) {
    throw new Error("getSearchSEO failed!", {
      cause,
    });
  }
}

export async function getLanguageCenterSEO(
  locale: string,
  context: EventContext<{}, any, Record<string, unknown>>
): Promise<SEOTexts["language"]> {
  try {
    return await getSEO(locale, context, "language");
  } catch (cause) {
    throw new Error("getLanguageCenterSEO failed!", {
      cause,
    });
  }
}
