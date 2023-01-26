"use client";
import React from "react";
import * as StarknetLinkList from "@ui/LinkList/LinkList";

type Props = {
  children: React.ReactNode;
};

export const LinkList = (props: Props) => {
  return <StarknetLinkList.Root>{props.children}</StarknetLinkList.Root>;
};

export const LinkListItem = (props: StarknetLinkList.ItemProps) => {
  return <StarknetLinkList.Item {...props} />;
};
