import { getJobsSEO } from "workspaces/cms-data/src/seo";
import { AutoProps, JobsPage } from "./(components)/JobsPage";
import { generateGenericMetadata } from "src/utils/seo";

export const generateMetadata = () => generateGenericMetadata("Jobs");

export default async function Page(props: AutoProps) {
  const seo = await getJobsSEO(props.params.locale);

  return (
    <>
      <JobsPage
        {...props}
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
