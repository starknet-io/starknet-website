import { CustomHeadingProps, Heading } from "@ui/Typography/Heading";

export const ChipFilterLabel = ({
  children,
  ...rest
}: Omit<CustomHeadingProps, "variant"> & {
  variant?: CustomHeadingProps["variant"];
}) => {
  return (
    <Heading
      variant="h3"
      color="content.accent.value"
      mb="sm"
      pt="xl"
      {...rest}
    >
      {children}
    </Heading>
  );
};
