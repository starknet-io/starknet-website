import { ButtonProps, Button as ChakraButton, Box } from "@chakra-ui/react";
import { scrollIntoView } from "../../utils/scrollIntoView";
import React, { forwardRef } from "react";
import { buttonTheme } from "./ButtonStyles.ts";

type props = {
  variant:
    | "solid"
    | "outline"
    | "ghost"
    | "primaryHero"
    | "secondaryHero"
    | "switch"
    | "filter"
    | "filterActive"
    | "category"
    | "icon"
    | "rounded";
  children: React.ReactNode;
  toId?: string;
  href?: string;
  isExternal?: boolean;
  target?: ButtonProps["formTarget"];
  fullWidth?: boolean;
  size?: "sm" | "md";
} & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, props>(
  ({ children, toId, href, fullWidth, size = "md", ...rest }, ref) => {
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
          size={size}
          {...buttonTheme}
          {...rest}
        >
          {children}
        </ChakraButton>

    );
  }
);

Button.displayName = "Button";
