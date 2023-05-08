import { getEventsSEO } from "@starknet-io/cms-data/src/seo";
import { AutoProps, EventsPage } from "../(components)/EventsPage";

export const metadata = {
  title: "Past events",
};

export default async function Page(props: AutoProps) {
  const seo = await getEventsSEO(props.params.locale);
  return (
    <>
      <EventsPage
        {...props}
        mode="PAST_EVENTS"
        env={{
          ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
        }}
        seo={seo}
      />
    </>
  );
}
