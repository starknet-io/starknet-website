import { getCategories } from "src/data/categories";
import { getTopics } from "src/data/topics";
import { PostsPage } from "../(components)/PostsPage";

export async function generateStaticParams() {
  const params = [];

  for (const locale of ["en"]) {
    const categories = await getCategories(locale);

    for (const category of categories) {
      params.push({
        locale,
        category: category.slug,
      });
    }
  }

  return params;
}

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
