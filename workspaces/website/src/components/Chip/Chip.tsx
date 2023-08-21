import { Button, ButtonProps } from "@chakra-ui/react";

type ChipProps = {
  isSelected?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & ButtonProps;

export const Chip = ({
  isSelected,
  children,
  iconLeft,
  iconRight,
  ...props
}: ChipProps) => {
  return (
    <Button
      size="sm"
      p="md"
      borderRadius="xs"
      variant="unstyled"
      color={isSelected ? "surface.on-surface-inverted" : "content.default"}
      bg={isSelected ? "surface.accent" : "surface.transparent"}
      fontSize="14px"
      fontWeight={500}
      lineHeight="24px"
      display="inline-flex"
      gap="xs"
      _hover={{
        bg: isSelected ? "surface.accent" : "surface.transparentHover",
        color: isSelected
          ? "surface.on-surface-inverted"
          : "content.defaultHover",
      }}
      _disabled={{
        color: "content.defaultDisabled",
        pointerEvents: "none",
      }}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Button>
  );
};
