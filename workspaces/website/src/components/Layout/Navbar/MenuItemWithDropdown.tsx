import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
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
    openDelay={250}
    placement="bottom"
    defaultIsOpen={false}
    gutter={12}
    offset={[0, 12]}
  >
    {({ isOpen }) => (
      <>
        <PopoverTrigger>
          <Button
            color={isOpen ? "button-nav-active-fg" : "button-nav-fg"}
            bg={isOpen ? "button-nav-hover-bg" : "button-nav-bg"}
            size="sm"
            pl="16px"
            pr={{ xl: "8px" }}
            height="40px"
            variant="link"
            borderRadius="4px"
            fontWeight="400"
            rightIcon={
              <PopoverIcon
                isOpen={isOpen}
                color={
                  isOpen ? "button-nav-active-icon-fg" : "button-nav-icon-fg"
                }
                sx={{marginLeft: "-2px"}}
              />
            }
          >
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="navbar-dropdown-bg"
          border={0}
          px="24px"
          pt="24px"
          width="auto"

          // maxW={{ base: "sm", md: "2xl" }}
        >
          {children}
        </PopoverContent>
      </>
    )}
  </Popover>
);
