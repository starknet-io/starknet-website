import { IconButton } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { preventVideoJSHotKeys } from "./utils";

type ControlButtonProps = {
  onClick: () => void;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  ariaLabel: string;
  style?: CSSProperties;
};
export default function ControlButton({
  onClick,
  icon,
  ariaLabel,
}: ControlButtonProps) {
  return (
    <IconButton
      variant="unstyled"
      aria-label={ariaLabel}
      backgroundColor="transparent"
      outline="none"
      onClick={onClick}
      onKeyDown={preventVideoJSHotKeys}
      icon={icon}
      sx={{
        zIndex: 5,
        color: "#cccccc",
        _hover: {
          outline: "none",
          color: "#ffffff",
        },
        _active: {
          outline: "none",
        },
        _focusVisible: {
          outline: "none",
          boxShadow: "none",
        },
        "& svg": {
          width: "28px",
          height: "28px",
          boxSize: "28px",
        },
      }}
    ></IconButton>
  );
}
