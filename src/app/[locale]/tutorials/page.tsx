import { getTutorialsSEO } from "workspaces/cms-data/src/seo";
import { TutorialsPage, Props } from "./(components)/TutorialsPage";

export const metadata = {
  title: "Tutorials",
};

export default async function Page(props: Omit<Props, "env">) {
  const seo = await getTutorialsSEO(props.params.locale);

  return (
    <>
      <TutorialsPage
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
