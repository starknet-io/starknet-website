import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useColorMode,
} from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";
import { NavLayout } from "./NavLayout";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  contentStyle?: CSSProperties;
  search?: React.ReactNode;
};
export default function MobileLanguagesDrawer({
  children,
  isOpen,
  onClose,
  contentStyle,
  search,
}: Props) {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { toggleColorMode } = useColorMode();
  return (
    <Drawer
      placement="right"
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      variant="primary"
      /* set trapFocus to false to make search inside drawer interactive */
      trapFocus={false}
    >
      <DrawerContent bg="nav-dialog-bg" overflow="scroll" maxH="100vh">
        <DrawerHeader padding="0" borderBottom="none">
          <NavLayout
            searchArea={search}
            onClickMenu={onClose}
            isMenuOpen={isOpen}
            menuButtonRef={menuButtonRef}
            toggleGlobalColorMode={toggleColorMode}
          />
        </DrawerHeader>
        <DrawerBody
          pb="5rem"
          style={contentStyle}
          borderTopColor="border.divider"
          borderTopWidth="1px"
        >
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
