import { Tag as ChakraTag, TagProps } from "src/libs/chakra-ui";

type props = {
  children: React.ReactNode;
  capitalize?: boolean;
} & TagProps;

export const Tag = ({ children, capitalize = true, ...rest }: props) => {
  return (
    <ChakraTag textTransform={capitalize ? "capitalize" : "none"} {...rest}>
      {children}
    </ChakraTag>
  );
};
