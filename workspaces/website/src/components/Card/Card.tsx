import { Box, BoxProps } from "@chakra-ui/react";

type Props = {
  href?: string;
  variant?: "default" | "list";
} & BoxProps;

export const Card = (props: Props) => (
  <Box
    maxW="5xl"
    w={{ base: "full" }}
    mx="auto"
    bg="card-bg"
    rounded={props.variant === "default" ? "8px" : "16px"}
    padding={props.variant === "default" ? "32px 24px" : "32px 24px"}
    borderWidth="1px"
    borderColor="card-br"
    // shadow={{ md: "base" }}
    px={{ base: "6", md: "8" }}
    {...props}
  />
);
