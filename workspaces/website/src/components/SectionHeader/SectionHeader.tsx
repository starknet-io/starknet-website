import { Box, Stack, Divider } from "@chakra-ui/react";
import { Text } from "@ui/Typography/Text";
import { Heading } from "@ui/Typography/Heading";

import React from "react";

type Props = {
  title: string | undefined;
  description?: string | undefined;
  bottomContent?: React.ReactNode;
  size?: "sm" | "lg";
};

export const SectionHeader = ({
  size = "sm",
  title,
  description,
  bottomContent,
}: Props) => {
  return (
    <Box
      as="section"
      // pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "12" }}
    >
      <Stack spacing="3" pb={6}>
        <Box>
          <Heading
            as="h1"
            variant="h2"
            color="heading-navy-fg"
            fontWeight="extrabold"
          >
            {title}
          </Heading>
          {description && (
            <Text color="muted" variant="body" pb={{ base: 4, lg: 8 }}>
              {description}
            </Text>
          )}
          {bottomContent}
        </Box>
        <Divider variant="primary" mt="8px" />
      </Stack>
    </Box>
  );
};
