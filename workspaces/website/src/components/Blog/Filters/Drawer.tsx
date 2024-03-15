/**
 * Module dependencies
 */

import { Button } from "@ui/Button";
import { Category } from "@starknet-io/cms-data/src/categories";
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Grid
} from "@chakra-ui/react";
import { normalizeCategories } from "src/utils/blog";
import { useEffect, useMemo, useRef, useState } from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import qs from "qs";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { CategoryButton } from "../CategoryButton";
import { PostTypeFilter } from "./PostType";

/**
 * Export `Props` type.
 */

export type Props = Omit<DrawerProps, 'children'> & {
  topics: readonly Topic[]
  categories: readonly Category[];
  params: LocaleParams & {
    readonly category?: string;
    readonly postType?: string;
    readonly topicFilters?: readonly string[];
  };
} 

/**
 * Export `FilterDrawer` component.
 */

export const FilterDrawer = ({ categories, params, topics, ...props }: Props) => {
  const normalizedCategories = useMemo(() => (
    normalizeCategories(categories).filter((category) => !category.parentCategory)
  ), [categories]);

  const categoryListRef = useRef<HTMLUListElement>(null);
  const [currentCategory, setCurrentCategory] = useState(params.category);
  const [currentPostType, setCurrentPostType] = useState(params.postType);
  const [currentTopicFilters, setCurrentTopicFilters] = useState(params.topicFilters ?? [] as string[]);
  const [openCategory, setOpenCategory] = useState(
    normalizedCategories.find((category) => (
      category.slug === params.category || category.children.some(
        (child) => child.slug === params.category
      )
    )
  )?.slug ?? null);

  useEffect(() => {
    if(!categoryListRef.current) return;

    const openCategoryIndex = normalizedCategories.findIndex((category) => category.slug === openCategory);

    categoryListRef.current.scrollTo({
      top: (openCategoryIndex + 1) * 50,
      behavior: 'smooth'
    })
  }, [openCategory]);
  
  return (
    <Drawer
      placement="bottom"
      size="full"
      variant="primary"
      {...props}
    >
      <DrawerOverlay />
        <DrawerContent 
          _dark={{
            backgroundColor: '#0b0b0b'
          }}
        >
          <DrawerCloseButton />

          <DrawerBody
            padding={'80px 0 8px 0'}
          >
            <Grid
              maxHeight={'100%'}
              gridTemplateRows={'1fr auto'}
            >
              <Box
                ref={categoryListRef}
                padding={'0 16px'}
                as="ul"
                height={'100%'}
                overflowY={'auto'}
                _after={{
                  content: '""',
                  display: 'block',
                  height: '100%'
                }}
              >
                  <Button
                    variant="categoryVertical"
                    as="a"
                    isActive={currentCategory === 'all' || !currentCategory}
                    onClick={() => {
                      setCurrentCategory(undefined);
                    }}
                  >
                    All posts
                  </Button>

                  {normalizedCategories.map((category, index) => (
                    <Box key={index}>
                      <CategoryButton
                        as="a"
                        category={category}
                        activeCategory={currentCategory}
                        onClick={(currentCat) => {
                          if (currentCat.slug === params.category) return;

                          setCurrentCategory(currentCat.slug);
                          
                          if(currentCat.default_filter) {
                            setCurrentPostType(currentCat.default_filter);
                          }
                        }}
                        openCategory={openCategory}
                        setOpenCategory={setOpenCategory}
                      />
                    </Box>
                  ))}
              </Box>

              <Box>
                <Divider margin={'24px 0'}/>

                <PostTypeFilter
                  padding= {'0 8px'}
                  display={'flex'}
                  flexWrap={'wrap'}
                  columnGap={'4px'}
                  justifyContent={'space-around'}
                  onClickType={(postType) => setCurrentPostType(currentType => {
                    if(currentType === postType) {
                      return undefined;
                    }

                    return postType
                  })}
                  currentPostType={currentPostType}
                />

                <Grid
                  mt={'24px'}
                  gridAutoFlow={'column'}
                  overflow={'scroll'}
                  gap={'12px'}
                  paddingLeft={'16px'}
                >
                  <Flex gap='12px' width={'100%'} overflowX={'scroll'}>
                    {topics.map((topic, index) => (
                      <Button
                        minW={'max-content'}
                        key={index}
                        variant={currentTopicFilters.includes(topic.id) ? "smallFilterActive" : "smallFilter"}
                        _hover={!currentTopicFilters.includes(topic.id) ? {
                          color: 'btn-filter-fg',
                          background: "btn-filter-bg",
                        } : {
                          color: 'btn-filter-active-fg',
                          background: 'btn-primary-bg',
                        }}
                        _dark={{
                          background: currentTopicFilters.includes(topic.id) ? '#70AAFF' : 'btn-filter-bg',
                          _hover: !currentTopicFilters.includes(topic.id) ? {
                            color: 'btn-filter-fg',
                            background: "btn-filter-bg",
                          } : {
                            color: 'btn-filter-active-fg',
                            background: '#70AAFF',
                          }
                        }}
                        onClick={() => {
                          setCurrentTopicFilters((currentTopicFilters) => {
                            if(currentTopicFilters.includes(topic.id)) {
                              return currentTopicFilters.filter((active) => active !== topic.id)
                            }

                            return [...currentTopicFilters, topic.id]
                          })
                        }}
                      >
                        {topic.name}
                      </Button>
                    ))}
                  </Flex>
                  
                </Grid>
              </Box>
            </Grid>
            
          </DrawerBody>

          <DrawerFooter padding={'16px'}>
            <Button
              variant={'solid'}
              fullWidth
              onClick={() => {
                if(!currentCategory) {
                  navigate(`/${params.locale}/content/category/all?${qs.stringify({
                    postType: currentPostType,
                    topicFilters: currentTopicFilters
                  })}`);

                  props.onClose();

                  return;
                }

                navigate(`/${params.locale}/content/category/${currentCategory}?${qs.stringify({
                    postType: currentPostType,
                    topicFilters: currentTopicFilters
                })}`)

                props.onClose();
              }}
            >
              Done
            </Button>
          </DrawerFooter>
        </DrawerContent>
    </Drawer>
  );
}
