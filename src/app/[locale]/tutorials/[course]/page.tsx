import { Metadata } from "next";
import { TutorialsPage, Props } from "../(components)/TutorialsPage";

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

export function generateMetadata(props: Omit<Props, "env">): Metadata {
  return {
    title: courses.find((c) => c.value === props.params.course)?.label,
  };
}

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
