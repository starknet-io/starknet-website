import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HiOutlineHome } from "react-icons/hi2";

type BreadcrumbItem = { link: string; label: string };
type BreadcrumbsProps = {
  items: Array<BreadcrumbItem>;
  locale: string;
  collapseOnMobile?: boolean;
};

const getMiddleItems = (
  items: Array<BreadcrumbItem>,
  locale: string,
  collapse?: boolean
) => {
  let middleItems: BreadcrumbItem[] = [];
  if (collapse) {
    if (items.length > 2) {
      middleItems = [{ link: items[items.length - 2].link, label: "..." }];
    } else {
      middleItems = [];
    }
  } else {
    middleItems = items.slice(0, items.length - 1);
  }

  return middleItems;
};

export const Breadcrumbs = ({
  items,
  locale,
  collapseOnMobile = false,
}: BreadcrumbsProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const middleItems = getMiddleItems(
    items,
    locale,
    isMobile && collapseOnMobile
  );

  const lastItem = items[items.length - 1];

  return (
    <Breadcrumb
      separator={
        <Box px="base" py="lg">
          /
        </Box>
      }
      color="content.default.value"
      fontSize="14px"
      fontWeight={500}
      spacing={0}
      sx={{
        "a:hover": {
          color: "content.default.hover",
        },
        "a:disabled": {
          color: "content.default.disabled",
        },
      }}
      paddingBlock={{
        base: "sm",
        lg: "xl",
      }}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          href={`/${locale}`}
          fontSize="sm"
          noOfLines={1}
          display="flex"
          alignItems="center"
          gap="xs"
        >
          <Icon as={HiOutlineHome} boxSize="20px" />
          <Box p="xs">Home</Box>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {middleItems?.map((item) => (
        <BreadcrumbItem>
          <BreadcrumbLink href={item.link} noOfLines={1} p="xs">
            {item.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink p="xs" color="content.default.selected">
          {lastItem.label}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
