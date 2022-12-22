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
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {events.map((event) => (
          <div key={event.name} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <h3>{event.name}</h3>
              <h4>{event.location_name}</h4>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
        <pre>events: {JSON.stringify(events, null, "  ")}</pre>
      </div>

      <div>Test</div> */}
    </>
  );
}
