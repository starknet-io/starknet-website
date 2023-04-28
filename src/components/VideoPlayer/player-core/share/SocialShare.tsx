import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
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
import useInputCopy from "../hooks/useInputCopy";

const SocialShare = ({
  shareUrl,
  title,
}: {
  shareUrl: string;
  title: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { onCopy, state, copied } = useInputCopy();
  const focusInput = () => inputRef.current?.select();

  return (
    <Box display="grid" gap="1rem">
      <Text fontSize="lg" fontWeight={700}>
        Share
      </Text>

      <InputGroup size="md">
        <Input
          pr="6rem"
          value={shareUrl}
          readOnly
          ref={inputRef}
          onFocus={focusInput}
          fontSize="sm"
        />
        <InputRightElement width="4rem" right={5}>
          <Button
            variant="unstyled"
            h="1.75rem"
            size="sm"
            onClick={() => {
              onCopy(shareUrl);
              focusInput();
            }}
            width="4rem"
            fontSize="xs"
            textTransform="uppercase"
            color="grey.darkText"
            bg="grey.morning"
            borderRadius="4px"
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
