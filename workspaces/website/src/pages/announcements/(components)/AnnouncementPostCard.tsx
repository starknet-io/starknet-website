import { Card, CardBody, Img } from "@chakra-ui/react";
import { AnnouncementDetails } from "@starknet-io/cms-data/src/announcements";
import { Badge } from "@ui/Badge";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";

type AnnouncementPostCardProps = {
  post?: AnnouncementDetails;
  locale: string;
};
export default function AnnouncementPostCard({
  post,
  locale,
}: AnnouncementPostCardProps) {
  return (
    <Card as='a' href={`/${locale}/announcements/${post?.slug}`}>
      <Img
        objectFit="cover"
        src={post?.image}
        alt="Chakra UI"
        width="full"
        height="full"
      />
      <CardBody>
        <Badge variant="community_and_events">{post?.badge}</Badge>
        <Heading my="4" variant="h4">{post?.title}</Heading>
        <Text size="lg">{post?.description}</Text>
      </CardBody>
    </Card>
  );
}
