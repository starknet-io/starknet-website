"use client";
import { Fade, Flex, ScaleFade, SlideFade } from "@chakra-ui/react";
import React from "react";
import { useInViewport } from "react-in-viewport";

type Props = {
  children: React.ReactNode;
};

export const BlockGrouping = ({ children }: Props) => {
  const ref = React.useRef(null);
  const { inViewport } = useInViewport(
    ref,
    {
      rootMargin: "-30px",
    },
    { disconnectOnLeave: true },
    {},
  );

  return (
    <ScaleFade initialScale={0.96} in={inViewport}>
      <Flex
        ref={ref}
        direction="column"
        gap="32px"
        // mb={{ base: "56px", lg: "136px" }}
      >
        {children}
      </Flex>
    </ScaleFade>
  );
};
