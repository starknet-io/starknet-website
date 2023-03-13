import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Scrubber } from "react-scrubber";
import { preventVideoJSHotKeys } from "./utils";

export type VolumeButtonProps = {
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
};

export const VolumeButton = ({
  isMuted,
  toggleMute,
  volume,
  onVolumeChange,
}: VolumeButtonProps) => {
  const [isScrubbing, setScrubbing] = useState(false);

  const onScrubStart = (v: number) => {
    setScrubbing(true);
    onVolumeChange(v);
  };
  const onScrubEnd = (v: number) => {
    setScrubbing(false);
    onVolumeChange(v);
  };
  return (
    <Box display="flex" role="group" onKeyDown={preventVideoJSHotKeys}>
      <Button
        variant="unstyled"
        onClick={toggleMute}
        onKeyDown={preventVideoJSHotKeys}
        sx={{
          zIndex: 5,
          bg: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            height={20}
            width={20}
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            height={20}
            width={20}
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
          </svg>
        )}
      </Button>
      <Box
        sx={{
          w: isScrubbing ? "80px" : "auto",
          // pl: "5px",
          pr: "5px",
        }}
        _groupHover={{
          w: "80px",
        }}
      >
        <Scrubber
          min={0}
          max={100}
          value={isMuted ? 0 : volume}
          onScrubStart={onScrubStart}
          onScrubEnd={onScrubEnd}
          onScrubChange={onVolumeChange}
        />
      </Box>
    </Box>
  );
};
