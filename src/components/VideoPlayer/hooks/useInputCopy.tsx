import React, { useRef, useState } from "react";
import { useCopyToClipboard } from "react-use";

export default function useInputCopy() {
  const [copied, setCopied] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();
  const _copyTimeout = useRef<NodeJS.Timeout>();

  const onCopy = (value: string) => {
    copyToClipboard(value);
    setCopied(true);
    if (_copyTimeout.current) {
      clearTimeout(_copyTimeout.current);
    }
    _copyTimeout.current = setTimeout(() => setCopied(false), 1000);
  };

  return {
    copied,
    state,
    onCopy,
  };
}
