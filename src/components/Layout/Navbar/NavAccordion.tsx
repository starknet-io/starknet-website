import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import React from "react";

export type NavData = Array<{
  title: string;
  pages: Array<{
    page: string;
    title: string;
    href: string;
  }>;
}>;

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = (props: NavLinkProps) => {
  const { href, children } = props;
  return (
    <ChakraLink href={href} _hover={{ textDecoration: "none" }}>
      <HStack py="3" spacing="3">
        <Text fontWeight="medium">{children}</Text>
      </HStack>
    </ChakraLink>
  );
};

// type NavAccordionProps = {
//   data: NavData;
// };

type RootProps = {
  children: React.ReactNode;
};

const Root = ({ children }: RootProps) => {
  return (
    <Accordion variant="navigation" allowMultiple as="ul" listStyleType="none">
      {children}
    </Accordion>
  );
};

type ItemProps = {
  children: React.ReactNode;
};
const Item = ({ children }: ItemProps) => {
  return <AccordionItem as="li">{children}</AccordionItem>;
};

type ButtonProps = {
  title: string;
};
const Button = ({ title }: ButtonProps) => {
  return (
    <AccordionButton py="3" px="0">
      <Box flex="1" textAlign="start" fontSize="lg" fontWeight="semibold">
        {title}
      </Box>
      <AccordionIcon fontSize="3xl" />
    </AccordionButton>
  );
};

type PanelProps = {
  children: React.ReactNode;
};

const Panel = ({ children }: PanelProps) => {
  return (
    <AccordionPanel pb="3" px="0" pt="0">
      {children}
    </AccordionPanel>
  );
};

type LinkProps = {
  href: string;
  title: string;
};
const Link = ({ title, href }: LinkProps) => {
  return <NavLink href={href}>{title}</NavLink>;
};

export { Root, Item, Button, Panel, Link };
// export const NavAccordion = (props: NavAccordionProps) => {
//   const { data } = props;

//   return (
//     <Accordion allowMultiple as="ul" listStyleType="none">
//       {data.map((group) => (
//         <AccordionItem key={group.title} as="li">
//           <AccordionButton py="3" px="0">
//             <Box flex="1" textAlign="start" fontSize="lg" fontWeight="semibold">
//               {group.title}
//             </Box>
//             <AccordionIcon fontSize="3xl" />
//           </AccordionButton>
//           <AccordionPanel pb="3" px="0" pt="0">
//             {group.pages.map((item, index) => (
//               <NavLink key={index} href={item.page}>
//                 {item.title}
//               </NavLink>
//             ))}
//           </AccordionPanel>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// };
