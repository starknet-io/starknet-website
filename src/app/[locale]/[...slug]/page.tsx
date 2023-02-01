import { getPageBySlug } from "src/data/pages";
import moment from "moment";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  List,
  ListItem,
} from "../../../libs/chakra-ui";
import * as Toc from "@ui/TableOfContents/TableOfContents";
import { notFound } from "next/navigation";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Block } from "src/blocks/Block";
import { Page as PageType } from "src/data/pages";
import ReactMarkdown from "react-markdown";
import { slugify } from "src/utils/utils";
import { Heading } from "@ui/Typography/Heading";
import { HiBolt } from "react-icons/hi2";

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
                <Breadcrumb separator="->">
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
              {data.blocks.map((block, i) => {
                return <Block key={i} block={block} locale={locale} />;
              })}
            </Flex>
          }
          rightAside={
            <>
              {data.template === "content" ? (
                <TableOfContents page={data} />
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

function TableOfContents({ page }: { page: PageType }) {
  return (
    <Toc.Root spacing={3}>
      <Heading
        py="16px"
        pl="16px"
        fontSize="14px"
        textTransform="uppercase"
        as="h6"
        variant="h6"
        color="heading-navy-fg"
      >
        On this page
      </Heading>
      {page.blocks.map((block, i) => {
        if (block.type === "page_header") return;
        if ("title" in block) {
          return (
            <Toc.Item key={i}>
              <a href={`#toc-${slugify(block.title)}`}>{block.title}</a>
            </Toc.Item>
          );
        } else if ("heading" in block && block.heading != null) {
          return (
            <Toc.Item key={i}>
              <a href={`#toc-${slugify(block.heading)}`}>{block.heading}</a>
            </Toc.Item>
          );
        } else if (block.type === "markdown") {
          return (
            <ReactMarkdown
              key={i}
              allowedElements={["h2", "h3"]}
              components={{
                h2: (props) => {
                  return (
                    <Toc.Item>
                      <a
                        key={i}
                        href={`#toc-${slugify(props.children.join(" "))}`}
                      >
                        {props.children}
                      </a>
                    </Toc.Item>
                  );
                },
                h3: (props) => {
                  console.log(props.children);
                  return (
                    <Toc.Item subItem isActive>
                      <a
                        key={i}
                        href={`#toc-${slugify(props.children.join(" "))}`}
                      >
                        {props.children}
                      </a>
                    </Toc.Item>
                  );
                },
              }}
            >
              {block.body}
            </ReactMarkdown>
          );
        }
      })}
    </Toc.Root>
  );
}

//replace every h tag with a tag
