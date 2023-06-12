import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Icon,
  HStack,
  VStack,
  Spacer,
  Box,
  StackDivider,
} from "src/libs/chakra-ui";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

import * as React from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

import { PopoverIcon } from "./PopoverIcon";

type Props = {
  title: string;
  description: string;
  subtitle: string;
  callToAction: string;
  children?: React.ReactNode;
  selectedLocale: string;
};

export const LanguageSwitcherDropdown = ({
  title = "Languages",
  description,
  subtitle,
  callToAction,
  children,
  selectedLocale,
}: Props) => (
  <Popover
    trigger="hover"
    openDelay={300}
    placement="bottom"
    defaultIsOpen={false}
    gutter={12}
    offset={[0, 24]}
  >
    {({ isOpen }) => (
      <>
        <PopoverTrigger>
          <Button
            size="sm"
            leftIcon={<Icon as={HiOutlineGlobeAlt} fontSize="xl" />}
            variant="icon"
            rightIcon={<PopoverIcon isOpen={isOpen} />}
            textTransform="uppercase"
          >
            {selectedLocale}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg="navbar-dropdown-bg"
          border={0}
          py="48px"
          px="32px"
          right="32px"
          borderRadius="16px"
          width={{ base: "sm", md: "3xl" }}
        >
          <HStack
            spacing={8}
            alignItems="start"
            divider={
              <StackDivider
                borderColor="divider-bg"
                top="0"
                position="relative"
                height="435px"
              />
            }
          >
            <VStack spacing={2} alignItems="start">
              <Heading
                pl={10}
                color="heading-navy-fg"
                variant="h6"
                mb={3}
                textTransform="uppercase"
              >
                {title}
              </Heading>
              {children}
              <Spacer height={3} />
              <Box pl={10}>
                {/* <Button variant="outline">See all languages</Button> */}
              </Box>
            </VStack>

            <Stack spacing="1" pb={4}>
              <Heading
                color="heading-navy-fg"
                variant="h6"
                textTransform="uppercase"
                mb={5}
              >
                {subtitle}
              </Heading>

              <Text variant="cardBody">{description}</Text>
              <Box height="32px" />
              <Button
                as="a"
                variant="outline"
                href="/en/community/language-support"
              >
                {callToAction}
              </Button>
            </Stack>
          </HStack>
        </PopoverContent>
      </>
    )}
  </Popover>
);
