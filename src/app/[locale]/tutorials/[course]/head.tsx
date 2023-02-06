import HeadTags from "src/app/[locale]/(components)/HeadTags";

export interface Props extends LocaleProps {
  readonly params: LocaleParams & {
    readonly course: string;
  };
}

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

export default async function Head(props: Props) {
  const course = courses.find((c) => c.value === props.params.course);

  return <HeadTags title={course?.label ?? "Tutorials"} />;
}
