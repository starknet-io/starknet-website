import { ComponentMeta } from "@storybook/react";
import React from "react";
import * as Select from "@ui/Select";

export default {
  title: "starknet.io/Select",
  component: Select.Root,
} as ComponentMeta<typeof Select.Root>;

export const Default = () => (
  <div className="flex items-center justify-center h-96">
    <Select.Root defaultValue="blueberry">
      <Select.Option value="blueberry" textValue="Blueberry" />
      <Select.Option value="strawberry" textValue="Strawberry" />
      <Select.Option value="apple" textValue="Apple" />
      <Select.Option value="orange" textValue="Orange" />
    </Select.Root>
  </div>
);
Default.storyName = "Default";

export const WithGroups = () => (
  <div className="flex items-center justify-center h-96">
    <Select.Root defaultValue="blueberry">
      <Select.Group>
        <Select.Option value="blueberry" textValue="Blueberry" />
        <Select.Option
          disabled={true}
          value="strawberry"
          textValue="Strawberry"
        />
        <Select.Option value="apple" textValue="Apple" />
        <Select.Option value="orange" textValue="Orange" />
      </Select.Group>
      <Select.Separator />
      <Select.Group>
        <Select.Option value="Grapes" textValue="Grapes" />
        <Select.Option value="Kiwi" textValue="Kiwi" />
        <Select.Option value="Tangerine" textValue="Tangerine" />
        <Select.Option value="Pomegranite" textValue="Pomegranite" />
      </Select.Group>
    </Select.Root>
  </div>
);
WithGroups.storyName = "With Groups";

export const WithGroupsLabel = () => (
  <div className="flex items-center justify-center h-96">
    <Select.Root defaultValue="blueberry">
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Option value="blueberry" textValue="Blueberry" />
        <Select.Option value="strawberry" textValue="Strawberry" />
        <Select.Option value="apple" textValue="Apple" />
        <Select.Option value="orange" textValue="Orange" />
      </Select.Group>
      <Select.Separator />
      <Select.Group>
        <Select.Label>Vegetables</Select.Label>
        <Select.Option value="Grapes" textValue="Grapes" />
        <Select.Option value="Kiwi" textValue="Kiwi" />
        <Select.Option value="Tangerine" textValue="Tangerine" />
        <Select.Option value="Pomegranite" textValue="Pomegranite" />
      </Select.Group>
    </Select.Root>
  </div>
);
WithGroupsLabel.storyName = "With Groups Label";
