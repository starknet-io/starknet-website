
import { Container, Stack, ContainerProps } from "@chakra-ui/react";

import { Main } from "@ui/Layout/Main";
// import { Sidebar } from "@ui/Layout/Sidebar";
// import { TableOfContents } from "./TableOfContents";

type Props = {} & ContainerProps;

export const PageContentContainer = ({ children, ...rest }: Props) => {
  return (
    <Container py="16" flex="1" {...rest}>
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
