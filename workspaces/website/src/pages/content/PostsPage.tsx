import {
  Box,
  Container,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "react-instantsearch-hooks-web";

import type { Category } from "@starknet-io/cms-data/src/categories";
import type { Topic } from "@starknet-io/cms-data/src/topics";
import { CategoryList } from "@ui/Blog/CategoryList";
import { BlogSection } from "@ui/Blog/BlogSection";
import { FeaturedSection } from "@ui/Blog/FeaturedSection/index";
import { FilterButton } from "@ui/Blog/Filters/Button";
import { PostTypeFilter } from "@ui/Blog/Filters/PostType";
import qs from "qs";
import { TopicList } from "@ui/Blog/TopicsList";

export interface Props extends LocaleProps {
  readonly categories: readonly Category[];
  readonly featuredSections: readonly string[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly postType?: string;
    readonly topicFilters?: readonly string[];
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
  featuredSections,
  topics,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);
  
  const featuredCategories = useMemo(() => {
    return categories.filter(category => featuredSections.includes(category.id))
  }, [categories, featuredSections]);

  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <Box
      pt="18"
      minH="100vh"
      sx={{
        '--posts-gutter': isMobile ? `24px` : `64px`
      }}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName={`web_posts_${env.ALGOLIA_INDEX}_featured`}
      >
        <Configure
          hitsPerPage={50}
          facetsRefinements={useMemo(
            () => ({
              locale: [params.locale],
            }),
            [params.locale]
          )}
        />

        <Container
          maxW="1344px"
          display={'grid'}
          gridTemplateColumns={{
            base: 'auto',
            lg: 'auto  1fr'
          }}
          columnGap={'115px'}
          mt={{
            base: '8px',
            lg: '78px'
          }}
          mb={'4px'}
          padding={`0 var(--posts-gutter) !important`}
          rowGap={'24px'}
        >
          {!isMobile && (
            <>
              <Heading
                alignSelf={'end'}
                color={'heading-navy-fg'}
                fontSize={'20px'}
                variant={'h5'}
              >
                {'Explore'}
              </Heading>

              <PostTypeFilter
                display={'flex'}
                columnGap={'12px'}
                ml={'auto'}
                buttonHref={postType => 
                  `/${params.locale}/content/category/all?${qs.stringify({
                    postType
                  })}`
                }
              />
            </>
          )}

          {!isMobile && (
            <CategoryList categories={categories} params={params} />
          )}

          <Flex
            flexDirection={'column'}
            rowGap={'96px'}
          >
            <Box>
              {!isMobile && (
                <TopicList 
                  category={{
                    id: 'all',
                    name: 'All posts',
                    slug: 'all'
                  }}
                  marginBottom={'24px'}
                  params={params}
                  query={{}}
                  topics={topics}
                />
              )}

              <FeaturedSection
                topics={topics as Topic[]}
                params={params}
              />
            </Box>

            {featuredCategories.map(category => (
              <InstantSearch
                key={category.id}
                searchClient={searchClient}
                indexName={`web_posts_${env.ALGOLIA_INDEX}`}
              >
                <Configure
                  hitsPerPage={6}
                  facetsRefinements={{
                    category: [category.id],
                    locale: [params.locale]
                  }}
                />

                <BlogSection
                  title={category.name}
                  topics={topics as Topic[]}
                  url={`/${params.locale}/content/category/${category.slug}`}
                />
              </InstantSearch>
            ))}
          </Flex>
        </Container>
      </InstantSearch>

      {isMobile && (
        <FilterButton
          categories={categories}
          params={params}
          topics={topics}
        />
      )}
    </Box>
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

export type BlogHit = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly image: string;
  readonly category: string;
  readonly topic: string[];
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
