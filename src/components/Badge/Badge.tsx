import { Badge as ChakraBadge, BadgeProps } from "@chakra-ui/react";

export const Badge = (props: BadgeProps) => {
  return <ChakraBadge {...props}>{props.children}</ChakraBadge>;
};
