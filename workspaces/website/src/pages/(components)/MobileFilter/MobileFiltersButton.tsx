import { Button } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";

type Props = {
  filtersCount: number;
  onClick: () => void;
  style?: CSSProperties;
};
export default function MobileFiltersButton({
  filtersCount,
  onClick,
  style,
}: Props) {
  return (
    <Button
      style={style}
      variant={filtersCount > 0 ? "solid" : "outline"}
      leftIcon={<HiAdjustmentsVertical size={24} />}
      w="100%"
      display={{ base: "flex", lg: "none" }}
      lineHeight={1}
      alignItems="center"
      onClick={onClick}
    >
      Filters {filtersCount > 0 && `(${filtersCount})`}
    </Button>
  );
}
