import { getEventsSEO } from "workspaces/cms-data/src/seo";
import { AutoProps, EventsPage } from "../(components)/EventsPage";
import { generateGenericMetadata } from "src/utils/seo";

export const generateMetadata = () => generateGenericMetadata("Past events");

export default async function Page(props: AutoProps) {
  const seo = await getEventsSEO(props.params.locale);
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
        seo={seo}
      />
    </>
  );
}
