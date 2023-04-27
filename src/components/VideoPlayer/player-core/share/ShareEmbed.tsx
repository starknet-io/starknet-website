import { Box, Button, Text, Textarea } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import useInputCopy from "../hooks/useInputCopy";
import { Chapter, VIDEO_SHARE_DOMAIN } from "../../constants";

export default function ShareEmbed({ chapter }: { chapter: Chapter }) {
  const videoEmbedUrl = `${VIDEO_SHARE_DOMAIN}/video-embed?chapter=${chapter.id}`;
  const defaultValue = `<iframe width="560" height="315" src="${videoEmbedUrl}" title="${chapter.title}" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>`;

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
        rows={5}
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
        bg="grey.morning"
        color="grey.darkText"
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
