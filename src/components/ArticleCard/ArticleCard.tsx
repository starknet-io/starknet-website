import React from "react";
import {
  Avatar,
  Badge,
  Box,
  HStack,
  Image,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Text } from "../../components/Typography/Text";

type Props = {
  id?: string | number;
  img?: string;
  imgAlt?: string;
  category?:
    | "engineering"
    | "community-calls"
    | "stark_struct"
    | "stark_math"
    | "stark_at_home"
    | "governance"
    | "community_and_events";
  title?: any;
  excerpt?: any;
  avatarUrl?: string;
  author?: string;
  publishedAt?: string;
  href?: string;
  variant?: "default" | "lg";
};

export const ArticleCard = ({
  id,
  img,
  imgAlt,
  category,
  title,
  excerpt,
  avatarUrl,
  author,
  publishedAt,
  href,
}: Props) => {
  return (
    <Link href={href} key={id} _hover={{ textDecor: "none" }} role="group">
      <Box
        p="0"
        bg="bg-surface"
        boxShadow={mode("lg", "lg-dark")}
        _groupHover={{ boxShadow: mode("xl", "xl-dark") }}
        transition="all 0.2s"
        height="full"
        borderRadius={8}
      >
        <Stack
          spacing={{ base: "8", lg: "16" }}
          justify="space-between"
          height="full"
        >
          <Stack spacing="8">
            <Box overflow="hidden">
              <Image
                src={img}
                alt={imgAlt}
                width="full"
                height="15rem"
                objectFit="cover"
                borderTopRadius={8}
              />
            </Box>
            <Box pl={6} pr={6}>
              <Box pb={3}>
                <Badge variant={category}>{category}</Badge>
              </Box>

              <Stack spacing="3">
                <Text variant="baseExtraBold">{title}</Text>
                <Text variant="baseRegular">{excerpt}</Text>
              </Stack>
            </Box>
          </Stack>
          <Box p={6}>
            <HStack>
              <Avatar src={avatarUrl} boxSize="10" />
              <Box fontSize="sm">
                <Text fontWeight="medium">{author}</Text>
                <Text color="muted">{publishedAt}</Text>
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};
