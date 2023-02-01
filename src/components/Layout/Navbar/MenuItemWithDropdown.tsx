import {
  Box,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
} from "src/libs/chakra-ui";
import * as React from "react";

import { PopoverIcon } from "./PopoverIcon";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const MenuItemWithDropdown = ({ children, label }: Props) => (
  <Popover
    trigger="hover"
    openDelay={250}
    placement="bottom"
    defaultIsOpen={false}
    gutter={12}
    offset={[0, 20]}
  >
    {({ isOpen }) => (
      <>
        <PopoverTrigger>
          <Button
            color={isOpen ? "button-nav-active-fg" : "button-nav-fg"}
            bg={isOpen ? "button-nav-hover-bg" : "button-nav-bg"}
            size="sm"
            pl="16px "
            pr="8px"
            height="40px"
            variant="link"
            borderRadius="4px"
            rightIcon={
              <PopoverIcon
                isOpen={isOpen}
                color={
                  isOpen ? "button-nav-active-icon-fg" : "button-nav-icon-fg"
                }
              />
            }
          >
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="navbar-dropdown-bg"
          border={0}
          px="32px"
          py="32px"
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
