import { getPageBySlug } from "src/data/pages";
import moment from "moment";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
} from "../../../libs/chakra-ui";
import { notFound } from "next/navigation";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Block } from "src/blocks/Block";
import { Page as PageType } from "src/data/pages";
import { Index } from "unist-util-index";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { TableOfContents } from "../(components)/TableOfContents";
import * as fs from "node:fs/promises";
import * as path from "node:path";

export async function generateStaticParams() {
  const params = [];

  for (const locale of ["en"]) {
    const base = path.join(process.cwd(), "_data/_dynamic/pages", locale);
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
    const date = data?.gitlog?.date;

    return (
      <Box>
        <PageLayout
          breadcrumbs={
            <>
              {data.breadcrumbs &&
              data.breadcrumbs_data &&
              data.breadcrumbs_data.length > 0 ? (
                <Breadcrumb separator="/">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      fontSize="sm"
                      href={`/${data.breadcrumbs_data[0].locale}/${data.breadcrumbs_data[0].slug}`}
                    >
                      {data.breadcrumbs_data[0].title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink fontSize="sm">{data.title}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              ) : null}
            </>
          }
          pageLastUpdated={
            data.page_last_updated && date
              ? `Page last updated ${moment(date).fromNow()}  `
              : null
          }
          main={
            <Flex
              direction="column"
              gap={{
                base: data.template === "content" ? "32px" : "56px",
                lg: data.template === "content" ? "32px" : "136px",
              }}
            >
              {/* {data.template === "content" ? (
                <MainSearch2
                  env={{
                    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
                    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
                  }}
                />
              ) : null} */}
              {data.blocks.map((block, i) => {
                return <Block key={i} block={block} locale={locale} />;
              })}
            </Flex>
          }
          rightAside={
            <>
              {data.template === "content" ? (
                <TableOfContents headings={pageToTableOfContents(data)} />
              ) : null}
            </>
          }
        />
      </Box>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}

interface HeadingData {
  readonly title: string;
  readonly level: 2 | 3;
}

function pageToTableOfContents(page: PageType): readonly HeadingData[] {
  const data = page.blocks.flatMap((block) => {
    if (block.type === "page_header") {
      return [];
    } else if (block.type === "ordered_block") {
      let blocks = Array.from(block.blocks).sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      return blocks.map((block) => {
        return {
          title: block.title,
          level: 2,
        };
      });
    } else if (block.type === "accordion") {
      return [
        ...(block.heading != null
          ? [
              {
                title: block.heading,
                level: 2,
              },
            ]
          : []),
        // ...block.blocks.map(block => {
        //   return {
        //     title: block.label,
        //     level: 3,
        //   };
        // })
      ];
    } else if (block.type === "markdown") {
      const processor = unified()
        .use(remarkParse)
        .use(() => {
          return (tree: any) => {
            const typeIndex = new Index("type", tree);
            const headings = typeIndex.get("heading");

            return headings.map((node: any) => {
              const textNode = node.children.find((n: any) => {
                return n.type === "text";
              });

              return {
                title: textNode?.value ?? "",
                level: 2,
              };
            });
          };
        });

      const node = processor.parse(block.body);
      const tree = processor.runSync(node);

      return tree;
    } else if ("title" in block) {
      return {
        title: block.title,
        level: 2,
      };
    } else if ("heading" in block && block.heading != null) {
      return {
        title: block.heading,
        level: 2,
      };
    }

    return [];
  });

  return data;
}
