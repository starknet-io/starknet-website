import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import cx from "classnames";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label: string;
}

export const Checkbox = ({
  label,
  disabled: _disabled,
  id = "1",
  ...rest
}: CheckboxProps) => {
  return (
    <form className="flex items-center justify-center h-96">
      <CheckboxPrimitive.Root
        {...rest}
        className={cx(
          "flex h-5 w-5 items-center justify-center rounded",
          "radix-state-checked:bg-buttonPrimary radix-state-unchecked:bg-buttonPrimary",
          "focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-opacity-75",
          "disabled:opacity-20",
        )}
        id={id}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="h-4 w-4 self-center text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label
        htmlFor={id}
        className={cx(
          "ml-3 select-none text-sm font-medium text-bodyText",
          "disabled:opacity-20",
        )}
      >
        {label}
      </LabelPrimitive.Label>
    </form>
  );
};
