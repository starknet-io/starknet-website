import { getCategories } from "src/data/categories";
import { getTopics } from "src/data/topics";
import { PostsPage } from "./(components)/PostsPage";

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
          ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
