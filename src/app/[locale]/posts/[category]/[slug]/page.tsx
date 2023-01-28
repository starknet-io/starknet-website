import { PageLayout } from "@ui/Layout/PageLayout";
import { Tag } from "@ui/Tag/Tag";
import { Heading } from "@ui/Typography/Heading";
import { notFound } from "next/navigation";
import { Block } from "src/blocks/Block";
import { getPostBySlug } from "src/data/posts";
import {
  Container,
  Flex,
  Img,
  Box,
  Divider,
  Spacer,
  Badge,
} from "src/libs/chakra-ui";

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
    const { title, blocks, body, image, topic, post_type } =
      await getPostBySlug(slug, locale);
    console.log("topic", topic);
    return (
      <PageLayout
        main={
          <Container maxWidth="846px">
            <Img mb="32px" borderRadius={"8px"} src={image} alt={title} />
            <Box mb={"16px"}>
              <Badge variant="stark_at_home">{post_type}</Badge>
            </Box>
            <Heading variant="h2" as="h2" color="heading-navy-fg">
              {title}
            </Heading>

            <Flex direction="column" gap="32px">
              {blocks.map((block, i) => (
                <Block key={i} block={block} locale={locale} />
              ))}
              <Block block={{ type: "markdown", body }} locale={locale} />
            </Flex>
            <Spacer height="32px" />
            <Divider />
            <Flex direction="row" gap="8px" mt="64px">
              {topic.map((item, i) => (
                <Tag key={i}> {item} </Tag>
              ))}
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
