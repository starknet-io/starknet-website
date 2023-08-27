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
      color={
        isSelected
          ? "content.on-surface-inverted.value"
          : "content.default.value"
      }
      bg={isSelected ? "surface.accent.value" : "surface.transparent.value"}
      fontSize="14px"
      fontWeight={500}
      lineHeight="24px"
      display="inline-flex"
      gap="xs"
      _hover={{
        bg: isSelected ? "surface.accent.value" : "surface.transparent.hover",
        color: isSelected
          ? "content.on-surface-inverted.value"
          : "content.default.hover",
      }}
      _disabled={{
        color: "content.default.disabled",
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
