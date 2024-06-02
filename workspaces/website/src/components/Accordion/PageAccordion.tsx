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
import { EVENT_CATEGORY, gtmEvent } from "src/utils/utils";

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
    <AccordionItem
      onClick={() =>
        gtmEvent(label.replace(/ /g, "_"), EVENT_CATEGORY.BUTTON_CLICK)
      }
    >
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
