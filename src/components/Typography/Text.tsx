import { Text as ChakraText, TextProps } from "src/libs/chakra-ui";

type Props = {
  variant?:
    | "cardBody"
    | "body"
    | "breadcrumbs"
    | "footerLink"
    | "textLink"
} & TextProps;

export const Text = ({ variant, fontWeight = 'normal', children, ...rest }: Props) => {
  return (
    <ChakraText
      variant={variant}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </ChakraText>
  );
};