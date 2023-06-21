import {
  AutoProps,
  BlockCommunityEventsList,
} from "./(components)/BlockCommunityEventsList";

export function BlockCommunityEvents(props: AutoProps): JSX.Element {
  return (
    <>
      <BlockCommunityEventsList
        {...props}
        env={{
          ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
