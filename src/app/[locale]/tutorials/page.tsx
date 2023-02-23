import { TutorialsPage, Props } from "./(components)/TutorialsPage";

export const dynamic = "force-dynamic";

export default function Page(props: Omit<Props, "env">) {
  return (
    <>
      <TutorialsPage
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
