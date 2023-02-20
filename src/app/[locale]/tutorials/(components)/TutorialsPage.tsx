"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Grid,
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
import * as GridCard from "@ui/Card/GridCard";
import { Tag } from "@ui/Tag/Tag";
import { titleCase } from "src/utils/utils";
import moment from "moment";
import { useRouter } from "next/navigation";

export interface Props extends LocaleProps {
  readonly params: LocaleParams & {
    readonly course?: string;
  };
  readonly env: {
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function TutorialsPage({ params, env }: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  return (
    <Box>
      <InstantSearch searchClient={searchClient} indexName="web_tutorials_dev">
        <Configure
          hitsPerPage={40}
          facetsRefinements={{
            locale: [params.locale],
            course: params.course != null ? [params.course] : [],
          }}
        />

        <PageLayout
          sectionHeaderTitle="Tutorials"
          sectionHeaderDescription="Learn about Starknet by developers, for developers"
          breadcrumbs={
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink fontSize="sm" href="#">
                  Developers
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink fontSize="sm" href="#">
                  Tutorials
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          }
          leftAside={
            <Box minH="xs" display={{ base: "none", lg: "block" }}>
              <CustomType />
              <CustomCourse params={params} />
              <CustomDifficulty />
              <CustomTags />
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

function CustomDifficulty() {
  const { items, refine } = useRefinementList({
    attribute: "difficulty",
    sortBy: ["name:asc"],
  });

  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Level
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Button
              justifyContent="flex-start"
              size="sm"
              variant={item.isRefined ? "filterActive" : "filter"}
              onClick={() => refine(item.value)}
              key={i}
            >
              {label}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
}

function CustomType() {
  const { items, refine } = useRefinementList({
    attribute: "type",
    sortBy: ["name:asc"],
  });

  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Type
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Button
              size="sm"
              variant={item.isRefined ? "filterActive" : "filter"}
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
function CustomTags() {
  const { items, refine } = useRefinementList({
    attribute: "tags",
    sortBy: ["name:asc"],
  });

  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Tags
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {items.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Button
              size="sm"
              variant={item.isRefined ? "filterActive" : "filter"}
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

const courses = [
  {
    label: "Bytesized series",
    value: "bytesized_series",
  },
  {
    label: "Starknet edu series",
    value: "starknet_edu",
  },
  {
    label: "Cairo 101",
    value: "cairo_101",
  },
  {
    label: "Cairo workshops",
    value: "cairo_workshops",
  },
  {
    label: "Hackathon Feb 22",
    value: "hackathon_feb_22",
  },
  {
    label: "Hackathon Oct 22",
    value: "hackathon_oct_22",
  },
];

function CustomCourse({ params }: Pick<Props, "params">) {
  const router = useRouter();

  return (
    <Box mt={8}>
      <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
        Courses / series
      </Heading>
      <VStack dir="column" alignItems="stretch">
        {courses.map((item, i) => {
          let label = titleCase(item.label);
          return (
            <Button
              size="sm"
              variant={item.value === params.course ? "filterActive" : "filter"}
              onClick={() => {
                if (item.value === params.course) {
                  router.replace(`/${params.locale}/tutorials`);
                } else {
                  router.replace(`/${params.locale}/tutorials/${item.value}`);
                }
              }}
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

// function CustomTags() {
//   const { items, refine } = useRefinementList({
//     attribute: "tags",
//     sortBy: ["name:asc"],
//   });

//   return (
//     <Box mt={8} maxHeight="300px" overflowY="auto">
//       <Heading as="h4" variant={"h6"} fontSize="14px" mb={4}>
//         Tags
//       </Heading>
//       <VStack dir="column" alignItems="stretch">
//         {items.map((item, i) => {
//           let label = titleCase(item.label);

//           return (
//             <Button
//               size="sm"
//               variant={item.isRefined ? "filterActive" : "filter"}
//               onClick={() => refine(item.value)}
//               key={i}
//               justifyContent="flex-start"
//             >
//               {label}
//             </Button>
//           );
//         })}
//       </VStack>
//     </Box>
//   );
// }

type Tutorial = {
  readonly id?: string;
  readonly type: "youtube" | "blog" | "github";
  readonly url: string;
  readonly image?: string;
  readonly title: string;
  readonly author?: string;
  readonly published_at: string;
  readonly difficulty?: "beginner" | "intermediate" | "advanced";
  readonly tags?: string[];
  readonly locale: string;
  readonly filepath: string;
};

function CustomHits() {
  const { hits, showMore, isLastPage } = useInfiniteHits<Tutorial>();

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(280px, 1fr))",
          lg: "repeat(auto-fit, minmax(280px, 1fr))",
          xl: "repeat(auto-fit, minmax(280px, 299px))",
        }}
        templateRows="1fr"
        columnGap="24px"
        rowGap="48px"
      >
        {hits.map((hit) => {
          const date = moment(hit.published_at).format("MMM DD, YYYY");
          // let tags: string[] = [];
          // if (hit.difficulty) tags.push(hit.difficulty);
          // if (hit.type) tags.push(hit.type);

          return (
            <GridCard.Root href={hit.url} key={hit.title}>
              <GridCard.Image url={hit.image} type={hit.type} />
              <GridCard.Body>
                {/* <GridCard.Category category={hit.tags} /> */}
                <GridCard.Content
                  title={hit.title}
                  author={hit.author}
                  date={date}
                  difficulty={hit.difficulty}
                />
              </GridCard.Body>
              <GridCard.Footer>
                <HStack spacing="8px">
                  {hit?.tags?.map((tag, i) => {
                    // only show max 2 tags
                    if (i > 1) return null;
                    return (
                      <Tag key={i} variant="listCard">
                        {tag}
                      </Tag>
                    );
                  })}
                </HStack>
              </GridCard.Footer>
            </GridCard.Root>
          );
        })}
      </Grid>
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
