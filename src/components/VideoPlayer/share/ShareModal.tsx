import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SocialShare from "./SocialShare";

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const shareUrl = `https://education-video-beta.vercel.app`;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent paddingBottom="2rem">
        <ModalCloseButton />
        <ModalHeader />
        <ModalBody pt={0}>
          <SocialShare shareUrl={shareUrl} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
