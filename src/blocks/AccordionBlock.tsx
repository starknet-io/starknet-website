"use client";
import { Box } from "@chakra-ui/react";
import * as PageAccordion from "@ui/Accordion/PageAccordion";
import { Heading } from "@ui/Typography/Heading";

type Props = {
  children: React.ReactNode;
  heading?: string;
};

export const AccordionRoot = ({ heading, children }: Props) => {
  return (
    <Box>
      <Heading as="h2" variant="h2" color="heading-navy-fg">
        {heading}
      </Heading>
      <PageAccordion.Root>{children}</PageAccordion.Root>
    </Box>
  );
};

export const AccordionItem = ({ label, children }: any) => {
  return (
    <PageAccordion.Item label={label}>
      <PageAccordion.Panel>{children}</PageAccordion.Panel>
    </PageAccordion.Item>
  );
};
