import { Box, Divider, Grid, HStack } from "@chakra-ui/react";
import type { Category } from "@starknet-io/cms-data/src/categories";
import type { Topic } from "@starknet-io/cms-data/src/topics";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { Breadcrumbs } from "@ui/Breadcrumbs/Breadcrumbs";
import { Button } from "@ui/Button";
import { CategoryTabs } from "@ui/CategoryTabs/CategoryTabs";
import { Chip } from "@ui/Chip/Chip";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import algoliasearch from "algoliasearch/lite";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import {
  Configure,
  InstantSearch,
  useInfiniteHits,
  useRefinementList,
} from "react-instantsearch-hooks-web";
import { RefinementListProps } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList";
import MobileFiltersButton from "../(components)/MobileFilter/MobileFiltersButton";
import MobileFiltersDrawer from "../(components)/MobileFilter/MobileFiltersDrawer";
import useMobileFiltersDrawer from "../(components)/MobileFilter/useMobileFiltersDrawer";

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
        <CustomCategories
          categories={categories}
          params={params}
          currentCategoryId={category?.id}
        />
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

  const { items: topicsItems, refine: refineTopics } = useRefinementList({
    attribute: "topic",
    limit: 50,
    sortBy: ["count:desc"],
  });

  const {
    isOpen,
    onOpen,
    onClose,
    setFilterOpen,
    handleFilterClick,
    filtersCounts,
    selectedFilters,
    setSelectedFilters,
  } = useMobileFiltersDrawer(topicsItems);

  function mapSelectedFilters() {
    let result: { topic?: string[] } = {};
    let topicsFilteredValues = topicsItems
      .filter((item) => item.isRefined)
      .map((item) => item.value);
    if (topicsFilteredValues.length > 0) {
      result["topic"] = topicsFilteredValues;
    }
    return result;
  }

  const handleModalClose = () => {
    onClose();
    setSelectedFilters(mapSelectedFilters());
  };

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
  };

  const handleApplyFilters = () => {
    handleApplyChanges();
    setFilterOpen(false);
  };

  const handleClearFilters = () => {
    handleApplyChanges();
    setSelectedFilters({});
  };

  return (
    <PageLayout
      sectionHeaderTitle={category != null ? category.name : "All posts"}
      sectionHeaderBorder={true}
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
        <Breadcrumbs
          locale={params.locale}
          items={[
            {
              link: `/${params.locale}/community`,
              label: "Community",
            },
            {
              label: "Blog",
              link: ``,
            },
          ]}
        />
      }
      leftAside={
        <Box minH="xs" display={{ base: "none", lg: "block" }}>
          <Heading color="heading-navy-fg" variant="h3" mb="sm">
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
            <Button
              variant="solid"
              fullWidth
              mb={2}
              mt={6}
              onClick={handleApplyFilters}
            >
              Apply filters
            </Button>
            <Button variant="outline" onClick={handleClearFilters} fullWidth>
              Clear all
            </Button>
          </MobileFiltersDrawer>
        </Box>
      }
    />
  );
};

type CustomTopicsProps = {
  topics: readonly Topic[];
  items: RefinementListProps["items"];
  refineTopics: any;
  selectedFilters?: any;
  isDesktop?: boolean;
};
function CustomTopics({
  topics,
  items,
  refineTopics,
  selectedFilters,
  isDesktop = true,
}: CustomTopicsProps) {
  // const router = useRouter();
  // const pathname = usePathname()!;
  // const searchParams = useSearchParams();
  // const topicSet = useMemo(() => {
  //   return new Set(searchParams.get("topic")?.split(",") ?? []);
  // }, [searchParams]);
  const checkIfFilterExists = (
    role: string,
    filter: string,
    selectedFilters: { [key: string]: string[] }
  ) => {
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
    <Box display="flex" flexWrap="wrap" gap="12px" columnGap="8px" width="100%">
      {validTopics.map((topic, i) => (
        <Chip
          key={topic.value}
          isSelected={
            isDesktop
              ? topic.isRefined
              : checkIfFilterExists(topic.label, "topic", selectedFilters)
          }
          onClick={() => {
            isDesktop
              ? refineTopics(topic.value)
              : refineTopics("topic", topic.label);
          }}
        >
          {topicsDict[topic.value].name} ({topic.count})
        </Chip>
      ))}
    </Box>
  );
}

