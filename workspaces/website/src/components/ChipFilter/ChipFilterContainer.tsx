import { Flex, FlexProps } from "@chakra-ui/react";

export const ChipFilterContainer = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex
      direction={{
        base: "row",
        lg: "column",
      }}
      gap="sm"
      py={{
        base: "0",
        lg: "sm",
      }}
      wrap="wrap"
      {...rest}
    >
      {children}
    </Flex>
  );
};
