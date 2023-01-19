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
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

import { HiGlobeAlt, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
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
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Box
      as="nav"
      bg="navbar-bg"
      //  boxShadow={useColorModeValue("sm", "sm-dark")}
    >
      <NavLayout
        onClickMenu={onOpen}
        isMenuOpen={isOpen}
        items={desktopNavItems}
        languageSwitcher={languageSwitcher}
      />
      {isMobile && (
        <Drawer
          placement="left"
          initialFocusRef={menuButtonRef}
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          variant="primary"
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
            <DrawerBody>{mobileNavItems}</DrawerBody>
            <HStack
              mt="6"
              height="189px"
              borderTopColor="nav-footer-br"
              borderTopWidth="1px"
            >
              <Button
                variant="ghost"
                leftIcon={
                  colorMode === "dark" ? (
                    <Icon as={HiOutlineSun} fontSize="xl" />
                  ) : (
                    <Icon as={HiOutlineMoon} fontSize="xl" />
                  )
                }
                flex="1"
                height="100%"
                onClick={toggleColorMode}
                size="lg"
              >
                {colorMode === "light" ? "Dark" : "Light"} mode
              </Button>
              <Button
                flex="1"
                height="100%"
                fontWeight="semibold"
                size="lg"
                variant="ghost"
                leftIcon={<Icon as={HiGlobeAlt} fontSize="xl" />}
              >
                Languages
              </Button>
            </HStack>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};
