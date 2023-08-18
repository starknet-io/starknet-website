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
            color="fg-default-light"
            _hover={{ color: "fg-default-hover" , bg: 'transparent'}}
            size="sm"
            height="40px"
            p="8px 12px"
            variant="link"
            ml="0px !important"
            borderRadius="4px"
            fontWeight="400"
            rightIcon={
              <PopoverIcon
                isOpen={isOpen}
                sx={{ marginLeft: "-2px" }}
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
        >
          {children}
        </PopoverContent>
      </>
    )}
  </Popover>
);
