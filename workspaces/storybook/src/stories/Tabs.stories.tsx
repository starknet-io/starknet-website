import { ComponentMeta } from "@storybook/react";
import React from "react";

import * as Tabs from "@ui/Tabs";
import { Button } from "@ui/Button";

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
        <Tabs.Trigger title="Page threes" value="tab3" />
      </Tabs.List>
      {["tab1", "tab2", "tab3"].map((tab) => (
        <Tabs.Content value={tab} key={tab}>
          <Button>I am {tab}</Button>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  </div>
);
Primary.storyName = "Default";
