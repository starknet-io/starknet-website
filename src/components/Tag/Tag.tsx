import { Tag as ChakraTag, TagProps } from '@chakra-ui/react';

type props = {
  children: React.ReactNode;
} & TagProps;

export const Tag = ({ children, ...rest }: props) => {
  return <ChakraTag {...rest}>{children}</ChakraTag>;
};
