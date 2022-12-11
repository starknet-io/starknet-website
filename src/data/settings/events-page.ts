export interface EventsPage {
  readonly title: string;
  readonly description: string;
}

export async function getEventsPage(locale: string): Promise<EventsPage> {
  try {
    return (await import(`../../settings/${locale}/events-page.yml`)).default;
  } catch (err) {}

  return (await import("../../settings/en/events-page.yml")).default;
}
