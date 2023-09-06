import { Badge, BadgeProps, Box } from "@chakra-ui/react";

type StatusBadgeProps = {
  variant: "success" | "danger";
} & BadgeProps;

export const StatusBadge = ({
  children,
  variant,
  ...rest
}: StatusBadgeProps) => {
  return (
    <Badge
      display="flex"
      alignItems="center"
      color="content.accent.value"
      fontSize="14px"
      lineHeight="24px"
      borderRadius="base"
      paddingX="sm"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="border.card.value"
      bg="surface.card"
      gap="xs"
      fontWeight={500}
      {...rest}
    >
      {children}
      <Box
        display="inline-block"
        bg={variant === "success" ? "content.success" : "content.danger"}
        borderRadius="50%"
        width="12px"
        height="12px"
      />
    </Badge>
  );
};
