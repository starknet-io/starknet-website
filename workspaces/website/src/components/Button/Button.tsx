import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";
import { scrollIntoView } from "../../utils/scrollIntoView";
import React, { forwardRef } from "react";

type props = {
  variant:
    | "solid"
    | "outline"
    | "outlineFull"
    | "outlineLight"
    | "outlineRounded"
    | "ghost"
    | "primaryHero"
    | "secondaryHero"
    | "switch"
    | "filter"
    | "filterActive"
    | "smallFilter"
    | "smallFilterActive"
    | "category"
    | "categoryVertical"
    | "icon"
    | "gradient";
  children: React.ReactNode;
  toId?: string;
  href?: string;
  isExternal?: boolean;
  target?: ButtonProps["formTarget"];
  fullWidth?: boolean;
} & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, props>(
  ({ children, toId, href, fullWidth, ...rest }, ref) => {
    const handleOnClick = () => {
      if (!toId) {
        return;
      }

      scrollIntoView(toId);
    };

    return (
      <ChakraButton
        as={href != null ? "a" : undefined}
        width={fullWidth ? "100%" : "auto"}
        onClick={handleOnClick}
        ref={ref}
        href={href}
        {...rest}
      >
        {children}
      </ChakraButton>
    );
  }
);

Button.displayName = "Button";
