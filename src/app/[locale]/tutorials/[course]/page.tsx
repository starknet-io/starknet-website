import { TutorialsPage, Props } from "../(components)/TutorialsPage";

export default function Page(props: Props) {
  return (
    <>
      <TutorialsPage
        {...props}
        env={{
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
