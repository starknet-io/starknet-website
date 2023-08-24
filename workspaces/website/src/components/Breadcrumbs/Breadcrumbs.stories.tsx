import { HStack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { Breadcrumbs } from "./Breadcrumbs";

export const Root = () => (
  <ThemeProvider>
    <HStack>
      <Breadcrumbs
        locale="en"
        items={[
          {
            link: `/en/community`,
            label: "Community",
          },
          {
            label: "Blog",
            link: ``,
          },
        ]}
      />
    </HStack>
  </ThemeProvider>
);

export default {
  title: "starknet.io/Breadcrumbs",
  component: Root,
} as Meta<typeof Root>;
