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
        <Button variant="solid">Solid button</Button>
        <Button leftIcon={
            <ChakraIcon
              as={HiPlay}
              boxSize="24px"
            />
          } variant="solid">With icon</Button>
        <Button leftIcon={
            <ChakraIcon
              as={HiGlobeAlt}
              boxSize="24px"
            />
          } variant="solid">With icon and counter (3)</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Outline = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="outline">Outline button</Button>
        <Button leftIcon={
            <ChakraIcon
              as={HiPlay}
              boxSize="24px"
            />
          } variant="outline">With icon</Button>
        <Button leftIcon={
            <ChakraIcon
              as={HiGlobeAlt}
              boxSize="24px"
            />
          } variant="outline">With icon and counter (3)</Button>
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
        <Button rightIcon={
            <ChakraIcon
              as={ChevronDownIcon}
              boxSize="24px"
            />
          } variant="ghost">With icon</Button>
      </>
    </HStack>
  </ThemeProvider>
);

export const Gradient = () => (
  <ThemeProvider>
    <HStack p={12}>
      <>
        <Button variant="gradient">Gradient button</Button>
      </>
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
