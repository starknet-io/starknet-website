import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Icon,
  HStack,
  Button,
  VStack,
  Spacer,
  Img,
  Box,
  StackDivider,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

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
  title = "Languages",
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
          borderRadius="16px"
          width={{ base: "sm", md: "3xl" }}
        >
          <HStack
            spacing={8}
            alignItems="start"
            divider={
              <StackDivider
                borderColor="divider-bg"
                top="24px"
                position="relative"
                height="450px"
              />
            }
          >
            <VStack spacing={2} alignItems="start">
              <Heading
                pl={10}
                color="heading-navy-fg"
                as="h6"
                variant="h6"
                mb={3}
                textTransform="uppercase"
              >
                {title}
              </Heading>
              {children}
              <Spacer height={3} />
              <Box pl={10}>
                <Button variant="outline">See all languages</Button>
              </Box>
            </VStack>

            <Stack spacing="1" pb={4}>
              <Heading
                color="heading-navy-fg"
                as="h6"
                variant="h6"
                textTransform="uppercase"
                mb={5}
              >
                Language Center
              </Heading>

              <Text variant="cardBody">{description}</Text>
            </Stack>
          </HStack>
        </PopoverContent>
      </>
    )}
  </Popover>
);
