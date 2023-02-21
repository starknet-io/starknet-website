"use client";
import { Link, LinkOverlay, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export const CustomLink = (props: LinkProps) => {
  return (
    <LinkOverlay>
      <Link as={NextLink} variant={props.variant} href={props.href}>
        {props.children}
      </Link>
    </LinkOverlay>
  );
};
