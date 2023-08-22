import { Box } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import * as PageAccordion from "./PageAccordion";

export const Root = () => (
  <ThemeProvider>
    <Box maxW="700px">
      <PageAccordion.Root>
        <PageAccordion.Item label="First title">
          <PageAccordion.Panel>Content</PageAccordion.Panel>
        </PageAccordion.Item>
        <PageAccordion.Item label="Second title">
          <PageAccordion.Panel>Content</PageAccordion.Panel>
        </PageAccordion.Item>
      </PageAccordion.Root>
    </Box>
  </ThemeProvider>
);

export default {
  title: "starknet.io/Accordion",
  component: Root,
} as Meta<typeof Root>;
