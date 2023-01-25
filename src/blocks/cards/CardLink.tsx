import { Box, Link } from "src/libs/chakra-ui";
import NextLink, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

type Props = {
  children: React.ReactNode;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;

export const CardLink = ({ href, children }: Props) => {
  return (
    <Link
      as={Box}
      href={href}
      sx={{
        textDecoration: "none!important",
        _peerHover: {
          textDecoration: "none!important",
        },
      }}
    >
      {children}
    </Link>
  );
};
