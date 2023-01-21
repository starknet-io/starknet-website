import { Text as ChakraText, TextProps } from "src/libs/chakra-ui";

type Props = {
  variant?:
    | "cardBody"
    | "baseRegular"
    | "baseSemibold"
    | "baseBold"
    | "baseExtraBold";
} & TextProps;

export const Text = ({ variant, children, ...rest }: Props) => {
  switch (variant) {
    case "cardBody":
      return (
        <ChakraText
          fontWeight="normal"
          fontSize="0.875rem"
          lineHeight="1.5rem"
          {...rest}
        >
          {children}
        </ChakraText>
      );
    case "baseRegular":
      return (
        <ChakraText fontWeight="normal" fontSize="md" {...rest}>
          {children}
        </ChakraText>
      );
    case "baseSemibold":
      return (
        <ChakraText fontWeight="semibold" fontSize="md" {...rest}>
          {children}
        </ChakraText>
      );
    case "baseBold":
      return (
        <ChakraText fontWeight="bold" fontSize="md" {...rest}>
          {children}
        </ChakraText>
      );
    case "baseExtraBold":
      return (
        <ChakraText fontWeight="extrabold" fontSize="md" {...rest}>
          {children}
        </ChakraText>
      );
    default:
      return (
        <ChakraText fontSize="md" {...rest}>
          {children}
        </ChakraText>
      );
  }
};
