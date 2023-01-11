"use client";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { scrollIntoView } from "../../utils/scrollIntoView";

type props = {
  children: React.ReactNode;
  toId?: string;
} & ButtonProps;

export const Button = ({ children, toId, ...rest }: props) => {
  const handleOnClick = () => {
    if (!toId) {
      return;
    }

    scrollIntoView(toId);
  };
  return (
    <ChakraButton onClick={handleOnClick} {...rest}>
      {children}
    </ChakraButton>
  );
};
