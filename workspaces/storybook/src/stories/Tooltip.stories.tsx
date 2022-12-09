import { ComponentMeta } from "@storybook/react";
import React from "react";
import * as Tooltip from "@ui/Tooltip";
import { Button } from "@ui/Button";

export default {
  title: "starknet.io/Tooltip",
  component: Tooltip.Root,
} as ComponentMeta<typeof Tooltip.Root>;

export const Primary = () => (
  <div className="flex items-center justify-center h-96 ">
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Button>Hello</Button>
        </Tooltip.Trigger>
        <Tooltip.Content> Hello ther eto you</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  </div>
);
Primary.storyName = "Default";
