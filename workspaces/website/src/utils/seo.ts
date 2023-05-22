import { Post } from "@starknet-io/cms-data/src/posts";
import getPublicUrl from "./getPublicUrl";
import { DocumentProps } from "src/renderer/types";


export function generateBlogMetadata(category?: string): DocumentProps {
  const PUBLIC_URL = getPublicUrl();
  const title = category ? `${category} - Starknet Blog` : "Starknet Blog";
  const description =
    "Get the latest insights from across the Starknet ecosystem, learn what community members are building or take a deep dive into the math that powers Starknet.";
  const images = `${PUBLIC_URL}/assets/share/blog_landing.png`;

  return {
    title,
    description,
    image: images,
    // openGraph: {
    //   type: "article",
    //   title,
    //   description,
    //   images,
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images,
    // },
  };
}

export function generateBlogPostMetadata(post: Post): DocumentProps {
  const PUBLIC_URL = getPublicUrl();
  const images = `${PUBLIC_URL}${post.image}`;

  return {
    title: post.title,
    description: post.short_desc,
    image: images,
    // openGraph: {
    //   type: "article",
    //   title: post.title,
    //   description: post.short_desc,
    //   images,
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: post.title,
    //   description: post.short_desc,
    //   images,
    // },
  };
}

export function generateGenericMetadata(page?: string): DocumentProps {
  const PUBLIC_URL = getPublicUrl();
  const images = `${PUBLIC_URL}/assets/share/generic_landing.png`;
  const title = page ? `${page} - Starknet` : "Starknet";
  const description =
    "Starknet is the secure scaling technology bringing Ethereum’s benefits to the world.";

  return {
    title,
    description,
    image: images,
    // openGraph: {
    //   type: "article",
    //   title,
    //   description,
    //   images,
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images,
    // },
  };
}
