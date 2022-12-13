import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Checkbox } from "@ui/Checkbox";

export default {
  title: "starknet.io/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary = () => (
  <>
    <div className="flex items-center justify-center">
      <Checkbox
        name='tos'
        id='tos'
        required={true}
        label="Accept the terms"
        onCheckedChange={() => console.log("changed")}
      />
    </div>
    <div className="flex items-center justify-center">
      <Checkbox
        name='cannot'
        id='cannot'
        disabled={true}
        label="I am disabled"
        onCheckedChange={() => console.log("you should not see me")}
      />
    </div>
  </>
);
Primary.storyName = "Default";
