import {
  AutoProps,
  BlockCommunityEventsList,
} from "./(components)/BlockCommunityEventsList";

// @ts-expect-error
export async function BlockCommunityEvents(props: AutoProps): JSX.Element {
  return (
    <>
      <BlockCommunityEventsList
        {...props}
        env={{
          ALGOLIA_INDEX: process.env.ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
