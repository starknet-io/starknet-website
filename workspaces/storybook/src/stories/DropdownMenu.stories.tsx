import { ComponentMeta } from "@storybook/react";
import React from "react";
import { DropdownMenu } from "@ui/DropdownMenu";

export default {
  title: "starknet.io/DropdownMenu",
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

export const Primary = () => (
  <>
    <div className="flex items-center justify-center  ">
      <DropdownMenu />
    </div>
  </>
);
Primary.storyName = "Default";
