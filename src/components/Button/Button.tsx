"use client";
import { ButtonProps, Button as ChakraButton } from "src/libs/chakra-ui";
import { scrollIntoView } from "../../utils/scrollIntoView";
import React, { forwardRef } from "react";

type props = {
  variant:
    | "solid"
    | "outline"
    | "outlineLight"
    | "outlineRounded"
    | "ghost"
    | "primaryHero"
    | "secondaryHero"
    | "switch"
    | "filter"
    | "filterActive"
    | "category"
    | "icon";
  children: React.ReactNode;
  toId?: string;
  href?: string;
  isExternal?: boolean;
  target?: ButtonProps["formTarget"];
  fullWidth?: boolean;
} & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, props>(
  ({ children, toId, color, fullWidth = false, ...rest }, ref) => {
    const handleOnClick = () => {
      if (!toId) {
        return;
      }

      scrollIntoView(toId);
    };
    return (
      <ChakraButton width={fullWidth ? "100%" : "auto"} onClick={handleOnClick} ref={ref} color={color} {...rest}>
        {children}
      </ChakraButton>
    );
  }
);

Button.displayName = "Button";
