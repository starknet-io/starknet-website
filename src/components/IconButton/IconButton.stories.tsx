import { HStack } from "src/libs/chakra-ui";
import { IconButton } from "./IconButton";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import {
  SiTwitter
} from "react-icons/si";
import { Meta } from "@storybook/react";

export default {
  title: "starknet.io/IconButton",
  component: IconButton,
} as Meta<typeof IconButton>;

export const Default = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <IconButton
          aria-label="YouTube"
          colorScheme='teal'
          icon={
            <SiTwitter fontSize="1.25rem" />
          }
        />
      </>
    </HStack>
  </ThemeProvider>
);
