import { Flex, Icon, Text } from "@chakra-ui/react";
import {
  // FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from "react-share";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
  readonly env?: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
    readonly SITE_URL: string;
  };
}
const SocialShare = ({ params: { slug, locale }, env }: Props) => {
  const shareUrl = `${
    env?.SITE_URL || "https://www.starknet.io"
  }${locale}/content/${slug}`;
  return (
    <Flex
      gap={"24px"}
      position={{ base: "relative", xl: "fixed" }}
      top={{ base: "unset", xl: "200px" }}
      right={{ base: "unset", xl: "300px" }}
    >
      <Text display={{ base: "unset", xl: "none" }}>Share this post:</Text>

      <Flex
        alignItems={"center"}
        gap={"8px"}
        flexDir={{ base: "row", xl: "column" }}
      >
        <TwitterShareButton url={shareUrl}>
          <Icon
            boxSize="28px"
            color="grey.coolText"
            _dark={{ color: "grey.morning" }}
            as={FaTwitter}
          />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl}>
          <Icon
            boxSize="28px"
            color="grey.coolText"
            _dark={{ color: "grey.morning" }}
            as={FaTelegram}
          />
        </TelegramShareButton>
        {/* need to be discord */}
        {/* <FacebookShareButton url={shareUrl}>
          <Icon
            boxSize="28px"
            opacity={0.6}
            color="text-hero-fg"
            as={FaDiscord}
          />
        </FacebookShareButton> */}
        <LinkedinShareButton url={shareUrl}>
          <Icon
            boxSize="28px"
            color="grey.coolText"
            _dark={{ color: "grey.morning" }}
            as={FaLinkedin}
          />
        </LinkedinShareButton>
      </Flex>
    </Flex>
  );
};

export default SocialShare;
