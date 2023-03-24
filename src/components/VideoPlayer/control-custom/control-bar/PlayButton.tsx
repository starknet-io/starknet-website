import React from "react";
import { SeekStatuses } from "../hooks/useSeek";
import ControlButton from "./ControlButton";

export type PlayButtonProps = {
  handlePlay: () => void;
  playingStatus: SeekStatuses;
};

export const PlayButton = ({ handlePlay, playingStatus }: PlayButtonProps) => {
  const getIcon = () => {
    if (playingStatus === "ended")
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#CCCCCC"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <g>
              <path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z" />
              <path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z" />
            </g>
          </g>
        </svg>
      );

    if (playingStatus === "paused")
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_130_216067)">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_130_216067">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_130_216066)">
          <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_130_216066">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  return (
    <ControlButton
      ariaLabel="Play Pause"
      onClick={handlePlay}
      icon={getIcon()}
    />
  );
};
