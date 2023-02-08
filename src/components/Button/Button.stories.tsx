import React from "react";
import { HStack } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "src/app/providers/ThemeProvider";

export default {
  title: "starknet.io/Button",
  component: Button,
} as Meta<typeof Button>;

export const Primary = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="primary">Primary button</Button>
        <Button variant="secondary">Secondary button</Button>
      </>
    </HStack>
  </ThemeProvider>
);
