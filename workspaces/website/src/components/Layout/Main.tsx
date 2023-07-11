import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <Box as="main" role="main" width="full" minW='0px'>
      {children}
    </Box>
  );
};
