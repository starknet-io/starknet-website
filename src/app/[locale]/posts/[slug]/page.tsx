import { notFound } from "next/navigation";
import { Block } from "src/blocks/Block";
import { getPostBySlug } from "src/data/posts";
import { Flex } from "src/libs/chakra-ui";
import { PageContentContainer } from "../../(components)/PageContentContainer";

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
    const { title, blocks, body } = await getPostBySlug(slug, locale);

    return (
      <PageContentContainer>
        <h2>{title}</h2>

        <Flex direction="column" gap="32px">
          {blocks.map((block, i) => (
            <Block key={i} block={block} locale={locale} />
          ))}
          <Block block={{ type: "markdown", body }} locale={locale} />
        </Flex>
      </PageContentContainer>
    );
  } catch (err) {
    console.log(err);
    notFound();
  }
}
