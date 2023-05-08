import { AutoProps, EventsPage } from "./(components)/EventsPage";
import { getEventsSEO } from "@starknet-io/cms-data/src/seo";

export const metadata = {
  title: "Events",
};

export default async function Page(props: AutoProps) {
  const eventsSEO = await getEventsSEO(props.params.locale);

  return (
    <>
      <EventsPage
        {...props}
        mode="UPCOMING_EVENTS"
        env={{
          ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
        }}
        seo={eventsSEO}
      />
    </>
  );
}
