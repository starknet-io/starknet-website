import React from "react";
import { Meta } from "@storybook/react";
import theme from "src/style/theme";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { HeroImage } from "@ui/HeroImage/HeroImage";
import { Box, ChakraProvider } from "@chakra-ui/react";

type HeroImageProps = {
  title: string;
  description: string | React.ReactNode;
  image: string;
  buttonText?: string;
  buttonUrl?: string;
};

export default {
  title: "starknet.io/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
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
  const { title, image, description, buttonText, buttonUrl } = args;
  return (
    <ThemeProvider>
      <Box>
        <HeroImage
          image={image}
          title={title}
          description={description}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
        />
      </Box>
    </ThemeProvider>
  );
};
All.args = {
  variant: "community",
  title: "Community hub",
  description: "Explore blocks, transactions, and other metrics of Starknet.",
  buttonText: "Explore community",
  buttonUrl: "/community",
};
