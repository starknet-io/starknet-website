"use client";
import { Link, LinkOverlay, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/react"
type Props = LinkProps & { size?: string };

export const CustomLink = (props: Props) => {
  const bg = useColorModeValue('red.500', 'red.200')

  return (
    <LinkOverlay>
      <Link as={NextLink} variant={props.variant} href={props.href}>
        {props.children}
      </Link>
    </LinkOverlay>
  );
};
