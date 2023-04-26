import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useLocale } from "src/app/[locale]/(components)/ClientLocaleProvider";
import { Chapter, VIDEO_SHARE_DOMAIN } from "../../constants";
import ShareEmbed from "./ShareEmbed";
import SocialShare from "./SocialShare";

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
  embedded?: boolean;
  chapter: Chapter;
};

export default function ShareModal({
  isOpen,
  onClose,
  embedded,
  chapter,
}: ShareModalProps) {
  const locale = useLocale();
  const shareUrl = `${VIDEO_SHARE_DOMAIN}/${locale}/video?chapter=${chapter.id}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={embedded}>
      <ModalOverlay />
      <ModalContent
        margin={embedded ? 0 : undefined}
        paddingBottom={{ base: "1rem", sm: "2rem" }}
        bg={useColorModeValue("#FBFBFC", "#1B1B1B")}
        color={useColorModeValue("grey.darkText", "grey.morning")}
        top={embedded ? undefined : { base: "3rem", md: "4rem", lg: "5rem" }}
        borderRadius="0.5rem"
        boxShadow="0px 4px 24px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.1)"
        border="1px solid"
        borderColor={useColorModeValue("offWhite", "grey.darkText")}
        maxW={{ base: "340px", sm: "490px" }}
      >
        <ModalCloseButton />
        <ModalHeader />
        <ModalBody pt={0}>
          <SocialShare shareUrl={shareUrl} title={chapter.title} />
          {!embedded && <ShareEmbed chapter={chapter} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
