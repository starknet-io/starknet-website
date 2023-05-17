import { getCategories } from "@starknet-io/cms-data/src/categories";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PostsPage } from "./(components)/PostsPage";
import { generateBlogMetadata } from "src/utils/seo";

export const generateMetadata = () => generateBlogMetadata();

export default async function Page(props: LocaleProps) {
  const categories = await getCategories(props.params.locale);
  const topics = await getTopics(props.params.locale);

  return (
    <>
      <PostsPage
        {...props}
        categories={categories}
        topics={topics}
        env={{
          ALGOLIA_INDEX: process.env.ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
