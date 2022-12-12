import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Checkbox } from "@ui/Checkbox";

export default {
  title: "starknet.io/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary = () => (
  <>
    <div className="flex items-center justify-center  ">
      <Checkbox
        disabled={true}
        required={true}
        label="Accept the termss"
        onCheckedChange={() => console.log("red")}
      />
    </div>
  </>
);
Primary.storyName = "Default";
