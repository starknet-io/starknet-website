import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

type Props = {
  title: string;
  description?: string;
  border?: boolean;
  lastUpdated?: string | null;
};

export const PageHeaderBlock = (props: Props) => {
  return <SectionHeader
    title={props.title}
    description={props.description}
    border={props.border}
    lastUpdated={props.lastUpdated}
  />;
};
