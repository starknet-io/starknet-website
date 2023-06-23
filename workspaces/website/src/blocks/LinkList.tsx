import * as StarkLinkList from "@ui/LinkList/LinkList";
import { LinkListBlock } from "workspaces/cms-data/src/pages";

export const LinkList = ({ randomize, blocks, ...rest }: LinkListBlock) => {
  return (
    <StarkLinkList.Root {...rest}>
      {blocks?.map((item, i) => (
        <StarkLinkList.Item key={i} {...item} />
      ))}
    </StarkLinkList.Root>
  );
};
