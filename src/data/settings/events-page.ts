import { defaultLocale } from "../i18n";
import { getFirst, getYAML } from "../utils";

export interface EventsPage {
  readonly title: string;
  readonly description: string;
}

export async function getEventsPage(locale: string): Promise<EventsPage> {
  try {
    return await getFirst(
      () => getYAML(`settings/${locale}/events-page.yml`),
      () => getYAML(`settings/${defaultLocale}/events-page.yml`),
    );
  } catch (cause) {
    throw new Error("getMainMenu failed!", {
      cause,
    });
  }
}
