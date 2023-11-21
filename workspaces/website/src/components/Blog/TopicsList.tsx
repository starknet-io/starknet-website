/**
 * Module dependencies
 */

import { As, Flex, Grid, GridProps, Icon, ResponsiveValue } from "@chakra-ui/react";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Button } from "@ui/Button";
import qs from "qs";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { navigate } from "vite-plugin-ssr/client/router";

/**
 * `commonButtonProps` constant.
 */

const commonButtonProps = {
  height: '120%',
  width: '80px',
  position: 'absolute' as ResponsiveValue<any>,
  alignItems: 'center',
  top: '-1',
  zIndex: 1,
  cursor: 'pointer',
  as: 'button' as As
}

/**
 * `Props` type.
 */

export type Props = GridProps & {
  category: Category;
  topics: readonly Topic[];
  query: Record<string, string | readonly string[] | undefined>;
  params: LocaleParams & {
    readonly category?: string;
  };
};

/**
 * Export `TopicList` component.
 */

export const TopicList = (props: Props) => {
  const { category, query, params, topics, ...rest } = props;
  const activeTopics = (query.topicFilters ?? []) as string[];
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isMinScroll, isMaxScroll } = useMemo(() => {
    if(typeof document === 'undefined') {
      return {
        isMinScroll: false,
        isMaxScroll: false
      };
    }

    const container = document?.getElementById('topics-filters');
    const hasScroll = (container?.scrollWidth ?? 0) >= (container?.clientWidth ?? 0);

    return {
      isMinScroll: hasScroll ? scrollProgress === 0 : false,
      isMaxScroll: hasScroll ?(scrollProgress + (container?.clientWidth ?? 0)) === container?.scrollWidth : false
    };
  }, [scrollProgress]);

  const scrollTo = useCallback((position: number) => {
    const container = document?.getElementById('topics-filters');

    if(!container) {
      return;
    }

    const scrollCap = container.scrollWidth;
    
    if(position > scrollCap) {
      position = scrollCap;
    }

    if(position < 0) {
      position = 0;
    }

    container.scrollTo({
      left: position,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const container = document?.getElementById('topics-filters');
    const handleScroll = () => {
      const container = document?.getElementById('topics-filters');

      if(!container) {
        return;
      } 

      setScrollProgress(container?.scrollLeft);
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <Grid
      position={'relative'}
      marginBottom={'64px'}
      {...rest}
    >
      {!isMinScroll && (
        <Grid
          background={'linear-gradient(90deg, rgba(251,251,251,1) 50%, rgba(251,251,251,0) 100%)'}
          left={'-1'}
          onClick={() => scrollTo(scrollProgress - 200)}
          sx={{
            _dark: {
              background: 'linear-gradient(90deg, rgba(11,11,11,1) 50%, rgba(11,11,11,0) 100%)'
            }
          }}
          {...commonButtonProps}
        >
          <Icon
            as={HiChevronLeft}
            position={'absolute'}
          />
        </Grid>
      )}

      <Flex
        id={'topics-filters'}
        gap="12px"
        overflowX={'auto'}
        position={'relative'}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        {topics.map((topic, index) => (
          <Button
            minW={'max-content'}
            key={index}
            variant={activeTopics.includes(topic.id) ? "smallFilterActive" : "smallFilter"}
            as="a"
            onClick={() => {
              if(activeTopics.includes(topic.id)) {
                const newFilters = activeTopics.filter((active) => active !== topic.id)

                navigate(`/${params.locale}/posts/${category.slug}?${qs.stringify({
                  ...query,
                  topicFilters: newFilters
                })}`)

                return;
              }

              navigate(`/${params.locale}/posts/${category.slug}?${qs.stringify({
                ...query,
                topicFilters: [...activeTopics, topic.id]
              })}`)
            }}
          >
            {topic.name}
          </Button>
        ))}
      </Flex>
      
      {!isMaxScroll && (
        <Grid
          background={'linear-gradient(90deg, rgba(251,251,251,0), rgba(251,251,251,1) 50%)'}
          justifyItems={'end'}
          right={'-1'}
          onClick={() => scrollTo(scrollProgress + 200)}
          sx={{
            _dark: {
              background: 'linear-gradient(90deg, rgba(11,11,11,0), rgba(11,11,11,1) 50%)'
            }
          }}
          {...commonButtonProps}
        >
          <Icon
            as={HiChevronRight}
            position={'absolute'}
          />
        </Grid>
      )}
    </Grid>
  );
}
