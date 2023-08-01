import { VStack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { CustomLink } from "./CustomLink";
import { ThemeProvider } from "src/renderer/ThemeProvider";

export default {
  title: "starknet.io/CustomLink",
  component: CustomLink,
} as Meta<typeof CustomLink>;

export const Link = () => (
  <ThemeProvider>
    <VStack p={12}>
      <>
        <CustomLink variant="cardLink" size="md" href="">Link &rarr;</CustomLink>
        <CustomLink variant="cardLink" size="sm" href="">Link &rarr;</CustomLink>
      </>
    </VStack>
  </ThemeProvider>
);
