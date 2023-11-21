/**
 * Module dependencies
 */

import { Topic } from "@starknet-io/cms-data/src/topics";
import { BlogCard } from "@ui/Blog/BlogCard";
import  { FunctionComponent } from "react";
import { BlogHit } from "src/pages/posts/CategoryPage";

/**
 * `CarouselPostProps` type.
 */

interface CarouselPostProps {
  index: number;
  posts: BlogHit[];
  topics: Topic[]
}

/**
 * Export `CarouselPost` component.
 */

export const CarouselPost: FunctionComponent<CarouselPostProps> = ({
  index,
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
      isFeatured
      post={post}
      topics={topics}
    />
  );
};
