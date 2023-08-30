import { Button, ButtonProps } from "@chakra-ui/react";
import { HiAdjustmentsVertical } from "react-icons/hi2";

type Props = {
  filtersCount: number;
  onClick: () => void;
} & ButtonProps;
export default function MobileFiltersButton({
  filtersCount,
  onClick,
  ...rest
}: Props) {
  return (
    <Button
      variant={filtersCount > 0 ? "solid" : "outline"}
      leftIcon={<HiAdjustmentsVertical size={24} />}
      w="100%"
      display={{ base: "flex", lg: "none" }}
      lineHeight={1}
      alignItems="center"
      onClick={onClick}
      {...rest}
    >
      Filters {filtersCount > 0 && `(${filtersCount})`}
    </Button>
  );
}
