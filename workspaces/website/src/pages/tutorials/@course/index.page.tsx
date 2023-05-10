export { TutorialsPage as Page } from "src/app/tutorials/(components)/TutorialsPage";

import { Props } from "src/app/tutorials/(components)/TutorialsPage";
import { DocumentProps } from "src/renderer/types";

export function getDocumentProps({ params }: Props): DocumentProps {
  return {
    title: courses.find((c) => c.value === params.course)?.label,
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
