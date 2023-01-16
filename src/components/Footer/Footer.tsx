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
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { StarknetLogo } from "../Logo/StarknetLogo";

type RootProps = {
  children: React.ReactNode;
} & ChakraBoxProps;

const Root = ({ children, ...rest }: RootProps) => {
  return (
    <Box as="footer" role="contentinfo" {...rest}>
      <Box>
        <Box>
          <Container as="footer" role="contentinfo">
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
                spacing="8"
              >
                <StarknetLogo height="30" />
                <Text fontSize="xs" color="subtle">
                  &copy; {new Date().getFullYear()} Starknet. All rights
                  reserved.
                </Text>
              </HStack>
              <ButtonGroup variant="ghost">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Discord"
                  icon={<FaDiscord fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="YouTube"
                  icon={<FaYoutube fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="1.25rem" />}
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
};

const Column = ({ title, children }: ColumnProps) => {
  return (
    <Stack spacing="4" minW={{ lg: "40" }}>
      <Text fontSize="sm" fontWeight="semibold" color="subtle">
        {title}
      </Text>
      <Stack spacing="3" shouldWrapChildren>
        {children}
      </Stack>
    </Stack>
  );
};
type LinkProps = {
  title: string;
  href: string;
};

const Link = ({ title, href }: LinkProps) => {
  return (
    <Button size="sm" as="a" variant="link" href={href}>
      {title}
    </Button>
  );
};

export { Root, Column, Link };
