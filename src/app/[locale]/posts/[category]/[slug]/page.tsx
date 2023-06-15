import { getCategories } from "@starknet-io/cms-data/src/categories";
import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import { getPostBySlug } from "@starknet-io/cms-data/src/posts";
import { getTopics } from "@starknet-io/cms-data/src/topics";
import { notFound } from "next/navigation";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import getBlocksDynamicData from "src/app/[locale]/(components)/utils/getBlocksDynamicData";
import PostByCategory from "../(components)/PostByCategory";
import { Metadata } from "next";
import { generateBlogPostMetadata } from "src/utils/seo";

export async function generateMetadata(props: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(props.params.slug, props.params.locale);

    return generateBlogPostMetadata(post);
  } catch {
    return {};
  }
}

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
    const files = await fs.readdir(
      path.join(process.cwd(), "_crowdin/data/posts", locale)
    );

    const categories = await getCategories(locale);

    for (const slug of files) {
      const post = await getPostBySlug(slug.replace(/\.json$/, ""), locale);
      const category = categories.find((c) => c.id === post.category);

      params.push({
        locale,
        slug: post.slug,
        category: category?.slug,
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
    const post = await getPostBySlug(slug, locale);
    const categories = await getCategories(locale);
    const topics = await getTopics(locale);
    const blocksDynamicData = await getBlocksDynamicData(locale);
    const category = categories.find((c) => c.id === post.category)!;
    return (
      <PostByCategory
        post={post}
        category={category}
        locale={locale}
        topics={topics}
        blocksDynamicData={blocksDynamicData}
      />
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
