import {
  Box,
  Container,
  Grid,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useMemo  } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
} from "react-instantsearch-hooks-web";

import type { Topic } from "@starknet-io/cms-data/src/topics";
import { Heading } from "@ui/Typography/Heading";
import { CategoryList } from "@ui/Blog/CategoryList";
import { BlogSection } from "@ui/Blog/BlogSection";
import { NormalizedCategory } from "src/utils/blog";
import qs from "qs";
import { HiFilm, HiOutlineBookOpen, HiPlay } from "react-icons/hi2";
import { TopicList } from "@ui/Blog/TopicsList";
import { InfinitePostsSection } from "@ui/Blog/InfinitePostsSection";
import { FilterButton } from "@ui/Blog/Filters/Button";
import { PostTypeFilter } from "@ui/Blog/Filters/PostType";
import { BlogBreadcrumbs } from "@ui/Blog/BlogBreadcrumbs";

export interface Props extends LocaleProps {
  readonly categories: readonly NormalizedCategory[];
  readonly topics: readonly Topic[];
  readonly params: LocaleParams & {
    readonly category?: string;
  };
  readonly query: {
    readonly topicFilters?: readonly string[];
    readonly postType?: string;
  }
  readonly env: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
}

/**
 * `postTypes` constant.
 */

const postTypes = [
  {
    value: 'article',
    label: 'Articles',
    icon: <HiOutlineBookOpen />
  },
  {
    value: 'video',
    label: 'Videos',
    icon: <HiFilm />
  },
  {
    value: 'audio',
    label: 'Audios',
    icon: <HiPlay />
  }
]

/**
 * `CategoryPage` component.
 */

export function CategoryPage({
  env,
  params,
  query,
  categories,
  topics,
}: Props): JSX.Element | null {
  const searchClient = useMemo(() => {
    return algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY);
  }, [env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_API_KEY]);

  const category = categories.find(category => 
    category.slug === params.category
  ) ?? (params.category === 'all' ? {
    id: 'all',
    name: 'All posts',
    slug: 'all',
    children: []
  } : undefined) as NormalizedCategory;

  const hasChildren = (category?.children?.length ?? 0) > 0;
  const sortedChildren = useMemo(() => {
    const bubbleUp = ['Starknet Projects', 'Roadmap']
    const bubbleDown = ['Decentralization']

    return category?.children?.sort(({ name: a }, { name: b }) => {
      if (bubbleUp.includes(a) && bubbleUp.includes(b)) {
        return bubbleUp.indexOf(a) - bubbleUp.indexOf(b);
      }

      if (bubbleDown.includes(a) && bubbleDown.includes(b)) {
        return bubbleDown.indexOf(a) - bubbleDown.indexOf(b);
      }

      if (bubbleUp.includes(a) || bubbleDown.includes(b)) {
        return -1;
      }

      if (bubbleDown.includes(a) || bubbleUp.includes(b)) {
        return 1;
      }

      return a.localeCompare(b);
    })
  }, [category?.children]);

  const hasFilters = (query.topicFilters ?? []).length > 0 || query.postType;
  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <Box pt="18" minH="100vh">
      <Container
        maxW="1344px"
        display={'grid'}
        gridTemplateColumns={{
          base: 'auto',
          lg: 'auto  1fr'
        }}
        columnGap={'115px'}
        mb={4}
      >
        <Box />

        <BlogBreadcrumbs 
          height={{
            base: '68px',
            lg: '118px'
          }}
          alignItems={'center'}
          locale={params.locale}
          title={category?.name}
        />

        {!isMobile && (
          <Box>
            <Heading
              alignSelf={'end'}
              color={'heading-navy-fg'}
              fontSize={'20px'}
              mb={'24px'}
              variant={'h5'}
            >
              {'Explore'}
            </Heading>

            <CategoryList
              categories={categories}
              params={params}
            />
          </Box>
        )}

        <Flex
          flexDirection={'column'}
        >
          <Grid 
            gridTemplateColumns={'1fr auto'}
            marginBottom={'40px'}
          >
            <Heading
              as={'h1'}
              color={'heading-navy-fg'}
              fontSize={'40px'}
              variant={'h2'}
            >
              {category?.name}
            </Heading>

            {!isMobile && (
              <PostTypeFilter
                display={'flex'}
                columnGap={'12px'}
                buttonHref={postType => 
                  `/${params.locale}/content/category/${category.slug}?${qs.stringify({
                    ...query,
                    postType: query.postType === postType ? '' : postType
                  })}`
                }
                currentPostType={query.postType}
              />
            )}
          </Grid>

          {!isMobile && (
            <TopicList 
              category={category}
              params={params}
              query={query}
              topics={topics}
            />
          )}

          {hasChildren && !hasFilters && (
            <Flex
              flexDirection={'column'}
              rowGap={'96px'}
            >
              {sortedChildren.map(category => (
                <InstantSearch
                  key={category.id}
                  searchClient={searchClient}
                  indexName={`web_posts_${env.ALGOLIA_INDEX}`}
                >
                  <Configure
                    hitsPerPage={6}
                    facetsRefinements={{
                      ...category.id !== 'all' && {
                        category: [category.id]
                      },
                      locale: [params.locale],
                      topic: (query.topicFilters ?? []) as string[]
                    }}
                  />

                  <BlogSection
                    title={category?.name}
                    topics={topics as Topic[]}
                    url={`/${params.locale}/content/category/${category.slug}`}
                  />
                </InstantSearch>
              ))}
            </Flex>
          )}              

          {!hasChildren && !hasFilters && (
            <Flex
              flexDirection={'column'}
              rowGap={'96px'}
            >
              {postTypes.map(postType => (
                <InstantSearch
                  key={postType.value}
                  searchClient={searchClient}
                  indexName={`web_posts_${env.ALGOLIA_INDEX}`}
                >
                  <Configure
                    hitsPerPage={6}
                    facetsRefinements={{
                      ...category.id !== 'all' && {
                        category: [category.id]
                      },
                      locale: [params.locale],
                      post_type: [postType.value],
                      topic: (query.topicFilters ?? []) as string[]
                    }}
                  />

                  <BlogSection
                    hideEmptySection
                    title={postType.label}
                    topics={topics as Topic[]}
                    url={`/${params.locale}/content/category/${category.slug}?${qs.stringify({
                      postType: postType.value
                    })}`}
                  />
                </InstantSearch>
              ))}
            </Flex>
          )}

          {hasFilters && (
            <InstantSearch
              searchClient={searchClient}
              indexName={`web_posts_${env.ALGOLIA_INDEX}`}
            >
              <Configure
                hitsPerPage={50}
                facetsRefinements={{
                  ...category.id !== 'all' && {
                    category: [category.id]
                  },
                  locale: [params.locale],
                  post_type: query.postType ? [query.postType] : [],
                  topic: (query.topicFilters ?? []) as string[]
                }}
              />

              <InfinitePostsSection
                postType={query.postType as 'article' | 'video' | 'audio'}
                topics={topics as Topic[]}
              />
            </InstantSearch>
          )}
        </Flex>
      </Container>

      {isMobile && (
        <FilterButton
          categories={categories}
          params={{
            ...params,
            ...query
          }}
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
  readonly post_desc?: string;
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
