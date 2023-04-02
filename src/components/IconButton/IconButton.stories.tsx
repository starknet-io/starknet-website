import { HStack } from "src/libs/chakra-ui";
import { IconButton } from "./IconButton";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import {
  SiTwitter
} from "react-icons/si";

export default {
  title: "starknet.io/IconButton",
  component: IconButton,
};

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
