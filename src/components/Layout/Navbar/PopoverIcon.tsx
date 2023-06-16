import { Icon, IconProps } from "src/libs/chakra-ui";
import * as React from "react";
import { FiChevronDown } from "react-icons/fi";
import { SystemStyleObject } from '@chakra-ui/react';

interface PopoverIconProps extends IconProps {
  isOpen: boolean;
  sx?: SystemStyleObject;
}

export const PopoverIcon = (props: PopoverIconProps) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return <Icon sx={props.sx} ml="-2px"aria-hidden as={FiChevronDown} __css={iconStyles} />;
};
