import { preRenderedLocales } from "@starknet-io/cms-data/src/i18n/config";
import { getPageBySlug } from "@starknet-io/cms-data/src/pages";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import CMSPage from "../(components)/CMSPage";

export async function generateMetadata(props: Props): Promise<Metadata> {
  try {
    const data = await getPageBySlug(
      props.params.slug.join("/"),
      props.params.locale
    );

    return {
      title: data.title,
    };
  } catch {
    return {};
  }
}

export async function generateStaticParams() {
  const params = [];

  for (const locale of preRenderedLocales) {
    const base = path.join(process.cwd(), "_crowdin/data/pages", locale);
    const dirs: string[][] = [];

    do {
      const dir = dirs.pop() ?? [];
      const files = await fs.readdir(path.join(base, ...dir), {
        withFileTypes: true,
      });

      for (const file of files) {
        if (file.isDirectory()) {
          dirs.push([...dir, file.name]);
        } else if (file.isFile()) {
          params.push({
            locale,
            slug: [...dir, file.name.replace(/\.json$/, "")],
          });
        }
      }
    } while (dirs.length > 0);
  }

  return params;
}

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: readonly string[];
  };
}

export default async function Page({
  params: { locale, slug },
}: // @ts-expect-error
Props): JSX.Element {
  try {
    const data = await getPageBySlug(slug.join("/"), locale);
    return <CMSPage data={data} locale={locale} />;
  } catch (err) {
    console.log(err);
    notFound();
  }
}
