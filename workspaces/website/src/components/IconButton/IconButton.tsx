import { defineStyle } from "@chakra-ui/react";
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { scrollIntoView } from "../../utils/scrollIntoView";
import { forwardRef } from "react";

const iconButtonTheme = defineStyle({
  height: "auto",
  color: "darkMode.card",
  bg: "transparent",
  borderColor: "transparent",
  borderWidth: 1,
  _hover: {
    bg: "bg.200",
    _focus: {
      bg: "bg.200",
      borderColor: "transparent",
      borderWidth: 1,
    },
    _dark: {
      bg: "black",
    },
  },
  _active: {
    bg: "transparent",
    boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
    outlineWidth: 1,
    borderWidth: "1px",
    borderColor: "transparent",
    color: "darkMode.card",
    _focus: {
      bg: "transparent",
      boxShadow: "inset 0px 4px 0px rgba(0, 0, 0, 0.1)",
      outlineWidth: 1,
      borderWidth: "1px",
      borderColor: "transparent",
    },
    _dark: {
      bg: "black",
      color: "btn-outline-active-fg",
      borderColor: "black",
      outlineWidth: 1,
      _focus: {
        bg: "black",
        color: "grey.greyDusk",
        borderColor: "black",
        outlineWidth: 1,
      },
    },
  },
  _focus: {
    boxShadow: "none",
    borderColor: "selected.main",
    _dark: {
      boxShadow: "none",
      borderColor: "selected.100",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  _dark: {
    borderColor: "transparent",
    color: "white",
  },
});

export interface Props extends IconButtonProps {
  toId?: string;
  href?: string;
  size?: "default" | "small";
  openInNewTab?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ href, toId, size, openInNewTab, ...rest }, ref) => {
    const paddingValue = size === "small" ? "0" : "11px";
    const minWidthValue = size === "small" ? "auto" : "2.5rem";
    const targetTab = openInNewTab == true ? "_blank" : "_self";
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
        target={targetTab}
        sx={iconButtonTheme}
        onClick={handleOnClick}
        padding={paddingValue}
        minWidth={minWidthValue}
        {...rest}
      />
    );
  }
);

IconButton.displayName = "IconButton";
