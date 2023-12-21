import {
  Box,
  BoxProps as ChakraBoxProps,
  ButtonGroup,
  Container,
  HStack,
  Stack,
  Text,
  Icon,
  Link,
  Divider,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { IconButton } from "@ui/IconButton";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from "react-icons/si";
import { StarknetLogo } from "../Logo/StarknetLogo";

type RootProps = {
  children: React.ReactNode;
} & ChakraBoxProps & {
    seo: {
      footerText: string;
    };
  };

const Root = ({ children, seo, ...rest }: RootProps) => {
  return (
    <Box as="footer" role="contentinfo" {...rest} margin="auto" maxWidth="auto">
      <Box>
        <Box display="flex" justifyContent="center">
          <Container
            as="footer"
            role="contentinfo"
            maxWidth="auto"
            px="0"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            alignItems={{ base: "flex-start", md: "center" }}
          >
            <Stack
              spacing={{ base: "12", md: "8" }}
              direction={{ base: "column-reverse", lg: "row" }}
              py={{ base: "12", md: "16" }}
              justify="space-between"
              maxW="1200"
              px="30px"
            >
              {children}
            </Stack>
            <Divider
              borderColor={useColorModeValue(
                "footer-divider-bg",
                "footer-divider-bg"
              )}
              marginBottom="0px"
              opacity="1"
            />
            <Box
              background="bg.main"
              _dark={{
                background: "darkMode.bg2",
              }}
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Stack
                pb="38px"
                pt="38px"
                justify="space-between"
                direction={{ base: "column", md: "row" }}
                align={{ base: "start", md: "center" }}
                maxW="1200"
                width="100%"
                px="30px"
              >
                <HStack
                  justify={{ base: "space-between", sm: "start" }}
                  width={{ base: "full", sm: "auto" }}
                  spacing="0"
                  order={{ base: 2, lg: 1 }}
                >
                  <Box pr="24px">
                    <StarknetLogo height="32" />
                  </Box>
                  <Center height="32px">
                    <Divider
                      orientation="vertical"
                      borderColor={useColorModeValue(
                        "footer-divider-bg",
                        "footer-divider-bg"
                      )}
                      opacity="1"
                    />
                  </Center>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue(
                      "footer-link-fg",
                      "footer-link-fg"
                    )}
                    paddingLeft="24px"
                  >
                    {seo?.footerText}
                  </Text>
                </HStack>
                <ButtonGroup
                  order={{ base: 1, lg: 2 }}
                  paddingBottom={{ base: "36px", md: 0 }}
                >
                  <IconButton
                    as="a"
                    href="https://starknet.io/discord"
                    aria-label="Discord"
                    openInNewTab={true}
                    icon={<SiDiscord fontSize="1.25rem" />}
                    size="small"
                    marginRight="16px"
                  />
                  <IconButton
                    as="a"
                    href="https://github.com/starknet-io/starknet-website"
                    aria-label="GitHub"
                    openInNewTab={true}
                    icon={<SiGithub fontSize="1.25rem" />}
                    size="small"
                    marginRight="16px"
                  />
                  <IconButton
                    as="a"
                    href="https://www.youtube.com/channel/UCnDWguR8mE2oDBsjhQkgbvg"
                    aria-label="YouTube"
                    openInNewTab={true}
                    icon={<SiYoutube fontSize="1.25rem" />}
                    size="small"
                    marginRight="16px"
                  />
                  <IconButton
                    as="a"
                    href="https://twitter.com/Starknet"
                    aria-label="Twitter"
                    openInNewTab={true}
                    icon={<SiTwitter fontSize="1.25rem" />}
                    size="small"
                  />
                </ButtonGroup>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

type ColumnProps = {
  title: string;
  children: React.ReactNode;
  color?: string;
};

const Column = ({ title, children, color }: ColumnProps) => {
  return (
    <Stack bg={color} spacing="4" minW={{ lg: "40" }}>
      {/* <Text fontSize="sm" fontWeight="semibold" color="subtle">
        {title}
      </Text> */}
      <Heading
        variant="h4"
        color={useColorModeValue("footer-header-fg", "white")}
        fontWeight="500"
      >
        {title}
      </Heading>
      {children}
    </Stack>
  );
};
type FooterLinkProps = {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
};

const FooterLink = ({ children, href, isExternal }: FooterLinkProps) => {
  return (
    <Link
      fontSize="sm"
      px="0"
      bg="navbar-link-bg"
      color={useColorModeValue("footer-link-fg", "footer-link-fg")}
      borderRadius={18}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
      gap="4px"
      _hover={{
        color: "navbar-link-hover-fg",
        bg: "navbar-link-hover-bg",
      }}
      _active={{
        color: "navbar-link-active-fg",
        svg: {
          color: "navbar-link-active-fg",
        },
      }}
      href={href}
    >
      {children}
      {isExternal && <Icon boxSize="14px" as={HiArrowUpRight} />}
    </Link>
  );
};

export { Root, Column, FooterLink };
