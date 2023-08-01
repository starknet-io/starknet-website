import { HStack, Icon as ChakraIcon } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "src/renderer/ThemeProvider";
import {
  HiPlay,
  HiOutlineMoon,
  HiOutlineSun,
  HiGlobeAlt
} from "react-icons/hi2";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { PopoverIcon } from "../../components/Layout/Navbar/PopoverIcon";

export default {
  title: "starknet.io/Button",
  component: Button,
} as Meta<typeof Button>;

export const Solid = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="solid" size="md">Solid button</Button>
        <Button variant="solid" size="sm">Solid small button</Button>
        <Button variant="solid">
          <ChakraIcon
            as={HiPlay}
            boxSize="24px"
          />
        </Button>
        <Button leftIcon={
            <ChakraIcon
              as={HiPlay}
              boxSize="24px"
            />
          } variant="solid">With icon</Button>
        <Button variant="solid" isDisabled>Disabled</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Outline = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="outline">Outline button</Button>
        <Button variant="outline" size="sm">Outline small button</Button>
        <Button leftIcon={
            <ChakraIcon
              as={HiPlay}
              boxSize="24px"
            />
          } variant="outline">With icon</Button>
        <Button variant="outline" isDisabled>Disabled</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const OutlineLight = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="outlineLight">Outline light button</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const OutlineRounded = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="outlineRounded">Outline rounded button</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Ghost = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="ghost">Ghost button</Button>
        <Button variant="ghost" size="sm">Ghost button small</Button>
        <Button rightIcon={
          <ChakraIcon
            as={ChevronDownIcon}
            boxSize="24px"
            />
          } variant="ghost">With icon</Button>
        </>
      <Button variant="ghost" isDisabled>Ghost button disabled</Button>
      <Button rightIcon={
          <ChakraIcon
            as={ChevronDownIcon}
            boxSize="24px"
            />
          } variant="ghost" isDisabled>Ghost button disabled with icon</Button>
    </HStack>
  </ThemeProvider>
);

export const PrimaryHero = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="primaryHero">Primary hero button</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const SecondaryHero = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="secondaryHero">Secondary hero button</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Switch = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="switch">
          <ChakraIcon as={HiOutlineMoon} fontSize="xl" />
        </Button>
        <Button variant="switch">
          <ChakraIcon as={HiOutlineSun} fontSize="xl" />
        </Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Filter = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="filter">
          Filter button
        </Button>
        <Button variant="filterActive">
          Filter active button
        </Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Category = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="category">
          Category button
        </Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Icon = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button
          leftIcon={<ChakraIcon as={HiOutlineGlobeAlt} fontSize="xl" />}
          variant="icon"
          rightIcon={<PopoverIcon isOpen={false} />}
          textTransform="uppercase"
        >
          AR
        </Button>
      </>
    </HStack>
  </ThemeProvider>
);
