"use client";
import { Box } from "@chakra-ui/react";
import * as PageAccordion from "@ui/Accordion/PageAccordion";
import { Heading } from "@ui/Typography/Heading";
interface Item {
  label: string;
  content: React.ReactNode;
}
type Props = {
  items: Item[];
  heading?: string;
};

export const FaqBlock = ({ items, heading }: Props) => {
  return (
    <Box>
      <Heading as="h3" variant="h3" color="heading-navy-fg">
        {heading}
      </Heading>

      <PageAccordion.Root>
        {items.map((item) => (
          <PageAccordion.Item key={item.label} label={item.label}>
            <PageAccordion.Panel>{item.content}</PageAccordion.Panel>
          </PageAccordion.Item>
        ))}
      </PageAccordion.Root>
    </Box>
  );
};
