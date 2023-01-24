"use client";
import { Box, Container, Flex, Spacer, Stack } from "src/libs/chakra-ui";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import { Text } from "@ui/Typography/Text";
import React from "react";

type Props = {
  leftAside?: React.ReactNode;
  main?: React.ReactNode;
  rightAside?: React.ReactNode | null;
  rightAsideSticky?: boolean;
  pageHeader?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  pageLastUpdated?: string | null;
  sectionHeaderTitle?: string | undefined;
  sectionHeaderDescription?: string | undefined;
};

export const PageLayout = (props: Props) => {
  return (
    <Container py="0" pb="16" flex="1">
      <Flex py="4" direction={{ base: "column", lg: "row" }}>
        <Box>{props.breadcrumbs}</Box>
        <Spacer />
        <Box>
          <Text variant="baseRegular" fontSize="sm" top="1px" pos="relative">
            {props.pageLastUpdated}
          </Text>
        </Box>
      </Flex>
      {/* page layout */}
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "16" }}
        flex="1"
        pt={10}
        // bg="yellow"
      >
        {props.leftAside && (
          <Box
            as="aside"
            order={{ base: "2", lg: "0" }}
            role="complementary"
            width={{ base: "full", lg: "193px" }}
            alignSelf="start"
            // position={{ base: "unset", lg: "sticky" }}
            top="36"
          >
            {props.leftAside}
          </Box>
        )}

        <Box as="main" role="main" width="full">
          <Box minH="lg">
            {props.sectionHeaderTitle && (
              <SectionHeader
                title={props.sectionHeaderTitle}
                description={props.sectionHeaderDescription}
              />
            )}
            {props.main}
          </Box>
        </Box>
        {props.rightAside && (
          <Box
            display={{ base: "none", lg: "block" }}
            order={{ base: "3", lg: "1" }}
            as="aside"
            role="complementary"
            width={{ base: "full", lg: "lg" }}
            alignSelf="start"
            position={{ base: "unset", lg: "sticky" }}
            top="36"
          >
            {props.rightAside}
          </Box>
        )}
      </Stack>
    </Container>
  );
};

{
  /* <Box minH="xs">Sidebar</Box>; */
}
