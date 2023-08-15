import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BorderRadius {
  base: string;
  md?: string;
  lg?: string;
}
type Props = {
  children: React.ReactNode;
  padding?: BoxProps["padding"];
  borderRadius?: BorderRadius | string;
  bg?: string;
} & BoxProps;

export const CardGradientBorder = ({
  children,
  padding = 0,
  borderRadius = "16px",
  bg = "card-bg",
  ...rest
}: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="card-br"
      padding={padding}
      bg={bg}
      borderRadius={borderRadius}
      height="100%"
      overflow="hidden"
      _hover={{
        background:
          "linear-gradient(119deg, #EC796B -25.87%, #D672EF 125.87%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
        borderColor: "transparent",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
