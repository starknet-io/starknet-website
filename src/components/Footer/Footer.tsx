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
  useColorModeValue
} from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import NextLink from "next/link";
import { IconButton } from "@ui/IconButton";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from "react-icons/si";
import { StarknetLogo } from "../Logo/StarknetLogo";

type RootProps = {
  children: React.ReactNode;
} & ChakraBoxProps;

const Root = ({ children, ...rest }: RootProps) => {
  return (
    <Box as="footer" role="contentinfo" {...rest} margin="auto">
      <Box>
        <Box>
          <Container as="footer" role="contentinfo" maxW="1200">
            <Stack
              spacing={{ base: "12", md: "8" }}
              direction={{ base: "column-reverse", lg: "row" }}
              py={{ base: "12", md: "16" }}
              justify="space-between"
            >
              {children}
            </Stack>
            <Divider borderColor={useColorModeValue("footer-divider-bg", "footer-divider-bg")} marginBottom="8px" opacity="1" />
            <Stack
              pb="38px"
              pt="38px"
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              background="bg.main"
              _dark={{
                background:
                  "darkMode.bg2",
              }}
            >
              <HStack
                justify={{ base: "space-between", sm: "start" }}
                width={{ base: "full", sm: "auto" }}
                spacing="8px"
                order={{ base: 2, lg: 1}}
              >
                <Box pr="24px">
                  <StarknetLogo height="32" />
                </Box>
                <Center height='32px'>
                  <Divider orientation="vertical" borderColor={useColorModeValue("footer-divider-bg", "footer-divider-bg")} opacity="1" />
                </Center>
                <Text fontSize="sm" color={useColorModeValue("footer-link-fg", "footer-link-fg")} paddingLeft="24px">
                © {new Date().getFullYear()} Starknet
                </Text>
              </HStack>
              <ButtonGroup order={{ base: 1, lg: 2}} paddingBottom={{ base: "36px", md: 0}}>
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
                  href="https://github.com/starknet-io/starknet-website"
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
      <Heading variant="h4" color="footer-header-fg" _dark={{ color: "white"}}>{title}</Heading>
      <Stack spacing="1" shouldWrapChildren>
        {children}
      </Stack>
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
      height="36px"
      bg="navbar-link-bg"
      color={useColorModeValue("footer-link-fg", "footer-link-fg")}
      borderRadius={18}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
      mb="4"
      gap={1}
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
      as={NextLink}
      href={href}
    >
      {children}
      {isExternal && <Icon boxSize="14px" as={HiArrowUpRight} />}
    </Link>
  );
};

export { Root, Column, FooterLink };
