import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineHome } from "react-icons/hi2";

type BreadcrumbsProps = {
  items: Array<{ link: string; label: string }>;
  locale: string;
};

export const Breadcrumbs = ({ items, locale }: BreadcrumbsProps) => {
  const middleItems = items.slice(0, items.length - 1);
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
          <Box px="xs" py="lg">
            Home
          </Box>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {middleItems.map((item) => (
        <BreadcrumbItem>
          <BreadcrumbLink href={item.link} noOfLines={1} px="xs" py="lg">
            {item.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink px="xs" py="lg" color="content.default.selected">
          {lastItem.label}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
