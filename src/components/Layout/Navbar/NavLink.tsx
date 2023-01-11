import { Stack, Link, Text } from "@chakra-ui/react";

import React from "react";

type Props = {
  href: string;
  id: number;
  title: string;
};

export const NavLink = ({ href, id, title }: Props) => {
  return (
    <Link variant="menu" href={href} key={id}>
      <Stack spacing="2" direction="row" p="0">
        <Text fontWeight="medium">{title}</Text>
      </Stack>
    </Link>
  );
};
