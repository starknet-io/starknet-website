"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Box,
  Container,
  Flex,
  HStack,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { Button } from "@ui/Button";
import moment from "moment";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { useMemo, useState, useEffect } from "react";
import algoliasearch from "src/libs/algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  useRefinementList,
} from "src/libs/react-instantsearch-hooks-web";
import type { Category } from "@starknet-io/cms-data/src/categories";
import { PageLayout } from "@ui/Layout/PageLayout";
import { useRouter } from "next/navigation";
import type { Topic } from "@starknet-io/cms-data/src/topics";
import { useInfiniteHits } from "react-instantsearch-hooks-web";
import { Heading } from "@ui/Typography/Heading";
import Link from "next/link";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../../(components)/MobileFilter/MobileFiltersButton";
import useMobileFiltersDrawer from "../../(components)/MobileFilter/useMobileFiltersDrawer";
import MobileFiltersDrawer from "../../(components)/MobileFilter/MobileFiltersDrawer";
export interface Props extends LocaleProps {
  readonly categories: readonly Category[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly category?: string;
  };
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

export function PostsPage({
  env,
  params,
  categories,
  topics,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  // const searchParams = useSearchParams();
  const category = categories.find((c) => c.slug === params.category);

  return (
    <Box pt="18" minH="100vh">
      <InstantSearch
        searchClient={searchClient}
        indexName={`web_posts_${env.ALGOLIA_INDEX}`}
      >
        <Configure
          hitsPerPage={50}
          facetsRefinements={useMemo(
            () => ({
              locale: [params.locale],
              // topic: searchParams.get("topic")?.split(",") ?? [],
              category: category != null ? [category.id] : [],
            }),
            [category, params.locale]
          )}
        />
        <Container maxW="container.xl" mb={4}>
          <CustomCategories categories={categories} params={params} />
        </Container>
        <PostsPageLayout
          categories={categories}
          params={params}
          topics={topics}
        />
      </InstantSearch>
    </Box>
  );
}

const PostsPageLayout = ({
  params,
  categories,
  topics,
}: Pick<Props, "categories" | "params" | "topics">) => {
  const category = categories.find((c) => c.slug === params.category);

  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const { items: topicsItems, refine: refineTopics } = useRefinementList({
    attribute: "topic",
    limit: 50,
    sortBy: ["count:desc"],
  });

  function mapSelectedFilters() {
    let result = {};
    let refinedValues1 = topicsItems
        .filter(item => item.isRefined)
        .map(item => item.value);
    if (refinedValues1.length > 0) {
        result["topic"] = refinedValues1;
    }
    return result;
  }

  const handleFilterClick = (attribute: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (!newFilters[attribute]) {
        newFilters[attribute] = [];
      }

      if (newFilters[attribute].includes(value)) {
        newFilters[attribute] = newFilters[attribute].filter((val) => val !== value);
      } else {
        newFilters[attribute].push(value);
      }
      return newFilters;
    });
  };

  const { isOpen, onOpen, onClose, setFilterOpen } =
    useMobileFiltersDrawer(topicsItems);
  
  const handleModalClose = () => {
    onClose();
    setSelectedFilters(mapSelectedFilters());
  }

  const handleApplyChanges = () => {
    if (selectedFilters["topic"]?.length) {
      selectedFilters["topic"].map((topic) => {
        refineTopics(topic);
      });
    } else {
      topicsItems.map((topic) => {
        topic.isRefined && refineTopics(topic.value);
      });
    }
  }

  const handleApplyFilters = () => {
    handleApplyChanges();
    setFilterOpen(false);
  };

  const handleClearFilters = () => {
    handleApplyChanges();
    setSelectedFilters({});
  };

  let filtersCounts = useMemo(() => {
    let topicsItemsCount = topicsItems.reduce((accumulator, currentObject) => {
      if (currentObject.isRefined) {
          return accumulator + 1;
      } else {
          return accumulator;
      }
    }, 0);
    return topicsItemsCount;
  }, [topicsItems]);

