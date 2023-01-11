import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Flex,
  HStack,
  Button,
  VStack,
  Spacer,
  Img,
} from "@chakra-ui/react";

import * as React from "react";
import { FiGlobe } from "react-icons/fi";

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
            leftIcon={<Icon as={FiGlobe} fontSize="xl" />}
            variant="link"
            rightIcon={<PopoverIcon isOpen={isOpen} />}
          >
            {selectedLocale}
          </Button>
        </PopoverTrigger>
        <PopoverContent p="8" width={{ base: "sm", md: "2xl" }}>
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
