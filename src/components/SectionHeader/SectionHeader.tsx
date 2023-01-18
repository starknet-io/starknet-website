"use client";
import { Box, Stack, Divider, Text, Container } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";

import React from "react";

type Props = {
  title: string;
  description: string;
};

export const SectionHeader = ({ title, description }: Props) => {
  return (
    <Box as="section" pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "12" }}>
      <Stack spacing="5">
        <Box>
          <Heading
            as="h2"
            variant="h2"
            fontSize="5xl"
            pb={6}
            fontWeight="extrabold"
            color="heading-navy-fg"
          >
            {title}
          </Heading>
          <Text color="muted" fontSize="sm">
            {description}
          </Text>
        </Box>
        <Divider />
      </Stack>
    </Box>
  );
};
