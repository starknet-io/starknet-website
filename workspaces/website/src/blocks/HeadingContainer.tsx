import { Box, Flex } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import React from "react";
import { renderHeadingVariant } from "./BlockCards";
import { HeadingVariant } from "@starknet-io/cms-data/src/pages";
import { slugify } from "@starknet-io/cms-utils/src";

type Props = {
  children: React.ReactNode;
  heading: string;
  headingVariant: HeadingVariant;
};

export const HeadingContainer = ({
  heading,
  headingVariant = "h2",
  children,
}: Props) => {
  return (
    <Box>
      {heading && (
        <Heading
          variant={headingVariant}
          color="content.accent.value"
          sx={renderHeadingVariant(headingVariant)}
          id={`toc-${slugify(heading)}`}
        >
          {heading}
        </Heading>
      )}
      <Flex
        direction="column"
        gap={{
          base: "page.block-gap.base",
          md: "page.block-gap.md",
          lg: "page.block-gap.lg",
        }}
      >
        {children}
      </Flex>
    </Box>
  );
};
