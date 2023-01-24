import { Tag as ChakraTag, TagProps } from "src/libs/chakra-ui";

type props = {
  children: React.ReactNode;
} & TagProps;

export const Tag = ({ children, ...rest }: props) => {
  return <ChakraTag {...rest}>{children}</ChakraTag>;
};
