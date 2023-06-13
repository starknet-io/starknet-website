"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

type RoadmapSubscribeFormProps = {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
};
function RoadmapSubscribeForm({
  isOpen,
  setIsOpen,
}: RoadmapSubscribeFormProps) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <iframe
          src="https://cdn.forms-content.sg-form.com/2fb14a4a-f24d-11ed-97a1-2255cc459392"
          style={{ width: "100%", height: "420px" }}
          frameBorder="0"
        />
      </ModalContent>
    </Modal>
  );
}

export default RoadmapSubscribeForm;
