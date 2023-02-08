import React from "react";
import { Flex, HStack, Wrap } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import { Badge } from "./Badge";
import { ThemeProvider } from "src/app/providers/ThemeProvider";

export default {
  title: "starknet.io/Badge",
  component: Badge,
} as Meta<typeof Badge>;

export const Primary = () => (
  //todo figure out why chakra storybook addon is not adding custom themeprovider
  <ThemeProvider>
    <Wrap>
      <Badge variant="community_and_events">Community and events</Badge>
      <Badge variant="community_calls">Community calls</Badge>
      <Badge variant="engineering">Engineering</Badge>
      <Badge variant="governance">Governance</Badge>
      <Badge variant="stark_at_home">Stark@home</Badge>
      <Badge variant="stark_math">Stark Math</Badge>
      <Badge variant="stark_struct">Stark struct</Badge>
    </Wrap>
  </ThemeProvider>
);
