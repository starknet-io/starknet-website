/**
 * Module dependencies
 */

import { BlogHit } from "src/pages/posts/CategoryPage";
import {
  Body,
  Content,
  Footer,
  Image,
  Root
} from "@ui/ArticleCard/ArticleCard";

import moment from "moment";
import { Topic } from "@starknet-io/cms-data/src/topics";
import { Tag } from "@chakra-ui/tag";
import { useMemo, useState } from "react";
import {
  Box,
  BoxProps,
  Flex,
  Grid,
  Icon,
  useBreakpointValue
} from "@chakra-ui/react";

import { IoPlaySharp } from "react-icons/io5";
import { YoutubePlayer } from "@ui/YoutubePlayer/YoutubePlayer";

/**
 * `Props` type.
 */

type Props = BoxProps & {
  isFeatured?: boolean;
  post: BlogHit;
  topics: Topic[]
};


/**
 * Export `BlogCard` component.
 */

export const BlogCard = ({ isFeatured, post, topics, ...rest }: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [showVideo, setShowVideo] = useState(false);
  const topicNames = useMemo(() => (
    post.topic
      .slice(0, 3)
      .map((topic) => topics.find(({ id }) => id === topic)?.name)
      .filter((topic) => !!topic)
  ), [post, topics])

  return (
    <Box {...rest} >
      <Root
        href={post.post_type === 'article' ? `/${post.locale}/post/${post.slug}` : undefined}
        sx={{
          img: {
            transition: 'transform 0.4s ease-in-out',
          },
          '.youtubeContainer': {
            marginBottom: '0 !important',
            aspectRatio: '1.78',
            width: '100%',
            height: '100%',
            paddingBottom: '0 !important',
          },
          minWidth: isMobile ? '320px' : '280px',
          _hover: {
            background:
              "linear-gradient(0.25turn, white, white) padding-box,linear-gradient(200deg, #C507E4, #5C94FF) ",
            borderColor: "transparent",
            img : {
              transform: 'scale(1.05)'
            }
          },
          ...(isFeatured && {
            width: 'min(calc(100vw - 2 * var(--posts-gutter)), 434px)',
            scrollSnapAlign: 'start',
            minWidth: 'unset'
          })
        }}
      >
        {(post.post_type === 'article' || !showVideo) && (
          <Image
            aspectRatio={'1.78'}
            position={'relative'}
            url={post.image}
          >
            {(post.post_type === 'video' || post.post_type == 'audio') && (
              <Grid
                placeItems={'center'}
                position={'absolute'}
                inset={'0'}
                onClick={() => setShowVideo(true)}
              >
                <Icon
                  as={IoPlaySharp}
                  color={'white'}
                  fontSize={'40px'}
                />
              </Grid>
            )}
          </Image>
        )}

        {post.post_type === 'video' && showVideo && (
          <Box>
            <YoutubePlayer
              opts={{
                playerVars: {
                  autoplay: 1
                }
              }}
              videoId={post.video?.id}
            />
          </Box>
        )}

        <Body
          maxHeight={'234px'}
          minHeight={'234px'}
        >
          {topicNames.length > 0 && (
            <Box
              height={'30px'}
              overflow={'hidden'}
              marginBottom={'10px'}
            >
              {topicNames.length !== 0 && (
                <Flex
                  flexWrap={'wrap'}
                  gap={'8px'}
                >
                  {topicNames.map((topic) => (
                    <Tag
                      color={'inherit'}
                      fontSize={'12px'}
                      width={'max-content'}
                    >
                      {topic}
                    </Tag>
                  ))} 
                </Flex>
              )}
            </Box>
          )}
          
          <Content
            excerpt={post.short_desc}
            noTopics={topicNames.length === 0}
            title={post.title}
          />

          <Footer
            hideIcon
            marginTop={'auto'}
            padding={'16px 0 32px'}
            postType={post.post_type}
            publishedAt={moment(post.published_date).format("MMM DD, YYYY")}
            timeToConsume={post.timeToConsume}
          />
        </Body>
      </Root>
    </Box>
  );
}
