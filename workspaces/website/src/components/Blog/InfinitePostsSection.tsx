/**
 * Module dependencies
 */

import { Divider, Grid, HStack, useBreakpointValue } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { useInfiniteHits } from "react-instantsearch-hooks-web";
import { BlogHit } from "src/pages/posts/CategoryPage";
import { BlogCard } from "./BlogCard";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { EmptySection } from "./EmptySection";

/**
 * `Props` type.
 */

export type Props = {
  postType: 'article' | 'video' | 'audio';
  topics: Topic[];
};

/**
 * Export `InfinitePostsSection` component.
 */

export const InfinitePostsSection = (props: Props) => {
  const { postType, topics } = props;
  const { hits, isLastPage, results, showMore } = useInfiniteHits<BlogHit>();
  const columns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: postType === 'article' ? 3 : 2
  })
  
  return (
    <>
      {(results?.nbHits ?? 0) > 0 ? (
        <Grid
          gridColumnGap={'24px'}
          gridRowGap={'48px'}
          gridTemplateColumns={`repeat(${columns}, 1fr)`}
          minWidth={{
            base: 'unset',
            lg: '600px'
          }}
        >
          {hits.map(hit => (
            <BlogCard
              post={hit}
              topics={topics}
            />
          ))}
        </Grid>
      ) : (
        <EmptySection />
      )}

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
