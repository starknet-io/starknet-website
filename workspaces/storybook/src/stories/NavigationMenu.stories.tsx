import { ComponentMeta } from "@storybook/react";
import React from "react";
import { NavigationMenu } from "@ui/NavigationMenu";

export default {
  title: "starknet.io/NavigationMenu",
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

export const Primary = () => (
  <div>
    <div
      style={{
        backgroundColor: "red",
        padding: 100,
        display: "flex",
        width: "50%",
      }}
    >
      <NavigationMenu />
    </div>
  </div>
);
Primary.storyName = "Default";
