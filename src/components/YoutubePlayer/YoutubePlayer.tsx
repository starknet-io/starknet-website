"use client";

import React from "react";
import YouTube, { type YouTubeProps } from "react-youtube";
import "./YoutubePlayer.css";
export const YoutubePlayer = (props: YouTubeProps) => {
  const opts: YouTubeProps["opts"] = {
    height: "600px",
    width: "842px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <YouTube
      videoId={props.videoId}
      opts={opts}
      {...props}
      className={"youtubeContainer"}
    />
  );
};
