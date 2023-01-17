"use client";
import { Box, Link, Stack, Text } from "@chakra-ui/react";

export type SubNavLinkGroupProps = {
  label: string;
  links: Array<{ label: string; url: string }>;
};

export const SubNavLinkGroup = (props: SubNavLinkGroupProps) => {
  const { label, links } = props;
  return (
    <Box>
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {label}
      </Text>
      <Stack spacing="4" as="ul" mt="6" listStyleType="none">
        {links.map(({ label, url }) => (
          <li key={url}>
            <Link href={url} fontSize="sm">
              {label}
            </Link>
          </li>
        ))}
      </Stack>
    </Box>
  );
};
