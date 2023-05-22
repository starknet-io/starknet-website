import type { Page as PageType } from "@starknet-io/cms-data/src/pages";
import { PageLayout } from "@ui/Layout/PageLayout";
import moment from "moment";
import remarkParse from "remark-parse";
import { Block } from "src/blocks/Block";
import { unified } from "unified";
import { Index } from "unist-util-index";
import { TableOfContents } from "../(components)/TableOfContents";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";

type CMSPageProps = {
  data: PageType;
  locale: string;
};
export default function CMSPage({
  data,
  locale,
}: CMSPageProps) {
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
                    href={`/${data.breadcrumbs_data[0].locale}`}
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
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
            {data.blocks?.map((block, i) => {
              return (
                <Block
                  key={i}
                  block={block}
                  locale={locale}
                />
              );
            })}
          </Flex>
        }
        rightAside={
          data.template === "content" ? (
            <TableOfContents headings={pageToTableOfContents(data)} />
          ) : null
        }
      />
    </Box>
  );
}

interface HeadingData {
  readonly title: string;
  readonly level: 2 | 3;
}

function pageToTableOfContents(page: PageType): readonly HeadingData[] {
  if (!page.blocks) {
    return [];
  }
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
