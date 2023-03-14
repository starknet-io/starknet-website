"use client";
import { Button as ChakraButton, ButtonProps } from "src/libs/chakra-ui";
import { scrollIntoView } from "../../utils/scrollIntoView";
import React, { forwardRef } from 'react';

type props = {
  variant: "solid" |
    "outline" |
    "outlineLight" |
    "outlineRounded" |
    "ghost" |
    "primaryHero" |
    "secondaryHero" |
    "switch" |
    "filter" |
    "filterActive" |
    "category" |
    "icon",
  children: React.ReactNode;
  toId?: string;
  href?: string;
} & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, props>(({ children, toId, ...rest }, ref) => {
  const handleOnClick = () => {
    if (!toId) {
      return;
    }

    scrollIntoView(toId);
  };
  return (
    <ChakraButton onClick={handleOnClick} ref={ref} {...rest}>
      {children}
    </ChakraButton>
  );
});

Button.displayName = 'Button';
