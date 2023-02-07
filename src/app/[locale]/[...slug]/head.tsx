import HeadTags from "src/app/[locale]/(components)/HeadTags";
import { getPageBySlug } from "src/data/pages";

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: readonly string[];
  };
}

export default async function Head(props: Props) {
  try {
    const data = await getPageBySlug(
      props.params.slug.join("/"),
      props.params.locale,
    );

    return <HeadTags title={data.title} />;
  } catch {
    return <HeadTags />;
  }
}
