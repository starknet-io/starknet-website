import { Badge, BadgeProps, Box } from "@chakra-ui/react";

type StatusBadgeProps = {
  status: string;
  variant: "primary" | "secondary";
} & BadgeProps;

export const StatusBadge = ({ status, variant, ...rest }: StatusBadgeProps) => {
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
      {status}
      <Box
        display="inline-block"
        bg={variant === "primary" ? "content.success" : "content.danger"}
        borderRadius="50%"
        width="12px"
        height="12px"
      />
    </Badge>
  );
};
