import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const BlockGrouping = ({ children }: Props) => {
  return (
    <Flex
      direction="column"
      gap="32px"
      maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
      width="100%"
      px={{ base: "page.left-right.base", md: "page.left-right.md" }}
      m="0 auto"
    >
      {children}
    </Flex>
  );
};
