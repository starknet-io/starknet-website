import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Switch } from "@ui/Switch";

export default {
  title: "starknet.io/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Primary = () => (
  <div className="flex items-center justify-center h-96 ">
    <Switch />
  </div>
);
Primary.storyName = "Default";
