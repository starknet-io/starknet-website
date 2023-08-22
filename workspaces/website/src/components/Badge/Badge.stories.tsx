import { VStack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { Badge } from "./Badge";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { StatusBadge } from "./StatusBadge";

export default {
  title: "starknet.io/Badge",
  component: Badge,
} as Meta<typeof Badge>;

export const Primary = () => (
  //todo figure out why chakra storybook addon is not adding custom themeprovider
  <ThemeProvider>
    <VStack alignItems="flex-start">
      <Badge variant="community_and_events">Community and events</Badge>
      <Badge variant="community_calls">Community calls</Badge>
      <Badge variant="engineering">Developers</Badge>
      <Badge variant="governance">Governance</Badge>
      <Badge variant="stark_at_home">Stark@home</Badge>
      <Badge variant="stark_math">Stark Math</Badge>
      <Badge variant="stark_struct">Stark struct</Badge>
      <Badge variant="foundation">Foundation</Badge>
      <Badge variant="ecosystem">Ecosystem</Badge>
      <Badge variant="github">Github</Badge>
      <Badge variant="blog">Blog</Badge>
      <Badge variant="youtube">Youtube</Badge>
    </VStack>
  </ThemeProvider>
);

export const StatusBadges = () => (
  //todo figure out why chakra storybook addon is not adding custom themeprovider
  <ThemeProvider>
    <VStack alignItems="flex-start">
      <StatusBadge variant="success">On testnet</StatusBadge>
      <StatusBadge variant="danger">On backlog</StatusBadge>
    </VStack>
  </ThemeProvider>
);
