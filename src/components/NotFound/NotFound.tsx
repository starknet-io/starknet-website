"use client";
import { Container, Box, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { useRouter } from "next/navigation";

type Props = {
  type: string;
};

export default function NotFound({ type = "page" }: Props) {
  const router = useRouter();
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
              <Heading as="h1" variant="h1" color="heading-navy-fg">
                404
              </Heading>
              <Text
                variant="baseSemibold"
                fontSize="24px"
                color="heading-navy-fg"
              >
                The {`${type}`} you are looking for... isn’t there!
              </Text>
            </Stack>
          </Stack>
          <Button onClick={() => router.push("/")}>Return to homepage</Button>
        </Stack>
      </Container>
    </Box>
  );
}
