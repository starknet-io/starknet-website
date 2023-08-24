import { Box, BoxProps } from "@chakra-ui/react";

export const LandingConent = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      maxW="contentMaxW"
      marginX="auto"
      position="relative"
      mt="-500px"
      zIndex={2}
      w="100%"
      padding={{
        base: "page.leftRight.base",
        md: "page.leftRight.md",
      }}
      {...rest}
    >
      <Box
        bg="bg-default"
        paddingX={{
          base: "md",
          md: "3xl",
          lg: "4xl",
        }}
        paddingTop={{
          base: "xl",
          md: "3xl",
          lg: "4xl",
        }}
        borderTopRadius="lg"
      >
        {children}
      </Box>
    </Box>
  );
};
