import { getPageBySlug } from "src/data/pages";

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

export interface Props {
  readonly params: LocaleParams & {
    readonly slug: readonly string[];
  };
}

export default async function Page({
  params: { locale, slug },
}: Props): Promise<JSX.Element> {
  try {
    const data = await getPageBySlug(slug.join("/"), locale);
    console.log(data);

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
            data.pageLastUpdated && data.gitlog
              ? `Page last updated ${data?.gitlog?.date}`
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
            <>{data.template === "content" ? <Box>Hello</Box> : null}</>
          }
        />
      </Box>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}

//replace every h tag with a tag
