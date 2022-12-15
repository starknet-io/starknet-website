import * as SwitchPrimitive from "@radix-ui/react-switch";
import cx from "classnames";
import React from "react";

export const Switch = (props: SwitchPrimitive.SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      className={cx(
        "group",
        "radix-state-checked:bg-primary",
        "radix-state-unchecked:bg-gray-200 ",
        "relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-opacity-75",
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cx(
          "group-radix-state-checked:translate-x-5",
          "group-radix-state-unchecked:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
        )}
      />
    </SwitchPrimitive.Root>
  );
};
