/**
 * Module dependencies
 */

import { Topic } from "@starknet-io/cms-data/src/topics";
import { BlogCard } from "@ui/Blog/BlogCard";
import  { FunctionComponent } from "react";
import { BlogHit } from "src/pages/content/category/@slug/CategoryPage";

/**
 * `CarouselPostProps` type.
 */

interface CarouselPostProps {
  index: number;
  onClickPlay?: () => void;
  posts: BlogHit[];
  topics: Topic[]
}

/**
 * Export `CarouselPost` component.
 */

export const CarouselPost: FunctionComponent<CarouselPostProps> = ({
  index,
  onClickPlay,
  posts,
  topics
}) => {
  const modulo = index % posts.length;
  const postIndex = modulo < 0 ? posts.length + modulo : modulo
  const post = posts[postIndex]

  if(!post) {
    return null;
  }

  return (
    <BlogCard
      key={post.id}
      onClickPlay={onClickPlay}
      isFeatured
      post={post}
      topics={topics}
    />
  );
};
