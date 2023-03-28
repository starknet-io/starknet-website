import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { useCopyToClipboard } from "react-use";

const SocialShare = ({ shareUrl }: { shareUrl: string }) => {
  const title = "Starknet website";
  const [copied, setCopied] = useState(false);
  const [state, copyToClipboard] = useCopyToClipboard();
  const copyTimeout = useRef<NodeJS.Timeout>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onCopy = () => {
    inputRef.current?.focus();
    copyToClipboard(shareUrl);
    setCopied(true);
    if (copyTimeout.current) {
      clearTimeout(copyTimeout.current);
    }
    copyTimeout.current = setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Box display="grid" gap="1rem">
      <Text fontSize="lg">Share</Text>

      <InputGroup size="md">
        <Input
          pr="6rem"
          value={shareUrl}
          readOnly
          ref={inputRef}
          onClick={() => {
            inputRef.current?.select();
          }}
          fontSize="sm"
        />
        <InputRightElement width="4rem" right={5}>
          <Button
            h="1.75rem"
            size="sm"
            onClick={onCopy}
            width="4rem"
            fontSize="xs"
          >
            {copied && !state.error ? "Copied" : "Copy"}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Box display="flex" gap="1rem">
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>

        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon size={40} round />
        </RedditShareButton>

        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </Box>
    </Box>
  );
};

export default SocialShare;
