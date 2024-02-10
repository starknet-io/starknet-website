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
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { Button } from "../../Button";
import { NavLayout } from "./NavLayout";
import { usePageContext } from "src/renderer/PageContextProvider";
import { SEOTexts } from "@starknet-io/cms-data/src/seo";

type Props = {
  desktopNavItems?: React.ReactNode;
  mobileNavItems?: React.ReactNode;
  languageSwitcher?: React.ReactNode;
  search?: React.ReactNode;
  seo: SEOTexts['language'];
};

declare global {
  interface Window {
    gtag: any;
  }
}

export const NavBar = ({
  desktopNavItems,
  mobileNavItems,
  languageSwitcher,
  search,
  seo
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const { urlPathname: pathname } = usePageContext();

  React.useEffect(() => {
    onClose();
  }, [onClose, pathname]);

  const toggleTheme = () => {
    toggleColorMode();
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "theme_change", {
        'event_category': "engagement",
        'value': colorMode
      });
    }
  }

  return (
    <Box as="nav" bg="navbar-bg" boxShadow={useColorModeValue("xs", "sm-dark")}>
      <NavLayout
        onClickMenu={onOpen}
        isMenuOpen={isOpen}
        items={desktopNavItems}
        languageSwitcher={languageSwitcher}
        searchArea={search}
      />
      <Box display={{ base: "block", lg: "none" }}>
        <Drawer
          placement="left"
          initialFocusRef={menuButtonRef}
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          variant="primary"
          /* set trapFocus to false to make search inside drawer interactive */
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader padding="0">
              <NavLayout
                searchArea={search}
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
                onClick={toggleTheme}
                size="lg"
              >
                {colorMode === "light" ? "Dark" : "Light"} mode
              </Button>
            </HStack>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
