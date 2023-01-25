import { notFound } from "next/navigation";
import { Block } from "src/blocks/Block";
import { getPostByID } from "src/data/posts";
import { Flex } from "src/libs/chakra-ui";
import { PageContentContainer } from "../../(components)/PageContentContainer";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly id: string;
  };
}

export default async function Page({
  params: { id, locale },
}: Props): Promise<JSX.Element> {
  try {
    const { title, blocks, body } = await getPostByID(id, locale);

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
