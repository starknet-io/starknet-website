import { AutoProps, EventsPage } from "./(components)/EventsPage";
import { getEventsSEO } from "@starknet-io/cms-data/src/seo/getPageSEO";

export const metadata = {
  title: "Events",
};

export default function Page(props: AutoProps) {
  const eventsseo = getEventsSEO(props.params.locale);
  console.log("events seo", eventsseo);

  return (
    <>
      <EventsPage
        {...props}
        mode="UPCOMING_EVENTS"
        env={{
          ALGOLIA_INDEX: process.env.ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
