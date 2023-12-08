import {
  HStack,
  Icon,
  ButtonGroup,
  Container,
  useColorMode,
  Box,
} from "@chakra-ui/react";

import { IconButton } from "@ui/IconButton";
import { StarknetLogo } from "@ui/Logo/StarknetLogo";
import {
  HiBars3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineXMark,
} from "react-icons/hi2";
import { usePageContext } from "src/renderer/PageContextProvider";

type NavLayoutProps = {
  items?: React.ReactNode;
  onClickMenu?: VoidFunction;
  onToggleMode?: VoidFunction;
  isMenuOpen: boolean;
  menuButtonRef?: React.RefObject<HTMLButtonElement>;
  languageSwitcher?: React.ReactNode;
  searchArea: React.ReactNode;
};

export const NavLayout = (props: NavLayoutProps) => {
  const { onClickMenu, isMenuOpen, menuButtonRef } = props;
  const MenuIcon = isMenuOpen ? HiOutlineXMark : HiBars3;
  const { locale } = usePageContext();
  const { colorMode, toggleColorMode } = useColorMode();
  const toogleTheme = () => {
    toggleColorMode();
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "theme_change", {
        'event_category': "engagement",
        'value': colorMode
      });
    }
  }
  return (
    <Container py={{ base: "4", lg: "17px" }} px={{ base: "16px", md: "32px" }} maxW="1344px">
      <HStack spacing="4" justify="space-between">
        <HStack>
          <a href={`/${locale}/`}>
            <StarknetLogo />
          </a>
          <Box display={{ base: "none", lg: "block" }}>
            <ButtonGroup variant="link" spacing={{ md: "12px", xl: "18px"}} sx={{ pl: { lg: "16px", xl: "34px" } }}>
              {props.items}
            </ButtonGroup>
          </Box>
        </HStack>
        <HStack spacing={6}>
          {props.searchArea}
          <Box display={{ base: "none", lg: "block" }} sx={{marginInlineStart: "12px !important"}}>
              <IconButton
                icon={
                  colorMode === "light" ? (
                    <Icon as={HiOutlineMoon} fontSize="xl" />
                  ) : (
                    <Icon as={HiOutlineSun} fontSize="xl" />
                  )
                }
                aria-label="Toggle color mode"
                onClick={toogleTheme}
                marginInlineStart="0 !important"
              />
            </Box>

            {!!props.languageSwitcher && (
              <>
                <Box
                  w="1px"
                  bg="nav-footer-br"
                  h="30px"
                  position="relative"
                  marginInlineStart="12px !important"
                  display={{ base: "none", lg: "block" }}
                />
                <Box display={{ base: "none", lg: "block" }} marginInlineStart="0 !important">
                  {props.languageSwitcher}
                </Box>
              </>
            )}

            <Box display={{ base: "block", lg: "none" }}><IconButton
              ref={menuButtonRef}
              icon={<Icon as={MenuIcon} fontSize="2xl" />}
              aria-label="Open Menu"
              onClick={onClickMenu}
              ml={{ xl: "12px !important" }}
            /></Box>
        </HStack>
      </HStack>
    </Container>
  );
};
