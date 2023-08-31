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
  ChakraProps,
  Button,
} from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from "react-icons/si";
import { StarknetLogo } from "../Logo/StarknetLogo";

const socialLinks = [
  {
    label: "Discord",
    href: "https://starknet.io/discord",
    icon: <SiDiscord fontSize="1.25rem" style={{ marginLeft: "-0.25rem" }} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/starknet-io/starknet-website",
    icon: <SiGithub fontSize="1.25rem" style={{ marginLeft: "-0.5rem" }} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Starknet",
    icon: <SiTwitter fontSize="1.25rem" style={{ marginLeft: "-0.5rem" }} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCQZ3gKgk5YJNKAQgETdZqRQ",
    icon: <SiYoutube fontSize="1.25rem" style={{ marginLeft: "left" }} />,
  },
];

type RootProps = {
  children: React.ReactNode;
} & ChakraBoxProps & {
    seo: {
      footerText: string;
    };
  };

const Root = ({ children, seo, ...rest }: RootProps) => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      {...rest}
      margin="auto"
      maxWidth="auto"
      overflowX="hidden"
      color="fg-default"
      mt={{
        base: "3xl",
        lg: "4xl",
      }}
    >
      <Box display="flex" justifyContent="center">
        <Container as="footer" role="contentinfo" maxWidth="auto" px="0">
          <Box
            maxW="contentMaxW.xl"
            px={{
              base: "page.left-right.base",
              md: "page.left-right.md",
            }}
            marginInline="auto"
          >
            {children}
          </Box>
          <Box
            width="100%"
            maxW="contentMaxW.xl"
            px={{
              base: "page.left-right.base",
              md: "page.left-right.md",
            }}
            marginInline="auto"
          >
            <Stack
              py="3xl"
              justify="space-between"
              direction={{ base: "column", lg: "row" }}
              align={{ base: "start", lg: "center" }}
              width="100%"
              gap={{
                base: "xl",
                lg: "0",
              }}
            >
              <HStack
                justify={{ base: "space-between", sm: "start" }}
                width={{ base: "full", sm: "auto" }}
                spacing="0"
                gap="xl"
              >
                <Box>
                  <StarknetLogo height="32px" />
                </Box>
                <Center height="32px">
                  <Divider
                    orientation="vertical"
                    borderColor="divider-bg"
                    opacity="1"
                  />
                </Center>
                <Text fontSize="sm">{seo?.footerText}</Text>
              </HStack>
              <ButtonGroup
                padding={{ base: "20px 0", md: "8px 0px" }}
                fontSize="14px"
                lineHeight="24px"
                gap={{ base: "8px", md: "3xl" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    as="a"
                    href={social.href}
                    size="small"
                    fontWeight="normal"
                    variant="unstyled"
                    color="fg-default-light"
                    _hover={{
                      color: "fg-default-hover",
                    }}
                    display="flex"
                    gap="0.5rem"
                    padding="0.5rem 0"
                    ml="0px !important"
                  >
                    {social.icon}
                    {social.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

type ColumnProps = {
  title: string;
  children: React.ReactNode;
  color?: string;
  sx?: ChakraProps["sx"];
};

const Column = ({ title, children, color, sx }: ColumnProps) => {
  return (
    <Stack
      bg={color}
      minW={{ lg: "3xl" }}
      padding={{
        base: "40px 0px",
        md: "40px 40px 0px",
        lg: "0px 40px 1.5rem",
      }}
      borderColor="divider-bg"
      _even={{
        borderLeftWidth: {
          base: "0px",
          md: "1px",
          lg: "1px",
        },
      }}
      _odd={{
        borderLeftWidth: { base: "0px", md: "0px", lg: "1px" },
        paddingLeft: { base: "0px", md: "0px", lg: "40px" },
      }}
      borderBottomWidth={{ base: "1px", md: "0px", lg: "0px" }}
      _first={{
        borderLeftWidth: { lg: "0px" },
        paddingLeft: { lg: "0px" },
        paddingTop: { md: "0px" },
      }}
      _last={{
        borderBottomWidth: { base: "0px" },
        paddingRight: { lg: "0px" },
      }}
      sx={{
        "&:nth-of-type(2)": {
          paddingTop: { md: "0px" },
        },
      }}
    >
      <Text
        variant="bodyLg"
        color="content.accent.value"
        fontWeight="500"
        paddingY="sm"
      >
        {title}
      </Text>
      <Box
        marginTop="0px !important"
        display="flex"
        flexDirection="column"
        gap="4px"
        sx={{
          "& > *": {
            paddingBlock: "xs",
          },
          color: "content.default.value",
        }}
      >
        {children}
      </Box>
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
      borderRadius={18}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
      gap="4px"
      color="fg-default-light"
      fontWeight={400}
      _hover={{
        color: "fg-default-hover",
      }}
      _active={{
        color: "fg-default-hover",
        svg: {
          color: "fg-default-hover",
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
