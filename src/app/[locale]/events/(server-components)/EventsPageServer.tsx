import { useLocale } from "next-intl";
import { getEventsPage } from "src/data/settings/events-page";
import { getEvents } from "src/data/events";

// @ts-expect-error Server Component
export async function EventsPageServer(): JSX.Element {
  const locale = useLocale();

  const { title, description } = await getEventsPage(locale);
  const events = await getEvents(locale);

  return (
    <div className="mx-auto  max-w-7xl px-2 sm:px-4 lg:px-8 pt-7">
      <div className="prose">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="grid grid-cols-1  gap-4  sm:grid-cols-1 sm:gap-6 lg:grid-cols-1 xl:gap-8 pt-6">
        {events.map((event) => (
          <div key={event.name} className="relative prose">
            <div className="group p-2 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
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
    </div>
  );
}
