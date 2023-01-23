import {
  AutoProps,
  BlockCommunityEventsList,
} from "./(components)/BlockCommunityEventsList";

export function BlockCommunityEvents(props: AutoProps) {
  return (
    <>
      <BlockCommunityEventsList
        {...props}
        env={{
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
