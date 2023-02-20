"use client";
import { Box } from "@chakra-ui/react";
import * as PageAccordion from "@ui/Accordion/PageAccordion";
import { Heading } from "@ui/Typography/Heading";
import { slugify } from "src/utils/utils";

type AccordionRootProps = {
  children: React.ReactNode;
  heading?: string;
};

export const AccordionRoot = ({ heading, children }: AccordionRootProps) => {
  return (
    <Box mb="80px">
      {heading && (
        <Heading
          as="h2"
          variant="h3"
          color="heading-navy-fg"
          id={`toc-${slugify(heading)}`}
        >
          {heading}
        </Heading>
      )}
      <PageAccordion.Root>{children}</PageAccordion.Root>
    </Box>
  );
};

type AccordionItemProps = {
  children: React.ReactNode;
  label: string;
};

export const AccordionItem = ({ label, children }: AccordionItemProps) => {
  return (
    <PageAccordion.Item label={label}>
      <PageAccordion.Panel>{children}</PageAccordion.Panel>
    </PageAccordion.Item>
  );
};
