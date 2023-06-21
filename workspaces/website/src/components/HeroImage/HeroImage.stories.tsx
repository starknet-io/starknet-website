import React from "react";
import { Meta } from "@storybook/react";
import theme from "src/style/theme";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { ChakraProvider } from "@chakra-ui/react"

type HeroImageProps = {
  title: string;
  description: string | React.ReactNode;
  variant?:
    | "wallets"
    | "block_explorers"
    | "bridges"
    | "dapps"
    | "build"
    | "community"
    | "nodes_and_services"
    | "security";
  buttonText?: string;
  buttonUrl?: string;
};

export default {
  title: "starknet.io/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    variant: {
      options: ["wallets", "block_explorers", "bridges", "dapps", "build", "community", "nodes_and_services", "security"],
      control: { type: "select" }
    }
  },
  decorators: [
    (Story: React.ComponentType) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],

} as Meta<typeof HeroImage>;

export const All = (args: HeroImageProps) => {
  const {
    variant,
    title,
    description,
    buttonText,
    buttonUrl
  } = args;
  return (
  <ThemeProvider>
    <HeroImage
      variant={variant}
      title={title}
      description={description}
      buttonText={buttonText}
      buttonUrl={buttonUrl}
    />
  </ThemeProvider>
)
};
All.args = {
  variant: "community",
  title: "Community hub",
  description: "Explore blocks, transactions, and other metrics of Starknet.",
  buttonText: "Explore community",
  buttonUrl: "/community",
}
