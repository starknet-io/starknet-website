import { getTutorialsSEO } from "workspaces/cms-data/src/seo";
import { TutorialsPage } from "./(components)/TutorialsPage";
import { generateGenericMetadata } from "src/utils/seo";

export const generateMetadata = () => generateGenericMetadata("Tutorials");

type Props = {
  readonly params: LocaleParams & {
    readonly course?: string;
  };
};

export default async function Page(props: Props) {
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
