import { useLocale } from "next-intl";
import { getEventsPage } from "../../../../data/settings/events-page";
import { getEvents } from "../../../../data/events";

// @ts-expect-error Server Component
export async function EventsPageServer(): JSX.Element {
  const locale = useLocale();

  const { title, description } = await getEventsPage(locale);
  const events = await getEvents(locale);

  return (
    <>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <pre>events: {JSON.stringify(events,null,'  ') }</pre>
    </>
  );
}
