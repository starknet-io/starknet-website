import { Box, Container, Flex, Spacer, Stack } from "@chakra-ui/react";
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
  sectionHeaderBottomContent?: React.ReactNode;
};

export const PageLayout = (props: Props) => {
  return (
    <Container py="0" pb="16" flex="1">
      <Flex py="4" direction={{ base: "column", lg: "row" }}>
        <Box>{props.breadcrumbs}</Box>
        <Spacer />
        <Box>
          <Text variant="cardBody" top="1px" pos="relative">
            {props.pageLastUpdated}
          </Text>
        </Box>
      </Flex>
      {/* page layout */}
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "100px" }}
        flex="1"
        pt={{ base: 2, lg: 10 }}
        // bg="yellow"
      >
        {props.leftAside && (
          <Box
            as="aside"
            order={{ base: "2", lg: "0" }}
            role="complementary"
            width={{ base: "full", md: "213px" }}
            alignSelf="start"
            // position={{ base: "unset", lg: "sticky" }}
            top="36"
          >
            {props.leftAside}
          </Box>
        )}

        <Box
          as="main"
          role="main"
          width="full"
          mt="0 !important"
          flexShrink={props.leftAside == null ? 0 : undefined}
        >
          <Box minH="lg">
            {props.sectionHeaderTitle && (
              <SectionHeader
                title={props.sectionHeaderTitle}
                description={props.sectionHeaderDescription}
                bottomContent={props.sectionHeaderBottomContent}
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
