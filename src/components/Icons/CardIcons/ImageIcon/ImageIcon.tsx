import React from 'react';

const ImageIcon: React.FC<{icon?: string, alt?: string, filter?: string, borderRadius?: string}> = ({ icon, alt = "", filter, borderRadius }) => {
  return (
    <img style={{filter, borderRadius}} src={icon} alt={alt} />
  )
};

export default ImageIcon;