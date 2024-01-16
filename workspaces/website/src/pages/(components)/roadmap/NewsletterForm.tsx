
/**
 * Module dependencies.
 */

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast
} from "@chakra-ui/react";

import { Text } from '@ui/Typography/Text';
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";
import axios from "axios";
import qs from "qs";

/**
 * `Props` type.
 */

export interface Props {
  readonly env: {
    readonly CLOUDFLARE_RECAPTCHA_KEY: string;
  };
  readonly hideHeader?: boolean;
}

/**
 * Export `NewsletterForm` component.
 */

export function NewsletterForm({ env, hideHeader }: Props) {
  const toast = useToast();
  const [formState, setFormState] = useState<'submitting' | 'success' | null>(null);
  const [captchaDone, setCaptchaDone] = useState<boolean>(false);
  const captchaRef = useRef<TurnstileInstance | undefined>(null);

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

        captchaRef.current?.reset();

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
    <>
      {!hideHeader && (
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
        </>
      )}

      {formState !== 'success' ? (
        <form onSubmit={handleSubmit}>
          <FormControl isRequired paddingBottom={'16px'}>
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

          <Box
            sx={{ 
              paddingBottom: '16px',
              iframe: {
                width: '100% !important'
              }
          }}
          >
            <Turnstile
              onSuccess={() => setCaptchaDone(true)}
              options={{
                size: 'normal',
                theme: 'light',
              }}
              ref={captchaRef}
              siteKey={env.CLOUDFLARE_RECAPTCHA_KEY}
              style={{
                width: '100%',
              }}
            />
          </Box>

          <Button
            fontSize={'14px'}
            isDisabled={!captchaDone}
            isLoading={formState === 'submitting'}
            padding={'6px 16px'}
            type={'submit'}
            variant={'solid'}
          >
            Submit
          </Button>
        </form>
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
    </>
  )
};
