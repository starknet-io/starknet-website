import { HStack, Icon } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import { Chip } from "./Chip";
import { HiOutlineHome } from "react-icons/hi2";

export const Root = () => (
  <ThemeProvider>
    <HStack>
      <Chip>Chip</Chip>
      <Chip>Longer Chip</Chip>
      <Chip isDisabled>Disabled</Chip>
      <Chip isDisabled leftIcon={<Icon as={HiOutlineHome} />}>
        Disabled
      </Chip>
      <Chip leftIcon={<Icon as={HiOutlineHome} />}>Home</Chip>
      <Chip isSelected leftIcon={<Icon as={HiOutlineHome} />}>
        Home
      </Chip>
    </HStack>
  </ThemeProvider>
);

export default {
  title: "starknet.io/Chip",
  component: Root,
} as Meta<typeof Root>;
