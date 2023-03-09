"use client";
import { Box, Container } from "@chakra-ui/react";

interface Props extends React.PropsWithChildren<LocaleProps> {}

export default function VideoTutorialsLayout({ children }: Props) {
  return (
    <Container py={{ base: "4", lg: "17px" }}>
      <Box as="h1" fontSize="lg" mb={10}>
        Video tutorial
      </Box>
      {children}
    </Container>
  );
}
