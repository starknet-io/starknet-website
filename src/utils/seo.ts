import getPublicUrl from "./getPublicUrl";

import { Metadata } from "next";
import { Post } from "workspaces/cms-data/src/posts";

export function generateBlogMetadata(category?: string): Metadata {
  const PUBLIC_URL = getPublicUrl();
  const title = category ? `${category} - Starknet Blog` : "Starknet Blog";
  const description =
    "Get the latest insights from across the Starknet ecosystem, hear what community members are building or take a deep dive into the math that powers Starknet.";
  const images = `${PUBLIC_URL}/assets/share/blog_landing.png`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export function generateBlogPostMetadata(post: Post): Metadata {
  const PUBLIC_URL = getPublicUrl();

  return {
    title: post.title,
    description: post.short_desc,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.short_desc,
      images: `${PUBLIC_URL}${post.image}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.short_desc,
      images: `${PUBLIC_URL}${post.image}`,
    },
  };
}

export function generateGenericMetadata(page?: string): Metadata {
  const PUBLIC_URL = getPublicUrl();
  const images = `${PUBLIC_URL}/assets/share/generic_landing.png`;
  const title = page ? `${page} - Starknet` : "Starknet";
  const description =
    "Starknet is the secure scaling technology bringing Ethereums benefits to the world.";

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
