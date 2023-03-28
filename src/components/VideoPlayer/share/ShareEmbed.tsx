import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import useInputCopy from "../hooks/useInputCopy";

const defaultValue = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EgxqC2Ry65c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
export default function ShareEmbed() {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { onCopy, state, copied } = useInputCopy();
  const focusInput = () => inputRef.current?.select();

  return (
    <Box display="grid">
      <Text mt="1.5rem" mb="1rem" fontSize="lg" fontWeight={700}>
        Embed
      </Text>
      <Textarea
        fontSize="sm"
        rows={7}
        value={value}
        onChange={(v) => setValue(v.target.value)}
        resize="none"
        sx={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
        ref={inputRef}
        onClick={focusInput}
        onFocus={() => {
          inputRef.current?.select();
        }}
      ></Textarea>
      <Button
        variant="unstyled"
        fontSize="xs"
        padding="8px 12px"
        bg="white"
        color="#363636"
        mt="12px"
        ml="auto"
        alignSelf="end"
        height="auto"
        borderRadius="4px"
        textTransform="uppercase"
        onClick={() => {
          onCopy(value);
          focusInput();
        }}
        minW="10rem"
      >
        {copied && !state.error ? "Copied" : "Copy"} EMBED CODE
      </Button>
    </Box>
  );
}
