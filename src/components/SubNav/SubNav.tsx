"use client";
import {
  Box,
  Flex,
  HStack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  TabProps,
} from "src/libs/chakra-ui";
import React from "react";

type RootProps = {
  children: React.ReactNode;
};

const Root = ({ children }: RootProps) => {
  return (
    <Box as="nav">
      <Box>
        <HStack spacing="10" justify="space-between">
          <Flex justify="space-between" flex="1">
            <Tabs position="relative" variant="unstyled">
              <TabList>{children}</TabList>
              <TabIndicator mt="2" height={0.5} bg="fg-accent" />
            </Tabs>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};

type ItemProps = {
  isActive?: boolean;
} & TabProps;

const Item = ({ children, ...rest }: ItemProps) => {
  return (
    <Tab
      {...rest}
      fontSize="sm"
      paddingInlineStart={0}
      paddingInlineEnd={0}
      mr={6}
      color="subnav-fg"
      alignItems="flex-start"
      isDisabled={rest.isDisabled}
      _selected={{
        color: "subnav-fg-accent",
        fontWeight: "medium",
      }}
    >
      {children}
    </Tab>
  );
};

export { Root, Item };