function CustomCategories({
  categories,
  params,
  currentCategoryId = "all",
}: Pick<Props, "categories" | "params"> & {
  currentCategoryId?: string;
}) {
  const allCategories = [
    {
      id: "all",
      link: `/${params.locale}/posts`,
      label: "All posts",
    },
  ];
  categories.forEach((category) => {
    allCategories.push({
      id: category.id,
      link: `/${params.locale}/posts/${category.slug}`,
      label: category.name,
    });
  });
  return (
    <CategoryTabs
      items={allCategories}
      activeItemId={currentCategoryId}
      withInlinePadding
    />
  );
}

type VideoData = {
  etag: string;
  id: string;
  kind: string;
  snippet: object;
  contentDetails: {
    duration: string;
  };
};

type Video = {
  data: VideoData;
  url: string;
  id: string;
};

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

function CustomHits({
  categories,
  params,
}: Pick<Props, "categories" | "params">) {
  const category = categories.find((c) => c.slug === params.category);
  const { hits, showMore, isLastPage } = useInfiniteHits<Hit>();
  const [featuredHit, setFeaturedHit] = useState<Hit>();
  const [filteredHits, setFilteredHits] = useState<Hit[]>([]);
  const [featuredHitDate, setFeaturedHitDate] = useState<string>();
  const [featuredHitCategory, setFeaturedHitCategory] = useState<Category>(
    categories[0]
  );

  useEffect(() => {
    const handleResize = () => {
      if (hits) {
        if (category) {
          if (
            window.innerWidth > 992 &&
            category.show_custom_featured_post &&
            category.custom_featured_post
          ) {
            setFilteredHits(
              hits.filter((hit) => hit.id !== category.custom_featured_post)
            );
            setFeaturedHit(
              hits.find((hit) => hit.id === category.custom_featured_post)
            );
          } else if (
            window.innerWidth > 992 &&
            !(
              category.show_custom_featured_post &&
              category.custom_featured_post
            )
          ) {
            setFeaturedHit(hits[0]);
            setFilteredHits(hits.slice(1));
          } else {
            setFilteredHits(hits);
          }
        } else {
          if (
            window.innerWidth > 992 &&
            hits.some((obj) => obj.featured_post === true)
          ) {
            setFilteredHits(hits.filter((hit) => hit.featured_post !== true));
            setFeaturedHit(hits.find((hit) => hit.featured_post === true));
          } else if (
            window.innerWidth > 992 &&
            !hits.some((obj) => obj.featured_post === true)
          ) {
            setFeaturedHit(hits[0]);
            setFilteredHits(hits.slice(1));
          } else {
            setFilteredHits(hits);
          }
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [hits]);
  useEffect(() => {
    if (hits && featuredHit) {
      setFeaturedHitDate(
        moment(featuredHit.published_date).format("MMM DD, YYYY")
      );
      setFeaturedHitCategory(
        categories.find((c) => c.id === featuredHit.category) || categories[0]
      );
    }
  }, [hits, categories, featuredHit]);
  return (
    <>
      {featuredHit && window.innerWidth > 992 && (
        <Box mb="24px">
          <ArticleCard.Root
            href={`/${featuredHit?.locale}/posts/${featuredHit?.category}/${featuredHit?.slug}`}
            type="featured"
          >
            <ArticleCard.Image url={featuredHit?.image} type="featured" />

            <ArticleCard.Body type="featured">
              <ArticleCard.Category
                type="featured"
                category={featuredHitCategory}
              />
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
        </Box>
      )}
      <Grid
        templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        templateRows="1fr"
        columnGap="24px"
        rowGap="24px"
      >
        {filteredHits.map((hit, i) => {
          // todo: add a featured image once we have image templates in place
          const date = moment(hit.published_date).format("MMM DD, YYYY");
          const category = categories.find((c) => c.id === hit.category);

          return (
            <ArticleCard.Root
              href={`/${hit.locale}/posts/${category?.slug}/${hit.slug}`}
              key={i}
              sx={{ maxW: { base: "none", lg: "440px", xl: "400px" } }}
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
          <Button onClick={() => showMore()} flexShrink={0} variant="rounded">
            View More
          </Button>
          <Divider />
        </HStack>
      )}
    </>
  );
}
