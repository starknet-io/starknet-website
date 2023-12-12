/**
 * Module dependencies
 */
import React from 'react';

/**
 * `Props` type.
 */

type Props = {
  icon?: string,
  alt?: string,
  filter?: string,
  borderRadius?: string,
};

/**
 * Export `ImageIcon` component.
 */

const ImageIcon: React.FC<Props> = ({
  icon,
  alt = "",
  filter,
  borderRadius,
}) => {
  return (
    <img
      style={{
        borderRadius,
        filter,
        maxHeight: '400px'
      }} 
      src={icon}
      alt={alt} 
    />
  )
};

export default ImageIcon;
