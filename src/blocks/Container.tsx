"use client";

import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

type Props = {} & ContainerProps;

export const Container = (props: Props) => {
  return (
    <ChakraContainer maxWidth={`${props.maxWidth}px`}>
      {props.children}
    </ChakraContainer>
  );
};
