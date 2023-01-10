import { Box } from "@chakra-ui/react";
import { useNavbar } from "./useNavbar";

type Props = {
  children?: React.ReactNode;
};
export const NavbarContainer = ({ children }: Props) => {
  const { rootProps } = useNavbar();
  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      {...rootProps}
    >
      {children}
    </Box>
  );
};
