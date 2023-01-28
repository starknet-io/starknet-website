import { PageLayout } from "@ui/Layout/PageLayout";
import { Heading } from "@ui/Typography/Heading";
import { notFound } from "next/navigation";
import { PageContentContainer } from "src/app/[locale]/(components)/PageContentContainer";
import { Block } from "src/blocks/Block";
import { getPostBySlug } from "src/data/posts";
import { Container, Flex, Img } from "src/libs/chakra-ui";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly slug: string;
  };
}

export default async function Page({
  params: { slug, locale },
}: Props): Promise<JSX.Element> {
  try {
    const { title, blocks, body, image } = await getPostBySlug(slug, locale);

    return (
      <PageLayout
        main={
          <Container maxWidth="846px">
            <Img borderRadius={"8px"} src={image} alt={title} />
            <Heading variant="h2" as="h2" color="heading-navy-fg">
              {title}
            </Heading>

            <Flex direction="column" gap="32px">
              {blocks.map((block, i) => (
                <Block key={i} block={block} locale={locale} />
              ))}
              <Block block={{ type: "markdown", body }} locale={locale} />
            </Flex>
          </Container>
        }
      />
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
