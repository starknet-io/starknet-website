import { IconButton as ChakraIconButton, IconButtonProps } from "@chakra-ui/react";
import { scrollIntoView } from "../../utils/scrollIntoView";
import { forwardRef } from 'react';
import { iconButtonTheme } from "./IconButtonStyles";

export interface Props extends IconButtonProps {
  toId?: string;
  href?: string;
  size?: | "default" | "small";
  variant?: 'outline' | 'primary';
};

export const IconButton = forwardRef<HTMLButtonElement, Props>(({ 
  href, 
  toId, 
  size,
  variant = 'primary' as keyof typeof iconButtonTheme.variants,
  ...rest 
}, ref) => {
  const paddingValue = size === "small" ? "0" : "11px";
  const minWidthValue = size === "small" ? "auto" : "2.5rem";
  const handleOnClick = () => {
    if (!toId) {
      return;
    }

    scrollIntoView(toId);
  };
  return (
    <ChakraIconButton
      href={href}
      ref={ref}
      onClick={handleOnClick}
      padding={paddingValue}
      minWidth={minWidthValue}
      sx={iconButtonTheme?.variants?.[variant]}
      {...rest}
    />
  );
});

IconButton.displayName = 'IconButton';
