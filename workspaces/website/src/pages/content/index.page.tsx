import { DocumentProps } from "src/renderer/types";

export { PostsPage as Page } from "./PostsPage";

export const documentProps = {
  title: "Starknet Blog",
  description: "Get the latest insights from across the Starknet ecosystem, learn what community members are building or take a deep dive into the math that powers Starknet.",
  image: `${import.meta.env.VITE_SITE_URL}/assets/share/blog_landing.png`,
} satisfies DocumentProps;
