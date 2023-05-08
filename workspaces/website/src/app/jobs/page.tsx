import { getJobsSEO } from "@starknet-io/cms-data/src/seo";
import { AutoProps, JobsPage } from "./(components)/JobsPage";

export const metadata = {
  title: "Jobs",
};

export default async function Page(props: AutoProps) {
  const seo = await getJobsSEO(props.params.locale);

  return (
    <>
      <JobsPage
        {...props}
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
