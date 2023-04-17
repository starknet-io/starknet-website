import { AutoProps, EventsPage } from "../(components)/EventsPage";

export const metadata = {
  title: "Past events",
};

export default async function Page(props: AutoProps) {
  return (
    <>
      <EventsPage
        {...props}
        mode="PAST_EVENTS"
        env={{
          ALGOLIA_INDEX: process.env.ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
