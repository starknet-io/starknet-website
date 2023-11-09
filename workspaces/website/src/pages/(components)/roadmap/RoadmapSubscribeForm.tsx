/**
 * Module dependencies.
 */

import { Button } from '@ui/Button';
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Container,
  useToast,
} from '@chakra-ui/react';

import { Heading } from '@ui/Typography/Heading';
import { Text } from '@ui/Typography/Text';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

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
  const toast = useToast();
  const [formState, setFormState] = useState<'submitting' | 'success' | null>(null);
  const captchaRef = useRef<TurnstileInstance | undefined>(null);

  const handleClose = () => {
    setIsOpen(false);
    setFormState(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('submitting');

    try {
      const token = captchaRef.current?.getResponse();

      await axios.post(`/api/newsletter-subscribe?${qs.stringify({
        email: (event.target as any)[0].value,
        token,
      })}`)

      captchaRef.current?.reset();
      setFormState('success');
    } catch (error: any) {
      setFormState(null);
      captchaRef.current?.reset();
      
      const toastErrorConfig = {
        duration: 1500,
        isClosable: true,
        status: 'error' as 'error',
      };

      if(error.response.data?.title === 'Invalid Captcha') {
        toast({
          description: 'We\'re having trouble verifying you\'re a human. Please try again.',
          ...toastErrorConfig
        });

        return;
      }

      if(error.response.data?.title === 'Member Exists') {
        toast({
          description: 'You are already subscribed to the newsletter.',
          ...toastErrorConfig
        });

        return;
      }

      toast({
        description: 'There was an issue subscribing you to the newsletter.',
        ...toastErrorConfig
      });
    }
  }
  
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        height={'342px'}
        maxWidth={'410px'}
        overflow={'auto'}
      >
        <ModalCloseButton />

        <Container 
          padding={'60px 40px 40px'}
        >
          {formState !== 'success' ? (
            <>
              <Heading
                variant={'h3'}
                color={'heading-navy-fg'}
                paddingBottom={'16px'}
              >
                Starknet Dev News ✨🗞️
              </Heading>

              <Text 
                variant={'cardBody'}
                color={'heading-navy-fg'}
                paddingBottom={'32px'}
              >
                Receive notifications on Starknet version updates and network status.
              </Text>

              <form onSubmit={handleSubmit}>
                <FormControl isRequired paddingBottom={'20px'}>
                  <FormLabel fontWeight={'700'}>
                    Email
                  </FormLabel>

                  <Input
                    type={'email'}
                    name={'email'}
                    id={'email'}
                    placeholder={'Please enter your email'}
                  />
                </FormControl>

                <Turnstile
                  options={{
                    size: 'invisible'
                  }}
                  ref={captchaRef}
                  siteKey={env.CLOUDFLARE_RECAPTCHA_KEY}
                />

                <Button
                  fontSize={'14px'}
                  isLoading={formState === 'submitting'}
                  padding={'6px 16px'}
                  type={'submit'}
                  variant={'solid'}
                >
                  Submit
                </Button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Text 
                variant={'cardBody'}
                color={'heading-navy-fg'}
              >
                Thank you and may the STARK be with you ✨🗞️
              </Text>
            </div>
          )}
        </Container>
      </ModalContent>
    </Modal>
  );
}

export default RoadmapSubscribeForm;
