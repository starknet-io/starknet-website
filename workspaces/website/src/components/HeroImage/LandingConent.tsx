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
        base: "page.left-right.base",
        md: "page.left-right.md",
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
        display="flex"
        flexDirection="column"
        gap={{
          base: "page.gap-standart.base",
          md: "page.gap-standart.md",
          lg: "page.gap-standart.lg",
        }}
        // overflow="hidden"
      >
        {children}
      </Box>
    </Box>
  );
};
