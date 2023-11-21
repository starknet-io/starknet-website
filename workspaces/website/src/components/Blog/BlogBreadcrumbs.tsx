/**
 * Module dependencies
 */

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  FlexProps
} from "@chakra-ui/react";

import { IoHomeOutline } from "react-icons/io5";

/**
 * `Props` type. 
 */

type Props = FlexProps & {
  locale: string;
  title: string;
}

/**
 * Export `BlogBreadcrumbs` component.
 */

export const BlogBreadcrumbs = ({ locale, title, ...rest }: Props) => (
  <Flex 
    columnGap={'8px'}
    {...rest}
  >
    <IoHomeOutline/>
    
    <Breadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink
          fontSize={'sm'}
          fontWeight={500}
          href={`/${locale}`}
        >
          {'Home'}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          fontSize={'sm'}
          fontWeight={500}
          href={`/${locale}/posts`}
        >
          {'Content'}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          fontSize={'sm'}
          fontWeight={500}
          color={'heading-navy-fg'}
        >
          {title}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
);
