import React from "react";
import { HStack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import theme from "src/style/theme";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { HeadingProps } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { ChakraProvider } from "@chakra-ui/react"

type CustomHeadingProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & Omit<HeadingProps, 'as' | 'size'>;

export default {
  title: "starknet.io/Heading",
  component: Heading,
  argTypes: {
    children: { control: "text" },
    variant: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" }
    },
    className: {
      control: { type: 'select' },
      options: ['text-slate-600', 'text-hero-fg']
    },

  },
  decorators: [
    (Story: React.ComponentType) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],

} as Meta<typeof Heading>;

export const H1Hero = (args: CustomHeadingProps) => (
  <ThemeProvider>
    <HStack p={12}>
      <Heading variant="h1hero" {...args}>H1 Hero</Heading>
    </HStack>
  </ThemeProvider>
);
export const H1 = (args: CustomHeadingProps) => (
  <ThemeProvider>
    <HStack p={12}>
      <Heading variant="h1" {...args}>Heading 1</Heading>
    </HStack>
  </ThemeProvider>
);
export const H2 = (args: CustomHeadingProps) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Heading variant="h2" {...args}>Heading 2</Heading>
      </>
    </HStack>
  </ThemeProvider>
);
export const H3 = (args: CustomHeadingProps) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Heading variant="h3" {...args}>Heading 3</Heading>
      </>
    </HStack>
  </ThemeProvider>
);
export const H4 = (args: CustomHeadingProps) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Heading variant="h4" {...args}>Heading 4</Heading>
      </>
    </HStack>
  </ThemeProvider>
);
export const H5 = (args: CustomHeadingProps) => (
  <ThemeProvider>
    <HStack p={12}>
      <>
      <Heading variant="h5" {...args}>Heading 5</Heading>
      </>
    </HStack>
  </ThemeProvider>
);
