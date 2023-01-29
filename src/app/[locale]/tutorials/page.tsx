import { AutoProps, TutorialsPage } from "./(components)/TutorialsPage";

export default function Page(props: AutoProps) {
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
