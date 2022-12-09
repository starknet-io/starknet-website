import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

import cx from "classnames";
import React from "react";

type SelectButtonProps = Omit<React.ComponentProps<"button">, "className"> & {};

const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cx(
        "inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        "bg-selectButton text-bodyText hover:bg-selectButtonHover ",
        "hover:selectButtonHover",
        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",

        "group",
        "radix-state-open:bg-gray-50",
        "radix-state-on:bg-gray-50",
        "radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50"
      )}
    >
      {children}
    </button>
  )
);

export const Root = ({ children, ...rest }: SelectPrimitive.SelectProps) => {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger asChild={true} aria-label="Food">
        <SelectButton>
          <SelectPrimitive.Value placeholder="Select a fruit…" />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectButton>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700">
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="bg-selectBg p-2 rounded-lg shadow-lg">
            {children}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 ">
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export const Group = ({ children }: { children: React.ReactNode }) => {
  return <SelectPrimitive.Group>{children}</SelectPrimitive.Group>;
};

export const Separator = () => {
  return <SelectPrimitive.Separator className="h-px bg-slate-100 m-1 " />;
};
export const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <SelectPrimitive.Label className="text-xs px-6 leading-6 text-gray-400">
      {children}
    </SelectPrimitive.Label>
  );
};

export const Option = ({
  value,
  textValue,
  ...rest
}: SelectPrimitive.SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      className={cx(
        "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700  font-medium focus:bg-gray-100",
        "radix-disabled:opacity-50",
        "focus:outline-none select-none"
      )}
      value={value}
      {...rest}
    >
      <SelectPrimitive.ItemText>{textValue}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};
