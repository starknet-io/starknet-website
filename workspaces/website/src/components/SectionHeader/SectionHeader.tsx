import { Box, BoxProps } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import { Heading } from "@ui/Typography/Heading";

import React from "react";

type Props = {
  title: string | undefined;
  description?: string | undefined;
  bottomContent?: React.ReactNode;
  size?: "sm" | "lg";
  hasBorderBottom?: boolean;
  pageLastUpdated?: string | null;
  withMarginBottom?: boolean;
} & BoxProps;

export const SectionHeader = ({
  size = "sm",
  title,
  hasBorderBottom = false,
  description,
  bottomContent,
  pageLastUpdated,
  withMarginBottom = false,
  ...rest
}: Props) => {
  const mb = {
    base: "page.block-gap.base",
    md: "page.block-gap.md",
    lg: "page.block-gap.lg",
  };

  const pb = {
    base: pageLastUpdated ? "xl" : "page.block-gap.base",
    md: pageLastUpdated ? "xl" : "page.block-gap.md",
    lg: pageLastUpdated ? "xl" : "page.block-gap.lg",
  };

  return (
    <Box
      as="section"
      {...(hasBorderBottom && {
        sx: {
          borderBottom: "1px solid",
          borderColor: "border.divider",
        },
      })}
      maxW="864px"
      pb={hasBorderBottom ? pb : "0px"}
      mb={withMarginBottom ? mb : "0px"}
      {...rest}
    >
      <Heading
        variant="h1"
        as="h2"
        // fontSize={{ base: "32px", md: "48px" }}
        // lineHeight={{ base: "1.5em", md: "1.5em" }}
        fontWeight="extrabold"
        color="heading-navy-fg"
      >
        {title}
      </Heading>
      {description && (
        <Text
          color="content.accent.value"
          variant="body"
          pt={size === "sm" ? "xs" : "lg"}
        >
          {description}
        </Text>
      )}
      <Box
        pt="lg"
        fontSize="12px"
        fontWeight="500"
        lineHeight="16px"
        display={pageLastUpdated ? "block" : "none"}
      >
        {pageLastUpdated}
      </Box>
      {bottomContent}
    </Box>
  );
};
