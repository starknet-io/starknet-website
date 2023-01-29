"use client";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { CardGradientBorder } from "@ui/Card/CardGradientBorder";
import { FiBookOpen, FiHeadphones, FiTv } from "react-icons/fi";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "src/libs/chakra-ui";

type Props = {
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  excerpt: string;
  postType: string;
  publishedAt?: string;
  timeToConsume?: string;
};

export const FeaturedArticleCard = (props: Props) => {
  return (
    <CardGradientBorder padding="24px">
      <Box
        bg="card-bg"
        cursor="pointer"
        as="a"
        pb={8}
        width="100%"
        href={props.href}
      >
        <Flex gap="32px">
          <Img
            maxW={{ base: "200px", md: "350px", lg: "550px" }}
            maxH={{ base: "200px", md: "300px", lg: "400px" }}
            objectFit="cover"
            borderRadius={"8px"}
            src={props.imageUrl}
          />
          <Stack
            spacing={{ base: "8", md: "10" }}
            width="full"
            justify="center"
          >
            <Stack spacing={{ base: "4", md: "6" }}>
              <Heading
                color="heading-navy-fg"
                lineHeight="1.1"
                fontWeight="bold"
                fontSize={useBreakpointValue({ base: "48px" })}
              >
                {props.title}
              </Heading>
              <Text fontSize={{ base: "14px" }} color="muted">
                {props.excerpt}
              </Text>
              <ArticleCard.Footer
                postType={props.postType}
                publishedAt={props.publishedAt}
                timeToConsume={props.timeToConsume}
              />
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </CardGradientBorder>
  );
};
