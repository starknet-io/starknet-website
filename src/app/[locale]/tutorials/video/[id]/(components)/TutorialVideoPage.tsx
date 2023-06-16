"use client";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import * as GridCard from "@ui/Card/GridCard";
import { Tutorial } from "workspaces/cms-data/src/tutorials";
import { MarkdownBlock } from "src/blocks/MarkdownBlock";
import moment from "moment";

export interface AutoProps {
  readonly params: LocaleParams & {
    readonly id: string;
  };
}

type Props = AutoProps & {
  readonly tutorial: Tutorial;
};

function TutorialVideoPage({ tutorial, params }: Props): JSX.Element | null {
  const videoId = tutorial.url.split("/").pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const date = moment(tutorial.published_at).format("MMM DD, YYYY");

  return (
    <PageLayout
      sectionHeaderTitle={tutorial.title}
      breadcrumbs={
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${params.locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${params.locale}/developers`}
              fontSize="sm"
              noOfLines={1}
            >
              Developers
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/${params.locale}/tutorials`}
              fontSize="sm"
              noOfLines={1}
            >
              Tutorials
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize="sm">{tutorial.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      main={
        <div>
          <Box
            width="100%"
            height={{ base: "250px", sm: "350px", md: "500px", lg: "650px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              frame-border="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          <Flex mb="4" mt="4" direction="row">
            <GridCard.Content
              title={""}
              author={tutorial.author}
              date={date}
              difficulty={tutorial.difficulty}
              direction="row"
            />
            <Flex height="40px" ml="24px">
              {Array.isArray(tutorial.tags) &&
                tutorial.tags.map((tag, i) => {
                  // only show max 2 tags
                  if (i > 1) return null;
                  return (
                    <Tag key={i} variant="listCard">
                      {tag}
                    </Tag>
                  );
                })}
            </Flex>
          </Flex>
          <MarkdownBlock body={tutorial.description as string} />
        </div>
      }
    />
  );
}

export default TutorialVideoPage;
