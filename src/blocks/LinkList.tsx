"use client";
import React from "react";
import * as StarkLinkList from "@ui/LinkList/LinkList";

type Props = {
  children: React.ReactNode;
  heading?: string;
};

export const LinkList = (props: Props) => {
  return (
    <StarkLinkList.Root heading={props.heading}>
      {props.children}
    </StarkLinkList.Root>
  );
};

export const LinkListItem = (props: StarkLinkList.ItemProps) => {
  return <StarkLinkList.Item {...props} />;
};
