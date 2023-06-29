import { Container, Box, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { navigate } from "vite-plugin-ssr/client/router";

type Props = {
  type: string;
};

export default function NotFound({ type = "page" }: Props) {
  return (
    <Box as="section" py={{ base: "16", md: "24" }}>
      <Container
        bg="navbar-bg"
        py={{ base: "64px", md: "128px" }}
        borderRadius="24px"
        borderWidth="1px"
        borderColor="card-br"
      >
        <Stack spacing={{ base: "8", md: "10" }} align="center">
          <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
            <Stack spacing="3">
              <Heading variant="h1" color="heading-navy-fg">
                404
              </Heading>
              <Text
                variant="cardBody"
                fontWeight="semibold"
                fontSize="24px"
                color="heading-navy-fg"
              >
                The {`${type}`} you are looking for... isn’t there!
              </Text>
            </Stack>
          </Stack>
          <Button variant="solid" onClick={() => navigate("/")}>Return to homepage</Button>
        </Stack>
      </Container>
    </Box>
  );
}
