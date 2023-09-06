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
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { Heading } from "@ui/Typography/Heading";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";

export interface Props {
  readonly params: LocaleParams & {
    readonly id: string;
  };
  readonly tutorial: Tutorial;
}

function TutorialVideoPage({ tutorial, params }: Props): JSX.Element | null {
  const videoId = tutorial.url.split("/").pop();
  const date = moment(tutorial.published_at).format("MMM DD, YYYY");

  return (
    <PageLayout
      // sectionHeaderTitle={tutorial.title}
      breadcrumbs={
        <Breadcrumbs
          locale={params.locale}
          items={[
            {
              label: "Developers",
              link: `/${params.locale}/developers`,
            },
            {
              label: "Tutorials",
              link: `/${params.locale}/tutorials`,
            },
            {
              label: tutorial.title,
              link: "",
            },
          ]}
        />
      }
      main={
        <Box>
          <Box
            sx={{
              ".youtubeContainer": {
                marginBottom: "xl",
              },
            }}
            pb="xl"
            borderBottom="1px solid"
            borderColor="border.divider"
          >
            <YoutubePlayer
              videoId={videoId}
              style={{
                borderRadius: "12px",
              }}
            />
            <Heading variant="h2" as="h1" size="xl">
              {tutorial.title}
            </Heading>
            <Flex mt="lg" direction="row">
              <GridCard.Content
                title={""}
                authors={tutorial.authors}
                date={date}
                difficulty={tutorial.difficulty}
                variant="horizontal"
                tags={tutorial.tags}
              />
            </Flex>
          </Box>
          <Box pt="lg" pb="sm">
            <MarkdownBlock body={tutorial.description as string} />
          </Box>
        </Box>
      }
    />
  );
}

export default TutorialVideoPage;
