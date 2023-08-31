import {
  Box,
  ColorModeProvider,
  Image,
  Img,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

type Props = {
  title: string;
  description: string | React.ReactNode;
  image: string;
  buttonText?: string;
  buttonUrl?: string;
  onButtonClick?: () => void;
  leftBoxMaxWidth?: number;
};

function fixhyphens(text: string) {
  return text.replace(/-/g, "‑");
}

export const HeroImage = ({
  title = "Dapps",
  image = "/assets/ecosystem/bridges.svg",
  description = "Starknet sits on top of Ethereum as a layer 2 network. It uses technology called 'STARK Proofs'  of transactions.",
  buttonText,
  buttonUrl,
  onButtonClick,
}: Props) => {
  return (
    <ColorModeProvider value="light">
      <Box
        position="relative"
        zIndex={0}
        overflow="hidden"
        bgGradient="linear(315deg, #F9E8E8 0%, #CDCDE8 100%)"
        paddingBottom="500px"
        marginTop="-90px"
        paddingTop="140px"
        clipPath="polygon(100% 0, 100% 80%, 0 100%, 0 0)"
      >
        <Box
          position="absolute"
          height="100%"
          width="100%"
          zIndex={1}
          opacity={0.5}
          marginTop="-140px"
        >
          <Img
            src="/lines.svg"
            alt="lines"
            objectFit="cover"
            height="100%"
            width="100%"
            objectPosition={{
              base: "30%",
              lg: "50% 0px",
            }}
          />
        </Box>
        <Box
          paddingTop={{
            base: "0",
            md: "3xl",
          }}
          paddingX={{
            base: "page.left-right.base",
            md: "3xl",
            lg: "4xl",
          }}
          paddingBottom="lg"
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent={{ base: "flex-start", md: "space-between" }}
          alignItems={{
            md: "center",
          }}
          gap={{ base: "lg", md: "auto" }}
          zIndex={2}
          position="relative"
          maxW="contentMaxW.xl"
          marginX="auto"
        >
          <Box maxW="487px">
            <Heading
              color="heading-navy-fg"
              variant="h1"
              size={useBreakpointValue({ base: "md", md: "lg" })}
              marginBottom="xs"
            >
              {fixhyphens(title)}
            </Heading>
            <Text color="content.accent.value" fontSize="18px">
              {description}
            </Text>
            {buttonText && (buttonUrl || onButtonClick) && (
              <Button
                zIndex={99}
                as={onButtonClick ? undefined : Link}
                href={buttonUrl}
                onClick={onButtonClick}
                mt="2xl"
                variant="solid"
                rightIcon={<HiOutlineArrowRight size="24px" />}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {buttonText}
              </Button>
            )}
          </Box>
          <Image
            boxSize="200px"
            src={image}
            alt="starknet"
            w={{
              base: "auto",
            }}
          />
        </Box>
      </Box>
    </ColorModeProvider>
  );
};
