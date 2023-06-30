import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Flex,
} from "@chakra-ui/react";
import { PageLayout } from "@ui/Layout/PageLayout";
import * as GridCard from "@ui/Card/GridCard";
import { Tutorial } from "@starknet-io/cms-data/src/tutorials";
import moment from "moment";
import { MarkdownBlock } from "src/blocks/MarkdownBlock";

export interface Props {
  readonly params: LocaleParams & {
    readonly id: string;
  };
  readonly tutorial: Tutorial;
}


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
              href={`/${params.locale}`}
              fontSize="sm"
              noOfLines={1}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/${params.locale}/developers`}
              fontSize="sm"
              noOfLines={1}
            >
              Developers
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
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
              authors={tutorial.authors}
              date={date}
              difficulty={tutorial.difficulty}
              direction="row"
              tags={tutorial.tags}
            />
            
          </Flex>
          <MarkdownBlock body={tutorial.description as string} />
        </div>
      }
    />
  );
}

export default TutorialVideoPage;
