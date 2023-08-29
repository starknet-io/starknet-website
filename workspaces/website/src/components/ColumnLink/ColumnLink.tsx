import {
  ButtonProps,
  Icon,
  Link,
  LinkProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { HiPlay } from "react-icons/hi2";

type Props = (ButtonProps & LinkProps) & {
  active?: boolean;
};

export const ColumnLink = ({ active, ...props }: Props) => {
  return (
    <Button
      {...props}
      variant={active ? "solid" : "outline"}
      as={Link}
      leftIcon={<Icon as={HiPlay} boxSize="24px" />}
      height="36px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="8px"
      border="0"
      minW="133px"
      borderRadius="18px"
      fontSize="14px"
      fontWeight="semibold"
      justifyContent="flex-start"
    >
      {props.children}
    </Button>
  );
};

type ColumnLinkDescriptionProps = {
  active?: boolean;
} & TextProps;

export const ColumnLinkDescription = ({
  active,
  ...props
}: ColumnLinkDescriptionProps) => {
  return (
    <Text
      {...props}
      height="36px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      px="8px"
      border="0"
      minW="133px"
      borderRadius="18px"
      fontSize="14px"
      fontWeight="semibold"
      justifyContent="flex-start"
      bg="columnlink-bg"
      color={active ? "columnlink-active-fg" : "columnlink-fg"}
      display="flex"
      alignItems="center"
    >
      {props.children}
    </Text>
  );
};
