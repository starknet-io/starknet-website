"use client";
import { Box, Flex, Link, Stack, Text } from "src/libs/chakra-ui";

export type SubNavLinkGroupProps = {
  label: string;
  links: Array<{ label: string; url: string }>;
};

export const SubNavLinkGroup = (props: SubNavLinkGroupProps) => {
  const { label, links } = props;
  return (
    <Flex direction="column" alignItems="flex-end">
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wide"
      >
        {label}
      </Text>
      <Stack spacing="4" as="ul" mt="6" listStyleType="none">
        {links.map(({ label, url }, i) => (
          <li key={i}>
            <Link href={url} fontSize="sm">
              {label}
            </Link>
          </li>
        ))}
      </Stack>
    </Flex>
  );
};
