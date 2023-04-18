import React from "react";
import { Meta } from "@storybook/react";
import theme from "src/style/theme";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
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
    | "learn"
    | "build"
    | "community";
};

export default {
  title: "starknet.io/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    variant: {
      options: ["wallets", "block_explorers", "bridges", "dapps", "learn", "build", "community"],
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

export const Wallets = (args: HeroImageProps) => (
  <ThemeProvider>
    <HeroImage
      variant="wallets"
      title="Wallets"
      description="Explore the wallets that allow you to interact with and build in the Starknet ecosystem."
    />
  </ThemeProvider>
);
export const BlockExplorers = (args: HeroImageProps) => (
  <ThemeProvider>
    <HeroImage
      variant="block_explorers"
      title="Block explorers"
      description="Explore blocks, transactions, and other metrics of Starknet."
    />
  </ThemeProvider>
);
export const Bridges = (args: HeroImageProps) => (
  <ThemeProvider>
    <HeroImage
      variant="bridges"
      title="Bridges & fiat on-ramps"
      description="Explore blocks, transactions, and other metrics of Starknet."
    />
  </ThemeProvider>
);
export const Dapps = (args: HeroImageProps) => (
  <ThemeProvider>
     <HeroImage
      variant="dapps"
      title="Dapps"
      description="Explore blocks, transactions, and other metrics of Starknet."
    />
  </ThemeProvider>
);
export const Learn = (args: HeroImageProps) => (
  <ThemeProvider>
    <HeroImage
      variant="learn"
      title="Learn"
      description="Explore blocks, transactions, and other metrics of Starknet."
    />
  </ThemeProvider>
);
export const Build = (args: HeroImageProps) => (
  <ThemeProvider>
    <HeroImage
      variant="build"
      title="Developer hub"
      description="Explore blocks, transactions, and other metrics of Starknet."
    />
  </ThemeProvider>
);
export const Community = (args: HeroImageProps) => (
  <ThemeProvider>
    <HeroImage
      variant="community"
      title="Community hub"
      description="Explore blocks, transactions, and other metrics of Starknet."
    />
  </ThemeProvider>
);
