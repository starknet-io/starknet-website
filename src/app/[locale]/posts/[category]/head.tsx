import HeadTags from "src/app/[locale]/(components)/HeadTags";
import { getCategories } from "src/data/categories";

export interface Props extends LocaleProps {
  readonly params: LocaleParams & {
    readonly category: string;
  };
}

export default async function Head(props: Props) {
  const categories = await getCategories(props.params.locale);

  const category = categories.find((c) => c.id === props.params.category);

  return <HeadTags title={category?.name ?? "Blog"} />;
}
