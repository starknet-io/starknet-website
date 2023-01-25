"use client";

import { Box, BoxProps, LinkBox } from "src/libs/chakra-ui";

type Props = {
  children: React.ReactNode;
  href: string | undefined;
} & BoxProps;

export const CardLink = ({ href, children, ...rest }: Props): JSX.Element => {
  return (
    <LinkBox
      as={Box}
      href={href}
      sx={{
        cursor: "pointer",
        textDecoration: "none!important",
        _peerHover: {
          textDecoration: "none!important",
        },
      }}
      {...rest}
    >
      {children}
    </LinkBox>
  );
};
