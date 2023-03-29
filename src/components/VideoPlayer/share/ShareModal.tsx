import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import ShareEmbed from "./ShareEmbed";
import SocialShare from "./SocialShare";

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
  showEmbed?: boolean;
  currentChapter: string;
};

export default function ShareModal({
  isOpen,
  onClose,
  showEmbed,
  currentChapter,
}: ShareModalProps) {
  const shareUrl = `https://starknet-website-git-user-education-video-builtin-yuki-labs.vercel.app/en/video/${currentChapter}`;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent paddingBottom="2rem">
        <ModalCloseButton />
        <ModalHeader />
        <ModalBody pt={0}>
          <SocialShare shareUrl={shareUrl} />
          {showEmbed && <ShareEmbed currentChapter={currentChapter} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
