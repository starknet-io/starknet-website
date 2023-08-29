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
      maxW="contentMaxW.md"
      // pt={{ base: "4", md: "8" }} pb={{ base: "12", md: "12" }}
    >
      <Stack spacing="40px" pb={6}>
        <Box>
          <Heading
            variant="h1"
            as="h2"
            // fontSize={{ base: "32px", md: "48px" }}
            // lineHeight={{ base: "1.5em", md: "1.5em" }}
            pb={size === "sm" ? 2 : 6}
            fontWeight="extrabold"
            color="heading-navy-fg"
          >
            {title}
          </Heading>
          {description && (
            <Text
              color="content.accent.value"
              variant="body"
              pb={{ base: 4, lg: 8 }}
            >
              {description}
            </Text>
          )}
          {bottomContent}
        </Box>
      </Stack>
    </Box>
  );
};
