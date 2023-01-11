import {
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
  title: string;
  hubTitle: string;
  hubLink: string;
  children: React.ReactNode;
};

export const MenuItemWithDropdown = ({ children, title, hubTitle }: Props) => (
  <Popover
    trigger="hover"
    openDelay={300}
    placement="bottom"
    defaultIsOpen={false}
    gutter={12}
  >
    {({ isOpen }) => (
      <>
        <PopoverTrigger>
          <Button variant="link" rightIcon={<PopoverIcon isOpen={isOpen} />}>
            {title}
          </Button>
        </PopoverTrigger>
        <PopoverContent p="5" width={{ base: "sm", md: "2xl" }}>
          <Stack spacing="1" pb={4}>
            <Text fontWeight="medium">{hubTitle}</Text>
            <Text fontSize="sm" color="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="6" rowGap="2">
            {children}
          </SimpleGrid>
        </PopoverContent>
      </>
    )}
  </Popover>
);
