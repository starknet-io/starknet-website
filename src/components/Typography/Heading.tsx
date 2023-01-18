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
        <ChakraHeading as="h1" fontWeight="extrabold" fontSize="5rem" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h2":
      return (
        <ChakraHeading as="h2" fontWeight="extrabold" fontSize="3rem" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h3":
      return (
        <ChakraHeading
          as="h3"
          py={4}
          fontWeight="bold"
          fontSize="1.5rem"
          {...rest}
        >
          {children}
        </ChakraHeading>
      );
    case "h4":
      return (
        <ChakraHeading
          as="h4"
          py={4}
          fontWeight="bold"
          fontSize="1.125rem"
          {...rest}
        >
          {children}
        </ChakraHeading>
      );
    case "h5":
      return (
        <ChakraHeading
          as="h5"
          py={4}
          fontWeight="bold"
          fontSize="1rem"
          {...rest}
        >
          {children}
        </ChakraHeading>
      );
    case "h6":
      return (
        <ChakraHeading as="h6" fontSize="0.875rem" {...rest}>
          {children}
        </ChakraHeading>
      );
    default:
      return (
        <ChakraHeading as="h2" fontSize="1.5rem" {...rest}>
          {children}
        </ChakraHeading>
      );
  }
};
