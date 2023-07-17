import { Flex } from "@chakra-ui/react";
import { slugify } from "@starknet-io/cms-utils/src";
import { Heading } from "@ui/Typography/Heading";
import React from "react";
import { renderHeadingVariant } from "./BlockCards";

type Props = {
  children: React.ReactNode;
  heading?: string;
  heading_variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const BlockGrouping = ({
  children,
  heading,
  heading_variant,
}: Props) => {
  return (
    <Flex direction="column" gap="32px">
      {heading && (
        <Heading
          color="heading-navy-fg"
          variant={heading_variant || "h2"}
          id={`toc-${slugify(heading)}`}
          sx={renderHeadingVariant(heading_variant || '')}
        >
          {heading}
        </Heading>
      )}
      {children}
    </Flex>
  );
};
