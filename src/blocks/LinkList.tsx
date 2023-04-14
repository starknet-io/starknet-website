"use client";
import React from "react";
import * as StarkLinkList from "@ui/LinkList/LinkList";

type Props = {
  children: React.ReactNode;
  heading?: string;
  listSize?: "sm" | "md" | "lg";
};

export const LinkList = (props: Props) => {
  return (
    <StarkLinkList.Root heading={props.heading} listSize={props.listSize}>
      {props.children}
    </StarkLinkList.Root>
  );
};

export const LinkListItem = (props: StarkLinkList.ItemProps) => {
  return <StarkLinkList.Item {...props} />;
};
