import {
  HStack,
  Icon,
  IconButton,
  StackDivider,
  useBreakpointValue,
  ButtonGroup,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import { StarknetLogo } from "@ui/Logo/StarknetLogo";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { SearchInput } from "./SearchInput";

type NavLayoutProps = {
  items?: React.ReactNode;
  onClickMenu?: VoidFunction;
  onToggleMode?: VoidFunction;
  isMenuOpen: boolean;
  menuButtonRef?: React.RefObject<HTMLButtonElement>;
  languageSwitcher?: React.ReactElement;
};

export const NavLayout = (props: NavLayoutProps) => {
  const { onClickMenu, isMenuOpen, menuButtonRef } = props;
  const MenuIcon = isMenuOpen ? MdClose : FiMenu;
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container py={{ base: "4", lg: "5" }}>
      <HStack spacing="4" justify="space-between">
        <StarknetLogo />
        {isDesktop && (
          <>
            <ButtonGroup variant="link" spacing="8">
              {props.items}
            </ButtonGroup>
          </>
        )}

        <HStack divider={<StackDivider height="6" alignSelf="unset" />}>
          <SearchInput />
          {isDesktop && (
            <>
              <IconButton
                variant="ghost"
                icon={
                  colorMode === "light" ? (
                    <Icon as={FiMoon} fontSize="xl" />
                  ) : (
                    <Icon as={FiSun} fontSize="xl" />
                  )
                }
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
              />
              {props.languageSwitcher}
            </>
          )}

          {!isDesktop && (
            <IconButton
              ref={menuButtonRef}
              variant="ghost"
              icon={<Icon as={MenuIcon} fontSize="2xl" />}
              aria-label="Open Menu"
              onClick={onClickMenu}
            />
          )}
        </HStack>
      </HStack>
    </Container>
  );
};
