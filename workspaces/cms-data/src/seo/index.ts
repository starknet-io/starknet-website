import { getFirst, getJSON } from "@starknet-io/cms-utils/src/index";
import { defaultLocale } from "../i18n/config";

export interface SEOTexts {
  home: {
    heroText: string;
  };
  footer: {
    footerText: string;
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
  event: null | WorkerGlobalScopeEventMap["fetch"],
  page: T
): Promise<any> {
  return getFirst(
    ...[locale, defaultLocale].map(
      (value) => async () => getJSON("data/seo/" + page + "/" + value, event)
    )
  );
}

export async function getTutorialsSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["tutorials"]> {
  try {
    return await getSEO(locale, event, "tutorials");
  } catch (cause) {
    throw new Error("getTutorialsSEO failed!", {
      cause,
    });
  }
}

export async function getEventsSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["events"]> {
  try {
    return await getSEO(locale, event, "events");
  } catch (cause) {
    throw new Error("getEventsSEO failed!", {
      cause,
    });
  }
}

export async function getJobsSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["jobs"]> {
  try {
    return await getSEO(locale, event, "jobs");
  } catch (cause) {
    throw new Error("getJobsSEO failed!", {
      cause,
    });
  }
}

export async function getFooterSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["footer"]> {
  try {
    return await getSEO(locale, event, "footer");
  } catch (cause) {
    throw new Error("getFooterSEO failed!", {
      cause,
    });
  }
}

export async function getHomeSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["home"]> {
  try {
    return await getSEO(locale, event, "home");
  } catch (cause) {
    throw new Error("getHomeSEO failed!", {
      cause,
    });
  }
}

export async function getSearchSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["search"]> {
  try {
    return await getSEO(locale, event, "search");
  } catch (cause) {
    throw new Error("getSearchSEO failed!", {
      cause,
    });
  }
}

export async function getLanguageCenterSEO(
  locale: string,
  event: null | WorkerGlobalScopeEventMap["fetch"]
): Promise<SEOTexts["language"]> {
  try {
    return await getSEO(locale, event, "language");
  } catch (cause) {
    throw new Error("getLanguageCenterSEO failed!", {
      cause,
    });
  }
}
