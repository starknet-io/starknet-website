"use client";

import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return (
    <Flex direction="column" flex="1">
      {children}
    </Flex>
  );
};
