import { PageHeaderBlock as PageHeaderBlockProps } from "@starknet-io/cms-data/src/pages";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";

export const PageHeaderBlock = (props: PageHeaderBlockProps) => {
  return (
    <SectionHeader
      title={props.title}
      description={props.description}
      hasBorderBottom={props.hasBorderBottom}
      pageLastUpdated={props.pageLastUpdated}
      withMarginBottom={props.withMarginBottom}
    />
  );
};
