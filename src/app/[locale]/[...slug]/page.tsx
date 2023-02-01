import { getPageBySlug } from "src/data/pages";
import moment from "moment";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  List,
} from "../../../libs/chakra-ui";
import { notFound } from "next/navigation";
import { PageLayout } from "@ui/Layout/PageLayout";
import { Block } from "src/blocks/Block";
import { Page as PageType } from "src/data/pages";
import ReactMarkdown from "react-markdown";
import { slugify } from "src/utils/utils";
import { Heading } from "@ui/Typography/Heading";

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
    <div>
      <Heading variant="h4">On this page</Heading>
      <List spacing={3}></List>
      {page.blocks.map((block, i) => {
        if ("title" in block) {
          return (
            <a key={i} href={`#toc-${slugify(block.title)}`}>
              {block.title}
            </a>
          );
        } else if ("heading" in block && block.heading != null) {
          return (
            <a key={i} href={`#toc-${slugify(block.heading)}`}>
              {block.heading}
            </a>
          );
        } else if (block.type === "markdown") {
          return (
            <ReactMarkdown
              key={i}
              allowedElements={["h2", "h3"]}
              components={{
                h2: (props) => {
                  return (
                    <p>
                      <a
                        key={i}
                        href={`#toc-${slugify(props.children.join(" "))}`}
                      >
                        {props.children}
                      </a>
                    </p>
                  );
                },
                h3: (props) => {
                  console.log(props.children);
                  return (
                    <p>
                      <a
                        key={i}
                        href={`#toc-${slugify(props.children.join(" "))}`}
                      >
                        {props.children}
                      </a>
                    </p>
                  );
                },
              }}
            >
              {block.body}
            </ReactMarkdown>
          );
        }
      })}
    </div>
  );
}

//replace every h tag with a tag
