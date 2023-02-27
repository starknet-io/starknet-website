import { AutoProps, JobsPage } from "./(components)/JobsPage";

export const metadata = {
  title: "Jobs",
};

export default function Page(props: AutoProps) {
  return (
    <>
      <JobsPage
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
