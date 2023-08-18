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
  descriptionVariant?: "cardBody" | "body" | "breadcrumbs" | "footerLink" | "textLink";
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
        marginBottom: "24px",
      };

    case "h2":
      return {
        fontWeight: "extrabold",
        fontSize: "48px",
        marginBottom: "48px",
      };

    default:
      return { fontWeight: "extrabold" };
  }
};

export const BlockCards = ({
  heading,
  headingVariant = "h3",
  description,
  descriptionVariant = "body",
  children,
  base = 2,
  md = 2,
  lg,
  xl,
}: Props) => {
  return (
    <Box maxW="1280px" m="0 auto" px={{ base: "16px", md: "32px" }}>
      <Box maxW="864px">
        {heading && (
          <Heading
            variant="h3"
            color="heading-navy-fg"
            sx={renderHeadingVariant(headingVariant)}
            mb="40px"
          >
            {heading}
          </Heading>
        )}
        {description ? <Text variant={descriptionVariant} mb="40px">{description}</Text> : null}
      </Box>
      <SimpleGrid columns={{ base, md, lg, xl }} spacing={{base: "16px", md: "24px" }}>
        {children}
      </SimpleGrid>
    </Box>
  );
};
