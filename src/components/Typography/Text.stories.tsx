import React from "react";
import { HStack } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import theme from "src/style/theme";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import { TextProps } from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";
import { ChakraProvider } from "@chakra-ui/react"

type Props = {
  variant?:
    | "cardBody"
    | "body"
    | "breadcrumbs"
} & TextProps;
export default {
  title: "starknet.io/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    variant: {
      options: ["cardBody", "body", "breadcrumbs"],
      control: { type: "radio" }
    }
  },
  decorators: [
    (Story: React.ComponentType) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],

} as Meta<typeof Text>;

export const Body = (args: Props) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Text variant="body" {...args}>body text</Text>
      <Text variant="body" fontWeight="bold" {...args}>Bold body text</Text>
      <Text variant="body" fontWeight="semibold" {...args}>Bold body text</Text>
      </>
    </HStack>
  </ThemeProvider>
);
export const CardBody = (args: Props) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Text variant="cardBody" {...args}>cardBody text</Text>
      <Text variant="cardBody" fontWeight="bold" {...args}>Bold cardBody text</Text>
      <Text variant="cardBody" fontWeight="semibold" {...args}>Bold cardBody text</Text>
      </>
    </HStack>
  </ThemeProvider>
);
export const Breadcrumbs = (args: Props) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Text variant="breadcrumbs" {...args}>breadcrumbs text</Text>
      <Text variant="breadcrumbs" fontWeight="bold" {...args}>Bold breadcrumbs</Text>
      <Text variant="breadcrumbs" fontWeight="semibold" {...args}>Bold breadcrumbs</Text>
      </>
    </HStack>
  </ThemeProvider>
);
export const Footer = (args: Props) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Text variant="footerLink" {...args}>Footer link</Text>
      <Text variant="footerLink" fontWeight="bold" {...args}>Bold footer link</Text>
      <Text variant="footerLink" fontWeight="semibold" {...args}>Bold footer link</Text>
      </>
    </HStack>
  </ThemeProvider>
);
export const TextLink = (args: Props) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Text variant="textLink" {...args}>Text link</Text>
      <Text variant="textLink" fontWeight="bold" {...args}>Bold text link</Text>
      <Text variant="textLink" fontWeight="semibold" {...args}>Bold text link</Text>
      </>
    </HStack>
  </ThemeProvider>
);
