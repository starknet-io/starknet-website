import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

type Props = {
  title: string;
  description?: string;
};

export const PageHeaderBlock = (props: Props) => {
  return <SectionHeader title={props.title} description={props.description} />;
};
