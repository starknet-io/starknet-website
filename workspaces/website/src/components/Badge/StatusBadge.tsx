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
      color="content.accent"
      fontSize="14px"
      borderRadius="base"
      paddingY="xs"
      paddingX="sm"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="border.card"
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
