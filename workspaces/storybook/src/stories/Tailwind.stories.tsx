import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Tailwind as TailwindComponent } from "./Tailwind";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Tailwind",
  component: TailwindComponent,
} as ComponentMeta<typeof TailwindComponent>;

export const Tailwind = () => <TailwindComponent />;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
