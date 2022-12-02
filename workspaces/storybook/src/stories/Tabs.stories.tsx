import { ComponentMeta } from "@storybook/react";
import React from "react";

import Tabs from "../../../../src/components/Tabs";

export default {
  title: "starknet.io/Tabs",
  component: Tabs.Root,
} as ComponentMeta<typeof Tabs.Root>;

export const Primary = () => (
  <div>
    <Tabs.Root defaultValue="tab1">
      <Tabs.List aria-label="tabs example">
        <Tabs.Trigger title="Page One" value="tab1" />
        <Tabs.Trigger title="Page Two" value="tab2" />
        <Tabs.Trigger title="Page three" value="tab3" />
      </Tabs.List>
      <Tabs.Content value="tab1">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
    </Tabs.Root>
  </div>
);
Primary.storyName = "Default";
