"use client";

import { Container, Stack } from "@chakra-ui/react";
import { Main } from "@ui/Layout/Main";

type Props = {
  children: React.ReactNode;
};

export const PageContentContainerNoSidebar = ({ children }: Props) => {
  return (
    <Container py="16" flex="1">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", lg: "16" }}
        flex="1"
      >
        <Main>{children}</Main>
      </Stack>
    </Container>
  );
};
