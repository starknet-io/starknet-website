import { Text as ChakraText, TextProps } from "src/libs/chakra-ui";

type Props = {
  variant?: "baseRegular" | "baseSemibold" | "baseBold" | "baseExtraBold";
} & TextProps;

export const Text = ({ variant, children, ...rest }: Props) => {
  switch (variant) {
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
