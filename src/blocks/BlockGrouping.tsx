import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const BlockGrouping = ({ children }: Props) => {
  return (
    <Flex direction="column" gap="32px" mb={{ base: "56px", lg: "136px" }}>
      {children}
    </Flex>
  );
};
