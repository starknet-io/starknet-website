import { DocumentProps } from "src/renderer/types";

export function generateBlogMetadata(category?: string): DocumentProps {
  const title = category ? `${category} - Starknet Blog` : "Starknet Blog";
  const description =
    "Get the latest insights from across the Starknet ecosystem, learn what community members are building or take a deep dive into the math that powers Starknet.";
  const images = `${import.meta.env.VITE_SITE_URL}/assets/share/blog_landing.png`;

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



export function generateGenericMetadata(page?: string): DocumentProps {
  const images = `${import.meta.env.VITE_SITE_URL}/assets/share/generic_landing.png`;
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
