"use client";
import { Link, LinkOverlay, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = LinkProps & { size?: string };

export const CustomLink = (props: Props) => {

  return (
    <LinkOverlay>
      <Link as={NextLink} variant={props.variant} href={props.href}>
        {props.children}
      </Link>
    </LinkOverlay>
  );
};
