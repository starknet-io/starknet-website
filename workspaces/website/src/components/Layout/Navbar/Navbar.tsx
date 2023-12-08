import { useCallback, useState, useEffect } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  HStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { ColumnLink, ColumnLinkDescription } from "@ui/ColumnLink/ColumnLink";
import { i18nConfig } from "@starknet-io/cms-data/src/i18n/config";
import * as React from "react";
import { HiGlobeAlt, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { Button } from "../../Button";
import { NavLayout } from "./NavLayout";
import MobileLanguagesDrawer from "./MobileLanguagesDrawer";
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
  const [isLanguagesDrawerOpen, setLanguagesDrawerOpen] = useState(false);
  const onLanguagesDrawerClose = useCallback(() => {
    setLanguagesDrawerOpen(false);
    onOpen();
  }, []);
  const onLanguagesDrawerOpen = useCallback(() => setLanguagesDrawerOpen(true), []);
  const { locale, urlPathname: pathname } = usePageContext();
  const localeConfig = i18nConfig.find((c) => c.code === locale)!;
  const topLanguages = ["en", "es", "fr", "de", "pt", "ar", "ja", "ko"];

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

  const openLanguageDrawer = () => {
    onLanguagesDrawerOpen();
  }

  useEffect(()  => {
    isLanguagesDrawerOpen && onClose();
  }, [isLanguagesDrawerOpen])

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
              <Button
                flex="1"
                height="100%"
                fontWeight="semibold"
                size="lg"
                variant="ghost"
                leftIcon={<Icon as={HiGlobeAlt} fontSize="xl" />}
                onClick={openLanguageDrawer}
              >
                Languages
              </Button>
            </HStack>
          </DrawerContent>
        </Drawer>
        <MobileLanguagesDrawer search={search} isOpen={isLanguagesDrawerOpen} onClose={onLanguagesDrawerClose}>
          <Heading
            color="heading-navy-fg"
            variant="h6"
            mb={5}
            mt={5}
            textTransform="uppercase"
          >Languages</Heading>
          {i18nConfig
            .filter((c) => topLanguages.includes(c.code))
            .map((c, i) => {
              return (
                <HStack key={i}>
                  <ColumnLink
                    active={localeConfig.code === c.code}
                    href={`/${c.code}${pathname.replace(/^\/\w{2}($|\/)/, "/")}`}
                  >
                    {c.name}
                  </ColumnLink>
                  <ColumnLinkDescription active={localeConfig.code === c.code}>
                    {c.localName}
                  </ColumnLinkDescription>
                </HStack>
              );
            })}
            <Stack spacing="1" pb={4} pt={10} mt={8} borderTopWidth="1px" borderTopStyle="solid" borderColor="btn-outline-border">
              <Heading
                color="heading-navy-fg"
                variant="h6"
                textTransform="uppercase"
                mb={5}
              >
                {seo.subtitle}
              </Heading>

              <Text variant="cardBody">{seo.description}</Text>
              <Box height="32px" />
              <Button
                as="a"
                variant="outline"
                href="/en/community/language-support"
              >
                {seo.callToAction}
              </Button>
            </Stack>
        </MobileLanguagesDrawer>
      </Box>
    </Box>
  );
};
