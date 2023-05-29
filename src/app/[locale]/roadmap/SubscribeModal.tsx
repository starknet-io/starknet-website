"use client";
import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from "@chakra-ui/react";
import { Button } from "@ui/Button";

function SubscribeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="outline" onClick={handleOpen}>
        Subscribe to updates
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <iframe 
            src="https://cdn.forms-content.sg-form.com/2fb14a4a-f24d-11ed-97a1-2255cc459392" 
            style={{ width: '100%', height: '620px' }}
            frameBorder="0"
          />
        </ModalContent>
      </Modal>
    </>
  );
}

export default SubscribeModal;