  return (
    <PageLayout
      sectionHeaderTitle={category != null ? category.name : "All posts"}
      sectionHeaderBottomContent={
        <MobileFiltersButton
          filtersCount={filtersCounts}
          onClick={onOpen}
          style={{
            marginBlock: "16px",
          }}
        />
      }
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
              href={`/${params.locale}/community`}
              fontSize="sm"
              noOfLines={1}
            >
              Community
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize="sm">
            <BreadcrumbLink fontSize="sm">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <Heading mt="-24px" color="heading-navy-fg" variant="h4" mb="1rem">
            Topics
          </Heading>
          <CustomTopics
            topics={topics}
            items={topicsItems}
            refineTopics={refineTopics}
          />
        </Box>
      }
      main={
        <Box>
          <CustomHits categories={categories} params={params} />
          <MobileFiltersDrawer isOpen={isOpen} onClose={handleModalClose}>
            <CustomTopics
              topics={topics}
              items={topicsItems}
              refineTopics={handleFilterClick}
              selectedFilters={selectedFilters}
              isDesktop={false}
            />
            <Button variant="solid" fullWidth mb={2} mt={6} onClick={handleApplyFilters}>Apply filters</Button>
            <Button variant="outline" onClick={handleClearFilters} fullWidth>Clear all</Button>
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};

type CustomTopicsProps = {
  topics: readonly Topic[];
  items: RefinementListProps["items"];
  refineTopics: (value: string) => void;
  selectedFilters: any;
  isDesktop?: boolean;
};
function CustomTopics({
  topics,
  items,
  refineTopics,
  selectedFilters,
  isDesktop = true
}: CustomTopicsProps) {
  // const router = useRouter();
  // const pathname = usePathname()!;
  // const searchParams = useSearchParams();
  // const topicSet = useMemo(() => {
  //   return new Set(searchParams.get("topic")?.split(",") ?? []);
  // }, [searchParams]);
  const checkIfFilterExists = (role: string, filter: string, selectedFilters: { [key: string]: string[] }) => {
    const rolesA = selectedFilters[filter];
    return rolesA && rolesA.includes(role);
  };
  const topicsDict = useMemo(() => {
    return topics.reduce((acc, topic) => {
      acc[topic.id] = topic;
      return acc;
    }, {} as Record<string, Topic>);
  }, [topics]);

  const validTopics = useMemo(() => {
    return items.filter((topic) => topicsDict[topic.value] != null);
  }, [topicsDict, items]);

  return (
    <Box display="flex" flexWrap="wrap" gap="8px" columnGap="4px" width="100%">
      {validTopics.map((topic, i) => (
        <Button
          size="sm"
          px="8px"
          // variant={topicSet.has(topic.value) ? "filterActive" : "filter"}
          variant={isDesktop ? (topic.isRefined ? "filterActive" : "filter") : checkIfFilterExists(topic.label, "topic", selectedFilters) ? "filterActive" : "filter"}
          onClick={() => {
            isDesktop ? refineTopics(topic.value) : refineTopics("topic", topic.label);

            // const params = new URLSearchParams(searchParams);

            // if (topicSet.has(topic.value)) {
            //   topicSet.delete(topic.value);
            // } else {
            //   topicSet.add(topic.value);
            // }

            // if (topicSet.size === 0) {
            //   router.replace(pathname);
            // } else {
            //   params.set("topic", Array.from(topicSet.values()).join(","));
            //   router.replace(`${pathname}?${params.toString()}`);
            // }
          }}
          key={i}
        >
          {topicsDict[topic.value].name}
        </Button>
      ))}
    </Box>
  );
}

function CustomCategories({
  categories,
  params,
}: Pick<Props, "categories" | "params">) {
  const router = useRouter();

  return (
    <Flex
      as="ul"
      sx={{ overflowX: "auto" }}
      gap="24px"
      borderBottomWidth="1px"
      borderColor="tabs-main-br"
      width="100%"
    >
      <Box>
        <Button
          variant="category"
          as="a"
          isActive={params.category == null}
          onClick={() => {
            router.replace(`/${params.locale}/posts`);
          }}
        >
          All posts
        </Button>
      </Box>
      {categories.map((category) => (
        <Box key={category.slug}>
          <Button
            variant="category"
            as="a"
            isActive={category.slug === params.category}
            onClick={() => {
              if (category.slug === params.category) return;

              router.replace(`/${params.locale}/posts/${category.slug}`);
            }}
          >
            <> {category.name}</>
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

type VideoData = {
  etag: string;
  id: string;
  kind: string;
  snippet: object;
  contentDetails: {
    duration: string;
  }
}

type Video = {
  data: VideoData;
  url: string;
  id: string;
}

type Hit = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string;
  readonly short_desc: string;
  readonly locale: string;
  readonly filepath: string;
  readonly post_type: string;
  readonly published_date: string;
  readonly featured_post: boolean;
  readonly blocks: Array<Block>;
  readonly video: Video;
  readonly timeToConsume: string;
};

interface Block {
  body?: string;
  type?: string;
}

function CustomHits({ categories, params }: Pick<Props, "categories" | "params">) {
  const { hits, showMore, isLastPage } = useInfiniteHits<Hit>();
  const [featuredHit, setFeaturedHit] = useState<Hit>();
  const [filteredHits, setFilteredHits] = useState<Hit[]>([]);
  const [featuredHitDate, setFeaturedHitDate] = useState<string>();
  const [featuredHitCategory, setFeaturedHitCategory] = useState<Category>(categories[0]);

  useEffect(() => {
    const handleResize = () => {
      if (hits) {
        if (window.innerWidth > 992 && hits.some(obj => obj.featured_post === true)) {
          setFilteredHits(hits.filter(hit => hit.featured_post !== true));
          setFeaturedHit(hits.find(hit => hit.featured_post === true))
        } else if (window.innerWidth > 992 && !hits.some(obj => obj.featured_post === true)) {
          setFeaturedHit(hits[0])
          setFilteredHits(hits.slice(1));
        } else {
          setFilteredHits(hits);
        }
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize)
  }, [hits])
  useEffect(() => {
    if (hits && featuredHit) {
      setFeaturedHitDate(moment(featuredHit.published_date).format("MMM DD, YYYY"));
      setFeaturedHitCategory(categories.find((c) => c.id === featuredHit.category) || categories[0])
    }

  }, [hits, categories, featuredHit])
  return (
    <>
      {featuredHit && window.innerWidth > 992 && <Box mb="48px">
        <ArticleCard.Root
          href={`/${featuredHit?.locale}/posts/${featuredHit?.category}/${featuredHit?.slug}`}
          type="featured"
        >
          <ArticleCard.Image url={featuredHit?.image} type="featured" />

          <ArticleCard.Body type="featured">
            <ArticleCard.Category category={featuredHitCategory} />
            <ArticleCard.Content
              title={featuredHit?.title}
              excerpt={featuredHit?.short_desc}
              type="featured"
            />
            <ArticleCard.Footer
              postType={featuredHit?.post_type}
              publishedAt={featuredHitDate}
              timeToConsume={featuredHit?.timeToConsume}
              type="featured"
            />
          </ArticleCard.Body>
        </ArticleCard.Root>
      </Box>}
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
        {filteredHits.map((hit, i) => {
          // todo: add a featured image once we have image templates in place
          const date = moment(hit.published_date).format("MMM DD, YYYY");
          const category = categories.find((c) => c.id === hit.category);

          return (
            <ArticleCard.Root
              href={`/${hit.locale}/posts/${category?.slug}/${hit.slug}`}
              key={i}
            >
              <ArticleCard.Image url={hit.image} />

              <ArticleCard.Body>
                {category && <ArticleCard.Category category={category} />}
                <ArticleCard.Content
                  title={hit.title}
                  excerpt={hit.short_desc}
                />
              </ArticleCard.Body>
              <ArticleCard.Footer
                postType={hit.post_type}
                publishedAt={date}
                timeToConsume={hit.timeToConsume}
              />
            </ArticleCard.Root>
          );
        })}
      </Grid>
      {!isLastPage && (
        <HStack mt="24">
          <Divider />
          <Button
            onClick={() => showMore()}
            flexShrink={0}
            variant="outlineLight"
          >
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
