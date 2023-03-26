import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ControlButton from "./ControlButton";
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
  };
  const onScrubEnd = (v: number) => {
    setScrubbing(false);
  };

  const getIcon = () => {
    if (isMuted)
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_130_216079)">
            <path
              d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_130_216079">
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
        <g clip-path="url(#clip0_130_216083)">
          <path
            d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_130_216083">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  return (
    <Box
      display="flex"
      role="group"
      onKeyDown={preventVideoJSHotKeys}
      alignItems="center"
    >
      <ControlButton ariaLabel="Volume" onClick={toggleMute} icon={getIcon()} />
      <Box
        sx={{
          w: isScrubbing ? "80px" : "0",
          opacity: isScrubbing ? 1 : 0,
          pl: "4px",
          // pr: "24px",
          display: "flex",
          transition: "all 0.5s",
          position: "relative",
        }}
        _groupHover={{
          w: "80px",
          opacity: 1,
          marginRight: "20px",
        }}
      >
        <Slider
          aria-label="slider-ex-1"
          min={0}
          max={100}
          value={isMuted ? 0 : volume}
          onChangeEnd={onScrubEnd}
          onChangeStart={onScrubStart}
          onChange={onVolumeChange}
        >
          <SliderTrack bg="#7E7E7E">
            <SliderFilledTrack
              bg="#cccccc"
              sx={{
                _hover: {
                  bg: "white",
                },
              }}
            />
          </SliderTrack>
          <SliderThumb
            bg="#cccccc"
            sx={{
              _hover: {
                bg: "white",
              },
            }}
          />
        </Slider>
      </Box>
    </Box>
  );
};
