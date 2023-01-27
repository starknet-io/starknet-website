import {
  Box,
  HStack,
  Stack,
  Link,
  Divider,
  Image,
  Container,
} from "src/libs/chakra-ui";
import { Text } from "@ui/Typography/Text";

import NextLink from "next/link";
import { Heading } from "@ui/Typography/Heading";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import { CardLink } from "./CardLink";

type Props = {
  linkLabel: string;
  linkHref: string;
  title: string;
  description: string;
};

export const CommunityCard = ({
  linkHref = "/community/",
  linkLabel = "Get involved",
  description,
  title,
}: Props) => {
  return (
    <Container maxW="1104px">
      <CardLink href={linkHref}>
        <CardGradientBorder borderRadius="104px" padding="0">
          <Box
            bg="card-bg"
            px={{ base: "24px", md: "48px" }}
            py="8"
            borderRadius="104px"
            // borderWidth="1px"
            // borderColor="card-br"
            boxShadow="none"
          >
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
            >
              <HStack spacing="10">
                <Image
                  src="/assets/cards/user-group.svg"
                  alt="icon"
                  boxSize={{ base: "12", sm: "72px" }}
                />

                <Divider orientation="vertical" />
                <Box>
                  <HStack>
                    <Heading
                      color="heading-navy-fg"
                      mb="0"
                      variant="h4"
                      as="h4"
                      lineHeight="1em"
                      fontSize="18px"
                      pb="2"
                    >
                      {title}
                    </Heading>
                  </HStack>
                  <Text variant="baseRegular" color="muted" fontSize="sm">
                    {description}
                    <Link
                      ml="8px"
                      fontSize="16px"
                      as={NextLink}
                      variant="card"
                      href={linkHref}
                    >
                      {linkLabel} &rarr;
                    </Link>
                  </Text>
                </Box>
              </HStack>
            </Stack>
          </Box>
        </CardGradientBorder>
      </CardLink>
    </Container>
  );
};
