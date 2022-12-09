import cx from "classnames";
import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as LabelPrimitive from "@radix-ui/react-label";

interface RootProps extends RadioGroupPrimitive.RadioGroupProps {
  legend?: string;
}

export const Root = ({ children, legend, ...rest }: RootProps) => (
  <form>
    {legend && (
      <legend className="text-sm font-medium leading-4 text-gray-900">
        {legend}
      </legend>
    )}
    <RadioGroupPrimitive.Root {...rest}>{children}</RadioGroupPrimitive.Root>
  </form>
);

interface ItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  label: string;
}

export const Option = ({ value, label, ...rest }: ItemProps) => (
  <div className="mt-3 space-y-3">
    <div className="flex items-center">
      <RadioGroupPrimitive.Item
        value={value}
        id={value}
        {...rest}
        className={cx(
          "peer relative w-4 h-4 rounded-full",
          // Setting the background in dark properly requires a workaround (see css/tailwind.css)
          "border border-transparent text-white",
          "radix-state-checked:bg-purple-600",
          "radix-state-unchecked:bg-gray-100 ",
          "focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 "
        )}
      >
        <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <LabelPrimitive.Label
        htmlFor={value}
        className="ml-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </LabelPrimitive.Label>
    </div>
  </div>
);
