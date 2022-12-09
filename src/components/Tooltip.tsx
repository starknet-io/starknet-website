import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cx from "classnames";
import React from "react";

export const Provider = ({
  children,
  ...rest
}: TooltipPrimitive.TooltipProviderProps) => {
  return (
    <TooltipPrimitive.Provider {...rest}>{children}</TooltipPrimitive.Provider>
  );
};

// interface RootProps extends TooltipPrimitive.TooltipProps {
//   label: string;
// }

export const Root = ({ children, ...rest }: TooltipPrimitive.TooltipProps) => {
  return <TooltipPrimitive.Root {...rest}>{children}</TooltipPrimitive.Root>;
};

export const Trigger = ({
  children,
  ...rest
}: TooltipPrimitive.TooltipTriggerProps) => {
  return (
    <TooltipPrimitive.Trigger asChild={true} {...rest}>
      {children}
    </TooltipPrimitive.Trigger>
  );
};

interface ContentProps extends TooltipPrimitive.TooltipContentProps {}

export const Content = ({ children, ...rest }: ContentProps) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        asChild={true}
        {...rest}
        sideOffset={4}
        className={cx(
          "radix-side-top:animate-slide-down-fade",
          "radix-side-right:animate-slide-left-fade",
          "radix-side-bottom:animate-slide-up-fade",
          "radix-side-left:animate-slide-right-fade",
          "inline-flex items-center rounded-md px-4 py-2.5",
          "bg-toolTip"
        )}
      >
        <span className="block text-xs leading-none text-toolTipText ">
          {children}
        </span>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};
