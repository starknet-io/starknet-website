import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "../../Button";

import { NavLayout } from "./NavLayout";

type Props = {
  desktopNavItems?: React.ReactNode;
  mobileNavItems?: any;
  languageSwitcher?: React.ReactElement;
};

export const NavBar = ({
  desktopNavItems,
  mobileNavItems,
  languageSwitcher,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <NavLayout
        onClickMenu={onOpen}
        isMenuOpen={isOpen}
        items={desktopNavItems}
        languageSwitcher={languageSwitcher}
      />
      <Drawer
        placement="left"
        initialFocusRef={menuButtonRef}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader padding="0">
            <NavLayout
              onClickMenu={onClose}
              isMenuOpen={isOpen}
              menuButtonRef={menuButtonRef}
            />
          </DrawerHeader>
          <DrawerBody>
            {mobileNavItems}
            <HStack mt="6">
              <Button
                leftIcon={
                  colorMode === "dark" ? (
                    <Icon as={FiMoon} fontSize="xl" />
                  ) : (
                    <Icon as={FiSun} fontSize="xl" />
                  )
                }
                flex="1"
                onClick={toggleColorMode}
                variant="primary"
                size="lg"
              >
                {colorMode === "light" ? "Light" : "Dark"} mode
              </Button>
              <Button
                flex="1"
                colorScheme="blue"
                fontWeight="semibold"
                size="lg"
              >
                Languages
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
