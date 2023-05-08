import { getTutorialsSEO } from "@starknet-io/cms-data/src/seo";
import { TutorialsPage } from "./(components)/TutorialsPage";

export const metadata = {
  title: "Tutorials",
};

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
          ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
        }}
        seo={seo}
      />
    </>
  );
}
