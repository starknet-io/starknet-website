import { Badge as ChakraBadge, BadgeProps } from "src/libs/chakra-ui";

export const Badge = (props: BadgeProps) => {
  return <ChakraBadge {...props}>{props.children}</ChakraBadge>;
};

Badge.displayName = 'Badge';