import { Box, BoxProps, ChakraProps } from "@chakra-ui/react";
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
  borderColor?: string;
  borderSx?: ChakraProps["sx"];
} & BoxProps;

export const CardGradientBorder = ({
  children,
  padding = 0,
  borderRadius = "16px",
  bg = "card-bg",
  borderColor,
  borderSx,
  ...rest
}: Props) => {
  return (
    <Box
      borderWidth="1px"
      padding={padding}
      bg={bg}
      borderRadius={borderRadius}
      flex="1"
      overflow="hidden"
      sx={{
        borderColor: borderColor ?? "border.card.value",
        ...borderSx,
      }}
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
