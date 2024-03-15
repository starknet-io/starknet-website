/**
 * Module dependencies.
 */

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Container,
} from '@chakra-ui/react';

import { NewsletterForm } from './NewsletterForm';

/**
 * `RoadmapSubscribeForm` props.
 */

type RoadmapSubscribeFormProps = {
  env: {
    CLOUDFLARE_RECAPTCHA_KEY: string;
  }
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
};

/**
 * `RoadmapSubscribeForm` component.
 */

function RoadmapSubscribeForm({
  env,
  isOpen,
  setIsOpen,
}: RoadmapSubscribeFormProps) {
  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        height={'max-content'}
        maxWidth={'410px'}
        overflow={'auto'}
      >
        <ModalCloseButton />

        <Container 
          padding={'60px 32px 32px'}
        >
          <NewsletterForm env={env} />
        </Container>
      </ModalContent>
    </Modal>
  );
}

export default RoadmapSubscribeForm;
