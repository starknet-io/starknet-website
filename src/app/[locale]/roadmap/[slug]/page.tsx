import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import { notFound } from "next/navigation";
import RoadmapPost from "./(components)/RoadmapPost";
import { getRoadmaPostBySlug, getRoadmapPosts } from "../utils";

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
    for (const post of getRoadmapPosts()) {
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

export interface MarkdownBlock {
  readonly type: "markdown";
  readonly body: string;
}

export default async function Page({
  params: { slug, locale },
}: Props): Promise<JSX.Element> {
  try {
    const roadmapPost = getRoadmaPostBySlug(slug);
    if (!roadmapPost) {
      throw new Error("Roadmap post not found");
    }
    return <RoadmapPost roadmapPost={roadmapPost} locale={locale} />;
  } catch (err) {
    console.log(err);
    notFound();
  }
}
