import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  Icon,
  HStack,
  Button,
  VStack,
  Spacer,
  Img,
} from "@chakra-ui/react";

import * as React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

import { PopoverIcon } from "./PopoverIcon";

type Props = {
  title?: string;
  children?: React.ReactNode;
  selectedLocale: string;
  description?: string;
};

export const LanguageSwitcherDropdown = ({
  description,
  children,
  selectedLocale,
}: Props) => (
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
          <Button
            size="sm"
            leftIcon={<Icon as={HiOutlineGlobeAlt} fontSize="xl" />}
            variant="link"
            rightIcon={<PopoverIcon isOpen={isOpen} />}
          >
            {selectedLocale}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="navbar-dropdown-bg"
          border={0}
          p="8"
          width={{ base: "sm", md: "2xl" }}
        >
          <HStack spacing={12} alignItems="start">
            <VStack spacing={2} alignItems="start">
              <Text fontWeight="medium">Languages</Text>
              {children}
              <Spacer height={3} />
              <Button variant="primary">See all languages</Button>
            </VStack>

            <Stack spacing="1" pb={4}>
              <Text fontWeight="medium">Language Center</Text>
              <Img
                height={122}
                py={2}
                borderRadius="md"
                src="https://www.solidbackgrounds.com/images/1024x768/1024x768-trolley-grey-solid-color-background.jpg"
              />
              <Text fontSize="sm" color="muted">
                {description}
              </Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </>
    )}
  </Popover>
);
