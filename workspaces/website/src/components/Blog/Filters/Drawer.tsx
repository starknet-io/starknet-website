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
  Flex
} from "@chakra-ui/react";
import { normalizeCategories } from "src/utils/blog";
import { useMemo, useState } from "react";
import { navigate } from "vite-plugin-ssr/client/router";
import qs from "qs";
import { HiFilm, HiOutlineBookOpen, HiPlay } from "react-icons/hi2";
import { Topic } from "@starknet-io/cms-data/src/topics";

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
 * Export `FilterDrawer` component.
 */

export const FilterDrawer = ({ categories, params, topics, ...props }: Props) => {
  const normalizedCategories = useMemo(() => (
    normalizeCategories(categories).filter((category) => !category.parentCategory)
  ), [categories]);
  const [currentCategory, setCurrentCategory] = useState(params.category);
  const [currentPostType, setCurrentPostType] = useState(params.postType);
  const [currentTopicFilters, setCurrentTopicFilters] = useState(params.topicFilters ?? [] as string[]);
  
  return (
    <Drawer
      placement="bottom"
      size="full"
      variant="primary"
      {...props}
    >
      <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt={'80px'}>
            <Box>
              <Button
                variant="categoryVertical"
                as="a"
                isActive={!currentCategory}
                onClick={() => {
                  if (!currentCategory) return;

                  setCurrentCategory(undefined);
                }}
              >
                All posts
              </Button>
            </Box>

            {normalizedCategories.map((category, index) => (
              <Box key={index}>
                <Button
                  variant="categoryVertical"
                  as="a"
                  isActive={category.slug === currentCategory}
                  onClick={() => {
                    if (category.slug === currentCategory) return;

                    setCurrentCategory(category.slug);
                  }}
                >
                  {category.name}
                </Button>
              </Box>
            ))}

            <Divider margin={'24px 0'}/>

            <Flex
              justifyContent={'space-around'}
            >
              {postTypes.map((postType) => (
                <Button
                  onClick={() => setCurrentPostType(postType.value)}
                  leftIcon={postType.icon}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    padding: '14px 24px',
                    borderRadius: '40px',
                    ...!(currentPostType === postType.value) && {
                        border: '1px solid rgba(35, 25, 45, 0.1)',
                        background: 'rgba(72, 38, 72, 0.06)',
                        color: 'heading-navy-fg'
                      },
                      _dark:{
                        background: '#70AAFF,'
                      }
                  }}
                  variant={currentPostType === postType.value ? 'solid' : 'outlineRounded'}
                >
                  {postType.label}
                </Button>
              ))}
            </Flex>

            <Flex
              mt={'24px'}
              overflow={'auto'}
              gap={'12px'}
            >
              {topics.map((topic, index) => (
                <Button
                  minW={'max-content'}
                  key={index}
                  variant={currentTopicFilters.includes(topic.id) ? "smallFilterActive" : "smallFilter"}
                  as="a"
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
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant={'solid'}
              fullWidth
              onClick={() => {
                if(!currentCategory) {
                  navigate(`/${params.locale}/posts`);
                  props.onClose();

                  return;
                }

                navigate(`/${params.locale}/posts/${currentCategory}?${qs.stringify({
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
