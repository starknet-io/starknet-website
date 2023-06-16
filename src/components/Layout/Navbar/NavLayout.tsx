import {
  HStack,
  Icon,
  ButtonGroup,
  Container,
  useColorMode,
  Box,
} from "src/libs/chakra-ui";
import { IconButton } from "@ui/IconButton";
import { StarknetLogo } from "@ui/Logo/StarknetLogo";
import Link from "next/link";
import {
  HiBars3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineXMark,
} from "react-icons/hi2";
import { useLocale } from "src/app/[locale]/(components)/ClientLocaleProvider";

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
  const locale = useLocale();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container py={{ base: "4", lg: "17px" }} px={{ base: "16px", md: "32px" }} maxW="1344px">
      <HStack spacing="4" justify="space-between">
        <HStack>
          <Link href={`/${locale}/`}>
            <StarknetLogo />
          </Link>
          <Box display={{ base: "none", lg: "block" }}>
              <ButtonGroup variant="link" spacing="18px" sx={{ pl: "60px" }}>
                {props.items}
              </ButtonGroup>
          </Box>
        </HStack>
        <HStack spacing={6}>
          {props.searchArea}
          <Box display={{ base: "none", lg: "block" }}>
              <IconButton
                icon={
                  colorMode === "light" ? (
                    <Icon as={HiOutlineMoon} fontSize="xl" />
                  ) : (
                    <Icon as={HiOutlineSun} fontSize="xl" />
                  )
                }
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
                marginInlineStart="10px !important"
              />
            </Box>

              <Box
                w="1px"
                bg="nav-footer-br"
                h="30px"
                position="relative"
                marginInlineStart="10px !important"
                display={{ base: "none", lg: "block" }}
              />
              <Box display={{ base: "none", lg: "block" }}>
               {props.languageSwitcher}
              </Box>

            <Box display={{ base: "block", lg: "none" }}><IconButton
              ref={menuButtonRef}
              icon={<Icon as={MenuIcon} fontSize="2xl" />}
              aria-label="Open Menu"
              onClick={onClickMenu}
              marginInlineStart="10px !important"
            /></Box>
        </HStack>
      </HStack>
    </Container>
  );
};
