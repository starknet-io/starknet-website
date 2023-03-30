"use client";
import { Link, LinkOverlay, LinkProps } from "@chakra-ui/react";


export const CustomLink = (props: LinkProps) => {
  return (
    <LinkOverlay>
      <Link variant={props.variant} href={props.href}>
        {props.children}
      </Link>
    </LinkOverlay>
  );
};
