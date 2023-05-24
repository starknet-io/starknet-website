import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import { notFound } from "next/navigation";
import RoadmapPost from "./(components)/RoadmapPost";
import {
  getRoadmapPostBySlug,
  getRoadmapPosts,
} from "workspaces/cms-data/src/roadmap";

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
    const roadmapPosts = await getRoadmapPosts(locale);
    for (const post of roadmapPosts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return params;
}

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: string;
  };
}

export default async function Page({
  params: { slug, locale },
}: Props): Promise<JSX.Element> {
  try {
    const roadmapPost = await getRoadmapPostBySlug(slug, locale);
    return <RoadmapPost roadmapPost={roadmapPost} locale={locale} />;
  } catch (err) {
    console.log(err);
    notFound();
  }
}
