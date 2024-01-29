/**
 * Module dependencies.
 */

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter
} from "react-icons/ai";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Icon,
  Img,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Category } from "@starknet-io/cms-data/src/categories";
import { Configure, InstantSearch, useHits } from "react-instantsearch-hooks-web";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { Post } from "@starknet-io/cms-data/src/posts";
import { TableOfContents } from "src/pages/(components)/TableOfContents/TableOfContents";
import { Text } from "@ui/Typography/Text";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Block } from "src/blocks/Block";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";
import { useMemo } from "react";
import { blocksToTOC } from "src/pages/(components)/TableOfContents/blocksToTOC";
import moment from "moment";
import qs from "qs";
import algoliasearch from "algoliasearch";
import { BlogCard } from "@ui/Blog/BlogCard";
import { BlogHit } from "../PostsPage";
import { BlogBreadcrumbs } from "@ui/Blog/BlogBreadcrumbs";

/**
 * Export `Props` type.
 */

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
  readonly categories: readonly Category[]
  readonly topics: readonly Topic[]
  readonly post: Post
  readonly env?: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
    readonly SITE_URL: string;
  };
}

/**
 * Export `MarkdownBlock` type.
 */

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

/**
 * Export `PostPage` component.
 */

export function PostPage(props: Props): JSX.Element {
  const { params: { slug, locale }, categories, topics, post, env } = props;
  const postCategories = categories.filter((c) => post.category.includes(c.id));
  const videoId = post.post_type !== "article" ? post.video?.id : undefined;
  const shareUrl = `${env?.SITE_URL}/content/${slug}`
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const searchClient = useMemo(() => {
    return algoliasearch(env?.ALGOLIA_APP_ID ?? '', env?.ALGOLIA_SEARCH_API_KEY ?? '');
  }, [env?.ALGOLIA_APP_ID, env?.ALGOLIA_SEARCH_API_KEY]);
  
  return (
    <Container py="0" pb="16" maxW={"1624px"}>
      <Grid
        gridTemplateAreas={{
          base: '"breadcrumbs" "post"',
          lg: '". breadcrumbs ." "timeline post ."',
        }} 
        gridTemplateColumns={{
          base: '1fr',
          lg: '240px 1fr 240px',
        }} 
        gridColumnGap={'105px'}
      >
        <BlogBreadcrumbs 
          gridArea={'breadcrumbs'}
          height={{
            base: '68px',
            lg: '118px'
          }}
          alignItems={'center'}
          locale={locale}
          title={post.title}
        />

       {!!post.toc && !isMobile ? ( 
          <Box 
            alignSelf={'start'}
            gridArea={'timeline'}
            as={'aside'}
            role={'complementary'}
            position={'sticky'}
            top={'100px'}
          >
            <TableOfContents headings={blocksToTOC(post.blocks, 1)} />
          </Box>
        ) : null}

        <Box
          gridArea={'post'}
          overflow={'hidden'}
        >
          <Box maxWidth="1024px">
            {post.post_type === "article" ? (
              <Box>
                <Img
                  borderRadius={"8px"}
                  src={post.image}
                  alt={post.title}
                  width={'100%'}
                />

                <Flex
                  alignItems={{
                    base: 'start',
                    md: 'center'
                  }}
                  flexDirection={{
                    base: 'column',
                    md: 'row'
                  }}
                  height={{
                    base: 'unset',
                    md: '60px'
                  }}
                  justifyContent={{
                    base: 'unset',
                    md: 'space-between'
                  }}
                  margin={{
                    base: '16px 0 32px',
                    md: '0'
                  }}
                  rowGap={'16px'}
                >
                  <HStack>
                    <Text fontSize="sm" color="muted">
                      {moment(post.published_date).format("MMM DD,YYYY")} ·
                    </Text>

                    <Text fontSize="sm" color="muted">
                      {post.timeToConsume}
                    </Text>
                  </HStack>

                  <Text fontSize={'sm'} color={'muted'}>
                    {`Page last updated ${moment(
                      post?.gitlog?.date
                    ).fromNow()}`}
                  </Text>
                </Flex>
              </Box>
            ) : null}

            <Heading
              as={'h1'}
              color="heading-navy-fg"
              fontSize={'40px'}
              marginBottom={'48px'}
              variant="h2"
            >
              {post.title}
            </Heading>

            {post.post_desc && (
              <Heading
                size={'20px'}
                marginBottom={'56px'}
                variant="h4"
              >
                {post.post_desc}
              </Heading>
            )}


            <Divider mt="8px" mb="48px" />

            {post.post_type !== "article" && (
              <Flex mb={!post.blocks?.length ? "32px" : 0} direction="column">
                <YoutubePlayer videoId={videoId} />

                <Flex
                  alignItems={'center'}
                  height={'60px'}
                  justifyContent={'space-between'}
                  marginTop={'-50px'}
                >
                  <HStack>
                    <Text fontSize="sm" color="muted">
                      {moment(post.published_date).format("MMM DD,YYYY")} ·
                    </Text>

                    <Text fontSize="sm" color="muted">
                      {post.timeToConsume}
                    </Text>
                  </HStack>

                  <Text fontSize={'sm'} color={'muted'}>
                    {`Page last updated ${moment(
                      post?.gitlog?.date
                    ).fromNow()}`}
                  </Text>
                </Flex>
              </Flex>
            )}

            {(post.blocks?.length ?? 0) > 0 && (
              <Flex direction="column" gap="32px" marginBottom={'96px'}>
                {post.blocks?.map((block, i) => (
                  <Block
                    key={i}
                    block={block}
                    locale={locale}
                  />
                ))}
              </Flex>
            )}

            <Flex 
              direction={'row'} 
              gap={'12px'}
              marginBottom={'48px'}
            >
              {post.topic?.map((topic, i) => (
                <Button
                  key={i}
                  variant={'smallFilter'}
                  as={'a'}
                  href={`/content/category/all?${qs.stringify({
                    topicFilters: topic
                  })}`}
                >
                  {topics.find((t) => t.id === topic)?.name}
                </Button>
              ))}
            </Flex>

            <Flex
              gap={'24px'}
            >
              <Text>
                Share this post:
              </Text>

              <Flex
                alignItems={'center'}
                gap={'8px'}
              >
                <TwitterShareButton url={shareUrl}>
                  <Icon
                    boxSize="28px"
                    opacity={0.6}
                    color="text-hero-fg"
                    as={AiOutlineTwitter}
                  />
                </TwitterShareButton>

                <LinkedinShareButton url={shareUrl}>
                  <Icon
                    boxSize="28px"
                    opacity={0.6}
                    color="text-hero-fg"
                    as={AiFillLinkedin}
                  />
                </LinkedinShareButton>

                <FacebookShareButton url={shareUrl}>
                  <Icon
                    boxSize="28px"
                    opacity={0.6}
                    color="text-hero-fg"
                    as={AiFillFacebook}
                  />
                </FacebookShareButton>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Grid>

      <Divider
        mb={'96px'}
        mt={'80px'}
      />

      <Heading
        color="heading-navy-fg"
        marginBottom={'48px'}
        variant={'h4'}
      >
        {'May also interest you'}
      </Heading>

      <InstantSearch
        searchClient={searchClient}
        indexName={`web_posts_${env?.ALGOLIA_INDEX}`}
      >
        <Configure
          hitsPerPage={5}
          facetsRefinements={{
            topic: post.topic[0] ? [post.topic[0]] : [],
            locale: [locale]
          }}
        />

        <RelatedSection post={post} topics={topics}/>
      </InstantSearch>
    </Container>
  )
}

/**
 * `RelatedSection` component.
 */

function RelatedSection({ post, topics }: Pick<Props,'post' | 'topics'>) {
  const { hits } = useHits<BlogHit>();
  const normalizedHits = hits.filter((hit) => hit.id !== post.id).slice(0,4);

  return (
    <Grid
      gridGap={'24px'}
      gridTemplateColumns={'repeat(4, 1fr)'}
      marginBottom={'96px'}
      maxWidth={'100%'}
      overflowX={'auto'}
    >
      {normalizedHits.map((hit, index) => (
        <BlogCard
          key={index}
          post={hit}
          topics={topics as Topic[]}
        />
      ))}
    </Grid>
  )
}
