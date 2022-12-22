export interface EventsPage {
  readonly title: string;
  readonly description: string;
}

export async function getEventsPage(locale: string): Promise<EventsPage> {
  try {
    return (await import(`src/settings/${locale}/events-page.yml`)).default;
  } catch {}

  return (await import("src/settings/en/events-page.yml")).default;
}
