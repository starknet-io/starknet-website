"use client";
import { Box, SimpleGrid } from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import React from "react";

type Props = {
  children: React.ReactNode;
  base?: number;
  md?: number;
  lg?: number;
  xl?: number;
  heading?: string;
  headingVariant?: "sm" | "md" | "lg";
};

export const BlockCards = ({
  heading,
  headingVariant = "sm",
  children,
  base = 2,
  md = 2,
  lg,
  xl,
}: Props) => {
  let styles = {};
  const renderHeadingVariant = () => {
    switch (headingVariant) {
      case "sm":
        return (styles = { fontWeight: "extrabold" });

      case "md":
        return (styles = { fontWeight: "extrabold" });

      case "lg":
        return (styles = {
          fontWeight: "extrabold",
          fontSize: "56px",
          marginBottom: "56px",
        });

      default:
        return (styles = { fontWeight: "extrabold" });
    }
  };
  return (
    <Box>
      {heading && (
        <Heading
          as="h3"
          variant="h3"
          color="heading-navy-fg"
          sx={renderHeadingVariant()}
        >
          {heading}
        </Heading>
      )}
      <SimpleGrid columns={{ base, md, lg, xl }} spacing="32px">
        {children}
      </SimpleGrid>
    </Box>
  );
};
