import { ComponentMeta } from "@storybook/react";
import React from "react";
import * as RadioGroup from "@ui/RadioGroup";

export default {
  title: "starknet.io/RadioGroup",
  component: RadioGroup.Root,
} as ComponentMeta<typeof RadioGroup.Root>;

export const Primary = () => (
  <>
    <div className="flex items-center justify-center h-96 ">
      <RadioGroup.Root
        defaultValue="blueberry"
        id="radiogroup1"
        legend="Choose your fruit"
      >
        <RadioGroup.Option label="Blueberry" value="blueberry" />
        <RadioGroup.Option label="Oranges" value="oranges" />
        <RadioGroup.Option label="Hello" value="hello" />
      </RadioGroup.Root>
    </div>
  </>
);
Primary.storyName = "Default";
