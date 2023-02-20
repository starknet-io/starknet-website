import {
  Box,
  BoxProps as ChakraBoxProps,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Stack,
  Text,
} from "src/libs/chakra-ui";
import { NavbarHeading } from "@ui/Layout/Navbar/NavbarHeading";
import { NavBarLink } from "@ui/Layout/Navbar/NavBarLink";
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from "react-icons/si";
import { StarknetLogo } from "../Logo/StarknetLogo";

type RootProps = {
  children: React.ReactNode;
} & ChakraBoxProps;

const Root = ({ children, ...rest }: RootProps) => {
  return (
    <Box as="footer" role="contentinfo" {...rest}>
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
            <Divider />
            <Stack
              pb="12"
              pt="8"
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <HStack
                justify={{ base: "space-between", sm: "start" }}
                width={{ base: "full", sm: "auto" }}
                spacing="8px"
              >
                <StarknetLogo height="30" />
                <Text fontSize="xs" color="subtle">
                  Built with ✨ by the Starknet community.
                </Text>
              </HStack>
              <ButtonGroup variant="ghost">
                <IconButton
                  as="a"
                  href="https://starknet.io/discord"
                  aria-label="Discord"
                  icon={<SiDiscord fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="https://github.com/starknet-io/starknet-website"
                  aria-label="GitHub"
                  icon={<SiGithub fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="https://www.youtube.com/channel/UCnDWguR8mE2oDBsjhQkgbvg"
                  aria-label="YouTube"
                  icon={<SiYoutube fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="https://twitter.com/Starknet"
                  aria-label="Twitter"
                  icon={<SiTwitter fontSize="1.25rem" />}
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
      <NavbarHeading tt="capitalize">{title}</NavbarHeading>
      <Stack spacing="1" shouldWrapChildren>
        {children}
      </Stack>
    </Stack>
  );
};
type LinkProps = {
  href: string;
  isExternal?: boolean;
  children: React.ReactNode;
};

const Link = ({ children, href, isExternal }: LinkProps) => {
  return (
    <NavBarLink isExternal={isExternal} href={href}>
      {children}
    </NavBarLink>
  );
};

export { Root, Column, Link };
