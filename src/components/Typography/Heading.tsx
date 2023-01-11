"use client";
import { Heading as ChakraHeading } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ variant, children, as, ...rest }: Props) => {
  switch (variant) {
    case "h1":
      return (
        <ChakraHeading as="h1" fontWeight="extrabold" size="2xl" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h2":
      return (
        <ChakraHeading as="h2" fontWeight="extrabold" size="3xl" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h3":
      return (
        <ChakraHeading as="h3" fontWeight="bold" size="3xl" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h4":
      return (
        <ChakraHeading as="h4" fontWeight="bold" size="xl" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h5":
      return (
        <ChakraHeading as="h5" fontWeight="bold" size="lg" {...rest}>
          {children}
        </ChakraHeading>
      );
    case "h6":
      return (
        <ChakraHeading as="h6" fontWeight="bold" size="md" {...rest}>
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
