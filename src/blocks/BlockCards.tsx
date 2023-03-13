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
  headingVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const BlockCards = ({
  heading,
  headingVariant = "h3",
  children,
  base = 2,
  md = 2,
  lg,
  xl,
}: Props) => {
  let styles = {};

  const renderHeadingVariant = () => {
    switch (headingVariant) {
      case "h4":
        return (styles = { fontWeight: "extrabold" });

      case "h3":
        return (styles = {
          fontWeight: "extrabold",
          fontSize: "32px",
          marginBottom: "24px"
        });

      case "h2":
        return (styles = {
          fontWeight: "extrabold",
          fontSize: "48px",
          marginBottom: "48px"
        });

      default:
        return (styles = { fontWeight: "extrabold" });
    }
  };
  return (
    <Box>
      {heading && (
        <Heading
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
