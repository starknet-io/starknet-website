import * as StarkLinkList from "@ui/LinkList/LinkList";
import { LinkListBlock } from "@starknet-io/cms-data/src/pages";

export const LinkList = ({ randomize, blocks, ...rest }: LinkListBlock) => {
  return (
    <StarkLinkList.Root {...rest}>
      {blocks?.map((item, i) => (
        <StarkLinkList.Item key={i} {...item} />
      ))}
    </StarkLinkList.Root>
  );
};
