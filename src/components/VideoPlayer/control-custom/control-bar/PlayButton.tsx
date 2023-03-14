import { Button, IconButton } from "@chakra-ui/react";
import React from "react";
import { SeekStatuses } from "../hooks/useSeek";
import ControlButton from "./ControlButton";
import { preventVideoJSHotKeys } from "./utils";

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
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
          // className="w-5 h-5"
          width={20}
          height={20}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      );

    if (playingStatus === "paused")
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          // className="w-5 h-5"
          width={20}
          height={20}
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clip-rule="evenodd"
          />
        </svg>
      );

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        // className="w-5 h-5"
        width={20}
        height={20}
      >
        <path
          fill-rule="evenodd"
          d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
          clip-rule="evenodd"
        />
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
