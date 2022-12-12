import * as TabsPrimitive from "@radix-ui/react-tabs";
import cx from "classnames";
import React from "react";

export const Root = ({
  children,
  defaultValue,
  ...rest
}: TabsPrimitive.TabsProps) => {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue} {...rest}>
      {children}
    </TabsPrimitive.Root>
  );
};

export const List = ({ children, ...rest }: TabsPrimitive.TabsListProps) => {
  return (
    <TabsPrimitive.List {...rest} className={cx("flex w-full rounded-t-lg ")}>
      {children}
    </TabsPrimitive.List>
  );
};

interface TriggerProps extends TabsPrimitive.TabsTriggerProps {
  title: string;
}

export const Trigger = ({ title, value, ...rest }: TriggerProps) => {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cx(
        "group",
        "first:rounded-tl-lg last:rounded-tr-lg",
        "border-b first:border-r last:border-l",
        "border-gray-300 ",
        "radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-body  ",
        "flex-1 px-3 py-2.5",
        "focus:radix-state-active:border-b-red",
        "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
      )}
      {...rest}
    >
      <span className={cx("text-sm font-medium", "text-bodyText")}>
        {title}
      </span>
    </TabsPrimitive.Trigger>
  );
};

export const Content = ({
  children,
  value,
  ...rest
}: TabsPrimitive.TabsContentProps) => {
  return (
    <TabsPrimitive.Content
      value={value}
      className={cx("rounded-b-lg bg-body px-6 py-4 ")}
      {...rest}
    >
      {children}
    </TabsPrimitive.Content>
  );
};
