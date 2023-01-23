import { Box } from "src/libs/chakra-ui";

type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <Box as="main" role="main" width="full">
      {children}
    </Box>
  );
};
