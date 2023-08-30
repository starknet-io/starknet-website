import { Box, BoxProps } from "@chakra-ui/react";

export const LandingConent = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      maxW="contentMaxW.xl"
      marginX="auto"
      position="relative"
      mt="-500px"
      zIndex={2}
      w="100%"
      padding={{
        base: "0px",
        md: "page.left-right.md",
      }}
      {...rest}
    >
      <Box
        bg="surface.bg-page"
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
          base: "page.gap-standard.base",
          md: "page.gap-standard.md",
          lg: "page.gap-standard.lg",
        }}
        sx={{
          "> *, .community-events-list": {
            px: "0 !important",
          },
        }}
        // overflow="hidden"
      >
        {children}
      </Box>
    </Box>
  );
};
