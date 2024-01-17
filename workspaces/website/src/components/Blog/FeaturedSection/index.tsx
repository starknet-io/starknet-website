/**
 * Module dependencies
 */

import { useHits, Configure } from "react-instantsearch-hooks-web";
import { Carousel } from "./Carousel/index";
import { BlogHit } from "src/pages/content/category/@slug/CategoryPage";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Box, Grid, Heading, Spinner, useBreakpointValue } from "@chakra-ui/react";

/**
 * `Props` type.
 */

export type Props = {
  params: LocaleParams;
  topics: Topic[];
};

/**
 * Export `FeaturedSection` component.
 */

export const FeaturedSection = ({ params, topics }: Props) => {
  return (
    <Box>
      <Configure
        // @ts-ignore
        hitsPerPage={6}
        facetsRefinements={{
          locale: [params.locale]
        }}
      />

      <Heading
        as={'h1'}
        color={'heading-navy-fg'}
        fontSize={'40px'}
        lineHeight={'40px'}
        mb={{
          base: '32px',
          md: '48px'
        }}
        pt={{
          base: '0px',
          md: '16px'
        }}
        variant={'h2'}
      >
        {'Trending Posts'}
      </Heading>
        
      <Box 
        width={{
          base: 'calc(100% + var(--posts-gutter))',
          sm: 'unset'
        }} 
        overflow={{
          base: 'hidden',
          sm: 'unset'
        }}
      >
        <FeaturedSectionContent
          topics={topics}
        />
      </Box>
    </Box>
  );
}

/**
 * `FeaturedSectionContent` component.
 */

const FeaturedSectionContent = ({ topics }: Pick<Props,'topics'>) => {
  const { hits: posts } = useHits<BlogHit>();
  const isMobile = useBreakpointValue({ base: true, lg: false })

  if((posts ?? []).length === 0) {
    return (
      <Grid
        placeItems={'center'}
        height={{
          base: '480px',
          xs: '584px',
        }}
      >
        <Spinner />
      </Grid>
    )
  }
  
  return (
    <Box
      width={isMobile ? '100%' : `calc(100% + var(--posts-gutter))`}
      height={{
        base: '480px',
        xs: '584px',
      }}
      overflowX={{
        base: 'visible',
        md: 'hidden'
      }}
      position={'relative'}
      sx={!isMobile ? {
        _after: {
          content: '""',
          position: 'absolute',
          top: -1,
          right: 0,
          bottom: 0,
          width: 'var(--posts-gutter)',
          background: 'linear-gradient(90deg, rgba(251,251,251,0) 0%, rgba(251,251,251,1) 90%)',
        },
        _dark: {
          _after: {
            background: 'linear-gradient(90deg, rgb(11,11,11, 0) 0%, rgba(11,11,11,1) 90%)',
          }
        }
      } : {}}
    >
      <Box
        width={isMobile ? '100%' : `calc(100% + var(--posts-gutter))`}
        overflow={'visible'}
        position={'absolute'}
      >
        <Carousel posts={posts} topics={topics} />
      </Box>  
    </Box>
  );
}

