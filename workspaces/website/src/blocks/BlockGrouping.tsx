import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const BlockGrouping = ({
  children,
}: Props) => {
  return (
    <Flex direction="column" gap="32px" maxW={{ base: "1296px", md: "1312px" }} px={{ base: "16px", md: "32px" }} m="0 auto">
      {children}
    </Flex>
  );
};
