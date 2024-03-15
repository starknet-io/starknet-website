/**
 * Module dependencies
 */

import { Box, Grid, Icon } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { useHits } from "react-instantsearch-hooks-web";
import { BlogHit } from "src/pages/content/category/@slug/CategoryPage";
import { BlogCard } from "./BlogCard";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { useMemo } from "react";
import { EmptySection } from "./EmptySection";
import { HiArrowRight } from "react-icons/hi2";


/**
 * `Props` type.
 */

export type Props = {
  title: string;
  topics: Topic[];
  url: string;
  hideEmptySection?: boolean;
};

/**
 * Export `BlogSection` component.
 */

export const BlogSection = (props: Props) => {
  const { hideEmptySection, title, topics, url } = props;
  const { hits } = useHits<BlogHit>();
  const { videos, articles } = useMemo(() => {
    const videos = hits.filter(({ post_type }) => post_type === 'video' || post_type === 'audio')
    const articles = hits.filter(({ post_type }) => post_type === 'article')
    return { videos, articles }
  }, [hits])

  const posts = useMemo(() => {
    if (articles.length >= 3) {
      return articles.slice(0, 3);
    }

    if (videos.length >= 2) {
      return videos.slice(0, 2);
    }

    if (articles.length > 0) {
      return articles.concat(Array(3 - articles.length).fill(undefined))
    }

    return videos.concat(Array(2 - videos.length).fill(undefined))
  }, [hits])
  
  return (
    <>
      {(!hideEmptySection || (hits ?? []).length > 0) && (
        <Grid
          alignItems={'center'}
          gridRowGap={'32px'}
          gridTemplateAreas={'"title more" "content content"'}
          gridTemplateColumns={'1fr auto'}
        >
          <Heading
            color={'heading-navy-fg'}
            variant={'h4'}
            fontSize={'20px'}
          >
            {title}
          </Heading>

          <Button
            as={'a'}
            fontSize={'16px'}
            gridArea={'more'}
            href={url}
            variant={'ghost'}
          >
            See more

            <Icon
              sx={{
                'path': {
                  color: '#55545b !important',
                  fill: '#55545b !important'
                }
              }}
              as={HiArrowRight}
              ml={2}
              fontSize={'28px'}
            />
          </Button>

          <Box
            gridArea={'content'}
            maxWidth={'100%'}
            overflowX={'auto'}
          >
            {(hits ?? []).length > 0 ? (
              <Grid
                gridGap={'24px'}
                gridTemplateColumns={`repeat(${posts.length}, 1fr)`}
                minWidth={'600px'}
              >
                {posts.map((hit) => {
                  if(hit) {
                    return (
                      <BlogCard
                        key={hit.id}
                        post={hit}
                        topics={topics}
                      />
                    )
                  }
                  
                  return <Box />
                })}
              </Grid>
            ): (
              <EmptySection />
            )}
          </Box>
        </Grid>
      )}
    </>
  );
}
