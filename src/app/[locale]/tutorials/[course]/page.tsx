import { Metadata } from "next";
import { TutorialsPage } from "../(components)/TutorialsPage";
import { getTutorialsSEO } from "workspaces/cms-data/src/seo";

const courses = [
  {
    label: "Bytesized series",
    value: "bytesized_series",
  },
  {
    label: "Starknet edu series",
    value: "starknet_edu",
  },
  {
    label: "Cairo 101",
    value: "cairo_101",
  },
  {
    label: "Cairo workshops",
    value: "cairo_workshops",
  },
  {
    label: "Hackathon Feb 22",
    value: "hackathon_feb_22",
  },
  {
    label: "Hackathon Oct 22",
    value: "hackathon_oct_22",
  },
];

type Props = {
  readonly params: LocaleParams & {
    readonly course?: string;
  };
};

export function generateMetadata(props: Props): Metadata {
  return {
    title: courses.find((c) => c.value === props.params.course)?.label,
  };
}

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
