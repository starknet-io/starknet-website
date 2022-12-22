import { useLocale } from "next-intl";
import { getEventsPage } from "src/data/settings/events-page";

// @ts-expect-error Server Component
export async function EventsPageServer(): JSX.Element {
  const locale = useLocale();

  const { title, description } = await getEventsPage(locale);

  return (
    <>
      <p>title: {title}</p>
      <p>description: {description}</p>
    </>
  );
}
