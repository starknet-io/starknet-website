import { Box, SimpleGrid } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import React from "react";

type Props = {
  children: React.ReactNode;
  base?: number;
  md?: number;
  lg?: number;
  xl?: number;
  heading?: string;
  description?: string;
  descriptionVariant?:
    | "cardBody"
    | "body"
    | "breadcrumbs"
    | "footerLink"
    | "textLink";
  headingVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const renderHeadingVariant = (headingVariant: string) => {
  switch (headingVariant) {
    case "h4":
      return { fontWeight: "extrabold" };

    case "h3":
      return {
        fontWeight: "extrabold",
        fontSize: "32px",
        marginBottom: "xl",
      };

    case "h2":
      return {
        fontWeight: "extrabold",
        fontSize: "48px",
        marginBottom: "xl",
      };

    default:
      return { fontWeight: "extrabold" };
  }
};

export const BlockCards = ({
  heading,
  headingVariant = "h2",
  description,
  children,
  base = 1,
  md = 2,
  lg = 3,
  xl,
}: Props) => {
  return (
    <Box
      maxW={{ base: "1296px", md: "1312px" }}
      width="100%"
      m="0 auto"
      px={{ base: "16px", md: "32px" }}
      display="flex"
      flexDirection="column"
      gap={{
        base: "page.block-gap.base",
        md: "page.block-gap.md",
        lg: "page.block-gap.lg",
      }}
    >
      <Box maxW="864px">
        {heading && (
          <Box>
            <Heading
              variant={headingVariant}
              color="content.accent.value"
              withMarginBottom
            >
              {heading}
            </Heading>
            {description && (
              <Text variant="headingDescription">{description}</Text>
            )}
          </Box>
        )}
      </Box>
      <SimpleGrid
        columns={{ base, md, lg, xl }}
        spacing={{ base: "16px", md: "24px" }}
      >
        {children}
      </SimpleGrid>
    </Box>
  );
};
