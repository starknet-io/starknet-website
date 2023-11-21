
import { BlogHit } from 'src/pages/posts/CategoryPage';
import { Box, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { useInterval } from 'src/hooks/useInterval';
import { CarouselInner } from './CarouselInner';
import { CarouselPost } from './CarouselPost';
import { IconButton } from '@ui/IconButton';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Topic } from '@starknet-io/cms-data/src/topics';
import {
  animate,
  motion,
  PanInfo,
  useMotionValue,
  ValueAnimationTransition,
} from 'framer-motion';

import { useEffect, useRef, useState } from 'react';

type CarouselProps = {
  posts: BlogHit[];
  topics: Topic[];
}

const transition: ValueAnimationTransition<any> = {
  type: 'spring',
  bounce: 0,
};

const range = [-1, 0, 1, 2, 3];

export const Carousel: React.FunctionComponent<CarouselProps> = ({
  posts,
  topics
}) => {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resetInterval } = useInterval(() => {
    setIndex(prevIndex => prevIndex + 1);
  }, 6000);
  const [index, setIndex] = useState(0);
  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);
  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);

      return;
    }

    if (offset.x > clientWidth / 4) {
      setIndex(index - 1);

      return;
    }
    
    if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);

      return;
    } 

    resetInterval();
    animate(x, calculateNewX(), transition);
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index]);

  return (
    <>
      <motion.div 
        ref={containerRef} 
        style={{
          position: 'relative',
          width: '456px',
          height: '543px',
        }}
      >
        {range.map((rangeValue) => {
          return (
            <CarouselInner
              key={rangeValue + index}
              x={x}
              onDrag={() => resetInterval()}
              onDragEnd={handleEndDrag}
              index={rangeValue + index}
              renderCarouselInner={({ index }) => 
                <CarouselPost
                  index={index}
                  posts={posts}
                  topics={topics}
                />
              }
            />
          );
        })}
      </motion.div>

      <Box position={'relative'}>
        {!isMobile && (
          <Flex
            gap={'12px'}
            zIndex={1}
            position={'relative'}
            width={'min-content'}
          >
            <IconButton
              variant={'outline'}
              icon={<IoArrowBack/>}
              isRound
              aria-label={'Previous'}
              onClick={() => {
                resetInterval();
                setIndex(prevIndex => prevIndex - 1)
              }}
            />

            <IconButton
              variant={'outline'}
              icon={<IoArrowForward/>}
              isRound
              aria-label={'Next'}
              onClick={() => {
                resetInterval();
                setIndex(prevIndex => prevIndex + 1)
              }}
            />
          </Flex>
        )}

        <Grid
          zIndex={0}
          position={'absolute'}
          height={'100%'}
          placeItems={'center'}
          width={'100%'}
          top={0}
        >
          <Flex
            gap={'8px'}
          >
            {posts.map((_, postIndex) => {
              const modulo = index % posts.length;
              const normalizedIndex = modulo < 0 ? posts.length + modulo : modulo;

              return (
                <Box
                  background={(normalizedIndex % posts.length === postIndex) ? 'heading-navy-fg' : 'gray.500'}
                  borderRadius={'12px'}
                  height={'8px'}
                  key={postIndex}
                  width={'8px'}
                />
              )
            })}
          </Flex>
        </Grid>
      </Box>
    </>
  );
};
