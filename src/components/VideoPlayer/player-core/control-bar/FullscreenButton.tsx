import React from "react";
import ControlButton from "./ControlButton";

export type FullscreenButtonProps = {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
};

export const FullscreenButton = ({
  isFullscreen,
  toggleFullscreen,
}: FullscreenButtonProps) => {
  const getIcon = () => {
    if (isFullscreen)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
        </svg>
      );

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_137_3449)">
          <path
            d="M9.33317 18.6667H6.6665V25.3333H13.3332V22.6667H9.33317V18.6667ZM6.6665 13.3333H9.33317V9.33332H13.3332V6.66666H6.6665V13.3333ZM22.6665 22.6667H18.6665V25.3333H25.3332V18.6667H22.6665V22.6667ZM18.6665 6.66666V9.33332H22.6665V13.3333H25.3332V6.66666H18.6665Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_137_3449">
            <rect width="32" height="32" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  return (
    <ControlButton
      ariaLabel="Fullscreen"
      onClick={toggleFullscreen}
      icon={getIcon()}
    />
  );
};
