"use client";
import React from "react";
import * as StarkLinkList from "@ui/LinkList/LinkList";
import { LinkListBlock } from "workspaces/cms-data/src/pages";
import { getShuffledArray } from "src/utils/getShuffledArray";

export const LinkList = ({ randomize, blocks, ...rest }: LinkListBlock) => {
  const items = randomize ? getShuffledArray(blocks || []) : blocks;

  return (
    <StarkLinkList.Root {...rest}>
      {items.map((item, i) => (
        <StarkLinkList.Item key={i} {...item} />
      ))}
    </StarkLinkList.Root>
  );
};
