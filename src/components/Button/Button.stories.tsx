import React from "react";
import { HStack, Icon } from "src/libs/chakra-ui";
import { Meta } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "src/app/providers/ThemeProvider";
import {
  HiPlay,
  HiOutlineMoon,
  HiOutlineSun,
  HiGlobeAlt
} from "react-icons/hi2";
import { ChevronDownIcon } from "src/libs/heroicons/20/solid";

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
            <Icon
              as={HiPlay}
              boxSize="24px"
            />
          } variant="solid">With icon</Button>
        <Button leftIcon={
            <Icon
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
            <Icon
              as={HiPlay}
              boxSize="24px"
            />
          } variant="outline">With icon</Button>
        <Button leftIcon={
            <Icon
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
            <Icon
              as={ChevronDownIcon}
              boxSize="24px"
            />
          } variant="ghost">With icon</Button>
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
          <Icon as={HiOutlineMoon} fontSize="xl" />
        </Button>
        <Button variant="switch">
          <Icon as={HiOutlineSun} fontSize="xl" />
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
