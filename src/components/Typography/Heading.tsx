"use client";
import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HeadingProps;

// rome-ignore lint/correctness/noUnusedVariables: <explanation>
export const Heading = ({ variant, children, as, ...rest }: Props) => {
  switch (variant) {
    case "h1":
      return (
        <ChakraHeading as="h1" fontWeight="extrabold" size="lg" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h2":
      return (
        <ChakraHeading as="h2" fontWeight="extrabold" size="md" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h3":
      return (
        <ChakraHeading as="h3" py={4} fontWeight="bold" size="xs" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h4":
      return (
        <ChakraHeading as="h4" py={4} fontWeight="bold" size="xs" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h5":
      return (
        <ChakraHeading as="h5" py={4} fontWeight="bold" size="xxs" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h6":
      return (
        <ChakraHeading as="h6" py={4} fontWeight="normal" size="xxs" {...rest}>
          {children}
        </ChakraHeading>
      );
    default:
      return (
        <ChakraHeading as="h2" fontSize="bold" {...rest}>
          {children}
        </ChakraHeading>
      );
  }
};
