import { Icon, IconProps } from '@chakra-ui/react';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface PopoverIconProps extends IconProps {
  isOpen: boolean;
}

export const PopoverIcon = (props: PopoverIconProps) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  };
  return <Icon aria-hidden as={FiChevronDown} __css={iconStyles} />;
};
