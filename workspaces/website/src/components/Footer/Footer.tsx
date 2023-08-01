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
          <Container as="footer" role="contentinfo" maxWidth="auto" px="0">
            <Box
              // spacing={{ base: "12", md: "8" }}
              // direction={{ base: "column-reverse", lg: "row" }}
              py={{ base: "12", md: "16" }}
              // justify="space-between"
              // maxW="1200"
              maxW={1344}
              px="2rem"
              marginInline="auto"
            >
              {children}
            </Box>
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
                      borderColor="footer-divider-bg"
                      opacity="1"
                    />
                  </Center>
                  <Text fontSize="sm" color="footer-link-fg" paddingLeft="24px">
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
  sx?: ChakraProps["sx"];
};

const Column = ({ title, children, color, sx }: ColumnProps) => {
  return (
    <Stack
      bg={color}
      minW={{ lg: "40px" }}
      padding={{
        base: "40px 0px",
        md: "40px 40px 0px",
        lg: "0px 40px 1.5rem",
      }}
      borderColor="footer-divider-bg"
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
      <Heading
        variant="h4"
        color="footer-header-fg"
        fontWeight="500"
        paddingY="1.5rem"
      >
        {title}
      </Heading>
      <Box
        marginTop="0px !important"
        display="flex"
        flexDirection="column"
        gap="1rem"
        sx={{
          "& > *": {
            paddingBlock: "0.5rem",
          },
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
      color="footer-link-fg"
      borderRadius={18}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      textDecoration="none"
      gap="4px"
      _hover={{
        color: "footer-link-hover-fg",
      }}
      _active={{
        color: "footer-link-hover-fg",
        svg: {
          color: "footer-link-hover-fg",
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
