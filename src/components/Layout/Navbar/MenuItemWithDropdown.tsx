import {
  Box,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

import { PopoverIcon } from "./PopoverIcon";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const MenuItemWithDropdown = ({ children, label }: Props) => (
  <Popover
    trigger="hover"
    openDelay={300}
    placement="bottom"
    defaultIsOpen={false}
    gutter={12}
    offset={[0, 30]}
  >
    {({ isOpen }) => (
      <>
        <PopoverTrigger>
          <Button
            size="sm"
            variant="link"
            rightIcon={<PopoverIcon isOpen={isOpen} />}
          >
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="navbar-dropdown-bg"
          border={0}
          px="56px"
          py="48px"
          maxH="493px"
          width="auto"

          // maxW={{ base: "sm", md: "2xl" }}
        >
          {children}
        </PopoverContent>
      </>
    )}
  </Popover>
);
