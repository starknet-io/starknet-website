import {
  Box,
  Container,
  ContainerProps,
  LayoutProps,
  Stack,
} from "@chakra-ui/react";
import { SectionHeader } from "@ui/SectionHeader/SectionHeader";
import React from "react";
import { SummitPromo } from "./SummitPromo";

type Props = {
  leftAside?: React.ReactNode;
  main?: React.ReactNode;
  rightAside?: React.ReactNode | null;
  rightAsideSticky?: boolean;
  pageHeader?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  pageLastUpdated?: string | null;
  sectionHeaderTitle?: string | undefined;
  sectionHeaderBorder?: boolean;
  sectionHeaderDescription?: string | undefined;
  sectionHeaderBottomContent?: React.ReactNode;
  maxW?: string;
  contentMaxW?: LayoutProps["maxW"];
  sx?: ContainerProps["sx"];
  withMarginTop?: boolean;
};

export const PageLayout = (props: Props) => {
  return (
    <Container
      py="0"
      px="32px"
      flex="1"
      maxW={props.maxW ? props.maxW : "contentMaxW.xl"}
      overflowX="clip"
      overflowY="visible"
      mt={
        props.withMarginTop
          ? {
              base: "page.block-gap.base",
              md: "page.block-gap.md",
              lg: "page.block-gap.lg",
            }
          : undefined
      }
      sx={props.sx}
    >
      {props.breadcrumbs}
      {/* page layout */}
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "100px" }}
        flex="1"
        pt={{ base: 2, lg: 0 }}
        // bg="yellow"
        maxWidth={props.contentMaxW || ""}
        margin={props.contentMaxW ? "0 auto" : "0"}
      >
        {props.leftAside && (
          <Box
            as="aside"
            order={{ base: "2", lg: "0" }}
            role="complementary"
            width={{ base: "full", md: "200px" }}
            minWidth={{ base: "full", md: "200px" }}
            alignSelf="start"
            top="36"
          >
            {props.leftAside}
          </Box>
        )}
        <Box as="main" role="main" width="full" mt="0 !important" minW="0px">
          <Box minH="lg">
            {props.sectionHeaderTitle && (
              <Box>
                <SectionHeader
                  title={props.sectionHeaderTitle}
                  description={props.sectionHeaderDescription}
                  bottomContent={props.sectionHeaderBottomContent}
                  maxW="none"
                  hasBorderBottom={props.sectionHeaderBorder}
                  withMarginBottom={true}
                  pageLastUpdated={props.pageLastUpdated}
                />
              </Box>
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
      <SummitPromo />
    </Container>
  );
};
