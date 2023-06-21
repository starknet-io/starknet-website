
//todo: Rewrite this component post launch

import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Box,
} from "@chakra-ui/react";

type RootProps = {
  children: React.ReactNode;
};
const Root = ({ children }: RootProps) => {
  return (
    <Accordion allowMultiple variant="page">
      {children}
    </Accordion>
  );
};

type ItemProps = {
  label: string;
  children: React.ReactNode;
};
const Item = ({ label, children }: ItemProps) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <AccordionButton>
            {isExpanded ? (
              <Icon as={HiChevronUp} boxSize="24px" color="heading-navy-fg" />
            ) : (
              <Icon as={HiChevronDown} boxSize="24px" color="heading-navy-fg" />
            )}
            <Box as="span" flex="1" textAlign="left">
              {label}
            </Box>
          </AccordionButton>
          {children}
        </>
      )}
    </AccordionItem>
  );
};

const Panel = ({ children }: RootProps) => {
  return <AccordionPanel>{children}</AccordionPanel>;
};
export { Root, Item, Panel };
