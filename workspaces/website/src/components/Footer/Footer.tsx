import {
  Box,
  BoxProps as ChakraBoxProps,
  ButtonGroup,
  Container,
  Stack,
  Text,
  Icon,
  Link,
  Divider,
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
      footerDisclaimers: {
        text: string;
        link: string;
      }[];
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
              pt={{ base: "12", md: "16" }}
              pb={{ base: "12", md: "0" }}
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
              display={{ base: "flex", md: "none" }}
            />
            <Stack
              pt="40px"
              pb={{ base: "40px", md: "0px" }}
              px="30px"
              gap={{ base: "16px", md: "24px"}}
              display={{ base: "flex", xl: "none" }}
              direction={{ base: "column", md: "row" }}
            >
              {seo?.footerDisclaimers.map((disclaimer, index) => (
                <Text
                  as="a"
                  href={disclaimer.link}
                  key={disclaimer.text + index}
                  fontSize="sm"
                  color={useColorModeValue(
                    "footer-link-fg",
                    "footer-link-fg"
                  )}
                >
                  {disclaimer.text}
                </Text>
              ))}
            </Stack>
            <Divider
              borderColor={useColorModeValue(
                "footer-divider-bg",
                "footer-divider-bg"
              )}
              marginBottom="0px"
              opacity="1"
              display={{ base: "flex", md: "none" }}
            />
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Stack
                pb="60px"
                pt={{ base: "40px", xl: "60px" }}
                direction={{ base: "column", md: "row" }}
                align={{ base: "start", md: "center" }}
                maxW="1200"
                width="100%"
                px="30px"
                justifyContent={{ md: "space-between"}}
              >
                <Stack
                  gap={{ base: "24px", md: "0px" }}
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "start", md: "center" }}
                  height={{ base: "auto", md: "32px" }}
                  spacing="16px"
                >
                  <Box>
                    <StarknetLogo height="32" />
                  </Box>
                  <Divider orientation="vertical" display={{ base: "none", md: "block" }}/>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue(
                      "footer-link-fg",
                      "footer-link-fg"
                    )}
                  >
                    {seo?.footerText}
                  </Text>
                </Stack>
                <Stack
                  display={{ base: "none", xl: "flex" }}
                  direction="row"
                  gap="30px"
                >
                  {seo?.footerDisclaimers.map((disclaimer, index) => (
                    <Text
                      as="a"
                      href={disclaimer.link}
                      key={disclaimer.text + index}
                      fontSize="sm"
                      color={useColorModeValue(
                        "footer-link-fg",
                        "footer-link-fg"
                      )}
                    >
                      {disclaimer.text}
                    </Text>
                  ))}
                </Stack>
                <ButtonGroup
                  order={{ base: 1, lg: 2 }}
                  paddingTop={{ base: "40px", md: "0px" }}
                >
                  <IconButton
                    as="a"
                    href="https://starknet.io/discord"
                    aria-label="Discord"
                    icon={<SiDiscord fontSize="1.25rem" />}
                    size="small"
                    marginRight="16px"
                  />
                  <IconButton
                    as="a"
                    href="https://github.com/keep-starknet-strange/awesome-starknet"
                    aria-label="GitHub"
                    icon={<SiGithub fontSize="1.25rem" />}
                    size="small"
                    marginRight="16px"
                  />
                  <IconButton
                    as="a"
                    href="https://www.youtube.com/channel/UCnDWguR8mE2oDBsjhQkgbvg"
                    aria-label="YouTube"
                    icon={<SiYoutube fontSize="1.25rem" />}
                    size="small"
                    marginRight="16px"
                  />
                  <IconButton
                    as="a"
                    href="https://twitter.com/Starknet"
                    aria-label="Twitter"
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
    <Stack bg={color} spacing="4" minW={{ xl: "40" }}>
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
