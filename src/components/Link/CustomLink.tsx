"use client";
import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

export const CustomLink = (props: LinkProps) => {
  return (
    <Link as={NextLink} variant={props.variant} href={props.href}>
      {props.children}
    </Link>
  );
};
