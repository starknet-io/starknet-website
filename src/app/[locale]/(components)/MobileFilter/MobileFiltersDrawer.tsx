import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  contentStyle?: CSSProperties;
};
export default function MobileFiltersDrawer({
  children,
  isOpen,
  onClose,
  contentStyle,
}: Props) {
  return (
    <Drawer
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      variant="primary"
      /* set trapFocus to false to make search inside drawer interactive */
      trapFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody pt="64px" style={contentStyle}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
