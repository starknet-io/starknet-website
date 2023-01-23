import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  padding?: string;
};

export const CardGradientBorder = ({ children, padding = "8" }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="card-br"
      padding={`${padding}px`}
      bg="card-bg"
      borderRadius={{ base: "24px" }}
      transition=" all 0.5s ease"
      _hover={{
        background:
          "linear-gradient(white, white) padding-box,linear-gradient(200deg, #C507E4, #5C94FF) ",
        borderColor: "transparent",
      }}
    >
      {children}
    </Box>
  );
};
