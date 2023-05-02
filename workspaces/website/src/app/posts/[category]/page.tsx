import { Metadata } from "next";
import { getCategories } from "@starknet-io/cms-data/src/categories";
import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { PostsPage } from "../(components)/PostsPage";

export interface Props extends LocaleProps {
  readonly params: LocaleParams & {
    readonly category?: string;
  };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const categories = await getCategories(props.params.locale);

  const category = categories.find((c) => c.id === props.params.category);

  return {
    title: category?.name,
  };
}

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
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

export default async function Page(props: Props) {
  const categories = await getCategories(props.params.locale);
  const topics = await getTopics(props.params.locale);

  return (
    <>
      <PostsPage
        {...props}
        categories={categories}
        topics={topics}
        env={{
          ALGOLIA_INDEX: import.meta.env.VITE_ALGOLIA_INDEX!,
          ALGOLIA_APP_ID: import.meta.env.VITE_ALGOLIA_APP_ID!,
          ALGOLIA_SEARCH_API_KEY: import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!,
        }}
      />
    </>
  );
}
