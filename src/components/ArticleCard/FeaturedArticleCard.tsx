"use client";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "src/libs/chakra-ui";

type Props = {};

export const FeaturedArticleCard = (props: Props) => {
  return (
    <Box pb={8}>
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        spacing={{ base: "12", lg: "16" }}
      >
        <Image borderRadius={8} maxW={600} src="/assets/image.jpg" />
        <Stack spacing={{ base: "8", md: "10" }} width="full" justify="center">
          <Stack spacing={{ base: "4", md: "6" }}>
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              StarkNet Performance Roadmap
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium praesentium eius, ut atque fuga culpa,
              similique sequi cum eos quis dolorum.
            </Text>
            <ArticleCard.Footer
              postType="audio"
              publishedAt="Nov 24, 2022"
              timeToConsume="1hr 2mins"
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
