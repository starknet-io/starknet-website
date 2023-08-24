import {
  HStack,
  Icon,
  ButtonGroup,
  Container,
  useColorMode,
  Box,
  Button,
} from "@chakra-ui/react";
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
        event_category: "engagement",
        value: colorMode,
      });
    }
  };
  return (
    <Container
      py={{ base: "4", lg: "17px" }}
      px={{ base: "page.leftRigt.base", md: "page.leftRight.md" }}
      maxW="1344px"
    >
      <HStack spacing="4" justify="space-between">
        <HStack>
          <a href={`/${locale}/`}>
            <StarknetLogo />
          </a>
          <Box display={{ base: "none", lg: "block" }}>
            <ButtonGroup variant="link" spacing="18px" sx={{ pl: "34px" }}>
              {props.items}
            </ButtonGroup>
          </Box>
        </HStack>
        <Box display="flex" gap="base" alignItems="center">
          {props.searchArea}
          <Box
            display={{ base: "none", lg: "block" }}
            sx={{ marginInlineStart: "12px !important" }}
          >
            <Button
              aria-label="Toggle color mode"
              onClick={toogleTheme}
              marginInlineStart="0 !important"
              variant="ghost"
              padding="sm"
              minH="44px"
              maxH="44px"
            >
              <>
                {colorMode === "light" ? (
                  <Icon as={HiOutlineMoon} fontSize="xl" h="24px" />
                ) : (
                  <Icon as={HiOutlineSun} fontSize="xl" h="24px" />
                )}
              </>
            </Button>
          </Box>

          <Box
            w="1px"
            bg="nav-footer-br"
            h="30px"
            position="relative"
            marginInlineStart="12px !important"
            display={{ base: "none", lg: "block" }}
          />
          <Box
            display={{ base: "none", lg: "block" }}
            marginInlineStart="0 !important"
          >
            {props.languageSwitcher}
          </Box>

          <Button
            display={{ base: "block", lg: "none" }}
            variant="ghost"
            ref={menuButtonRef}
            aria-label="Open Menu"
            onClick={onClickMenu}
            padding="sm"
          >
            <MenuIcon fontSize="2xl" size="24px" />
          </Button>
        </Box>
      </HStack>
    </Container>
  );
};
