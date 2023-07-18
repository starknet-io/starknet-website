import { Box } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import React from "react";
import { renderHeadingVariant } from "./BlockCards";
import { HeadingVariant } from "@starknet-io/cms-data/src/pages";

type Props = {
  children: React.ReactNode;
  heading: string;
  headingVariant: HeadingVariant
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
          variant="h3"
          color="heading-navy-fg"
          sx={renderHeadingVariant(headingVariant)}
        >
          {heading}
        </Heading>
      )}
        {children}
    </Box>
  );
};
