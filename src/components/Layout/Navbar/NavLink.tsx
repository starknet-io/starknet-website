"use client";
import { Stack, Link, Text } from "src/libs/chakra-ui";

import React from "react";

type Props = {
  href: string;
  label: string;
};

export const NavLink = ({ href, label }: Props) => {
  return (
    <Link variant="menu" href={href}>
      <Stack spacing="2" direction="row" p="0">
        <Text color="navlink-fg" fontSize="sm" fontWeight="medium">
          {label}
        </Text>
      </Stack>
    </Link>
  );
};
