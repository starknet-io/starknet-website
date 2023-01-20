import { defaultLocale } from "../i18n/config";
import { getFirst, getYAML } from "../utils";

export interface EventsPage {
  readonly title: string;
  readonly description: string;
}

export async function getTutorialsPage(locale: string): Promise<EventsPage> {
  try {
    return await getFirst(
      () => getYAML(`settings/${locale}/tutorials-page.yml`),
      () => getYAML(`settings/${defaultLocale}/tutorials-page.yml`),
    );
  } catch (cause) {
    throw new Error("getTutorialsPage failed!", {
      cause,
    });
  }
}
