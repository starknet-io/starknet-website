export interface EventsPage {
  readonly title: string;
  readonly description: string;
}

export async function getEventsPage(locale: string): Promise<EventsPage> {
  try {
    return (await import(`_data/settings/${locale}/events-page.yml`)).default;
  } catch {}

  return (await import("_data/settings/en/events-page.yml")).default;
}
