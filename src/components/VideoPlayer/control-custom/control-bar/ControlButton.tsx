import { IconButton } from "@chakra-ui/react";
import React from "react";
import { preventVideoJSHotKeys } from "./utils";

type ControlButtonProps = {
  onClick: () => void;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  ariaLabel: string;
};
export default function ControlButton({
  onClick,
  icon,
  ariaLabel,
}: ControlButtonProps) {
  return (
    <IconButton
      aria-label={ariaLabel}
      bg="transparent"
      onClick={onClick}
      onKeyDown={preventVideoJSHotKeys}
      icon={icon}
      sx={{
        zIndex: 5,
        _hover: {
          outline: "none",
        },
        _active: {
          outline: "none",
        },
        _focusVisible: {
          outline: "none",
          boxShadow: "none",
        },
      }}
    ></IconButton>
  );
}
