"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Button,
  Flex,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useMemo } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useInfiniteHits,
} from "src/libs/react-instantsearch-hooks-web";
import { useRefinementList } from "react-instantsearch-hooks";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { ListCard } from "@ui/ListCards/ListCard";
import { titleCase } from "src/utils/utils";

export interface AutoProps {
  readonly params: {
    readonly locale: string;
  };
}

export interface Props extends AutoProps {
  readonly env: {
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function JobsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch searchClient={searchClient} indexName="web_jobs_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{ locale: [params.locale] }}
        />

        <PageLayout
          sectionHeaderTitle="Jobs"
          sectionHeaderDescription="Find a job with the best teams building on Starknet."
          breadcrumbs={
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Community
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  Jobs
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomRole />
              <CustomType />
            </Box>
          }
          main={
            <Box>
              <CustomHits />
            </Box>
          }
        />
      </InstantSearch>
    </Box>
  );
}

function CustomRole() {
  const { items, refine } = useRefinementList({
    attribute: "job.role",
    sortBy: ["name:asc"],
  });

  return (
    <Box>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Role
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => (
          <Button
            size="sm"
            variant={item.isRefined ? "filterActive" : "filter"}
            onClick={() => refine(item.value)}
            key={i}
            justifyContent="flex-start"
          >
            {item.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

function CustomType() {
  const { items, refine } = useRefinementList({
    attribute: "job.type",
    sortBy: ["name:asc"],
  });

  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Type
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => {
          const label = titleCase(item.label);
          return (
            <Button
              variant={item.isRefined ? "filterActive" : "filter"}
              size="sm"
              onClick={() => refine(item.value)}
              key={i}
              justifyContent="flex-start"
            >
              {label}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
}

interface Contact {
  discord: string;
  email: string;
  logo: string;
  name: string;
  twitter: string;
}
interface Job {
  description: string;
  how_to_apply: string;
  location: string;
  required_experience: string;
  role: string;
  scope: string;
  title: string;
  type: string;
}

type Hit = {
  contact: Contact;
  job: Job;
};

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<Hit>();

  return (
    <>
      <Flex gap={4} direction="column" flex={1}>
        {hits.map((hit, i) => {
          let tags: string[] = [];
          if (hit.job.role) tags.push(hit.job.role);
          if (hit.job.type) tags.push(hit.job.type);
          if (hit.job.location) tags.push(hit.job.location);
          return (
            <ListCard
              variant="job"
              key={i}
              startDateTime={hit.contact.name}
              image={hit.contact.logo}
              title={hit.job.title}
              description={hit.job.description}
              type={tags}
            />
          );
        })}
      </Flex>
      {/* {hits.map((hit, i) => (
          <ArticleCard.Root href="$" key={i}>
            <ArticleCard.Image url={`/static/${hit.image}`} />

            <ArticleCard.Body>
              <ArticleCard.Category category={hit?.category} />
              <ArticleCard.Content title={hit.title} excerpt={hit.short_desc} />
            </ArticleCard.Body>
            <ArticleCard.Footer
              postType="audio"
              publishedAt="Nov 24, 2022"
              duration="1hr 2mins"
            />
          </ArticleCard.Root>
        ))} */}

      {!isLastPage && (
        <HStack mt="24">
          <Divider />
          <Button onClick={() => showMore()} flexShrink={0} variant="secondary">
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
