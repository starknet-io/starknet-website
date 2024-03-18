import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface LatestAnnouncementCardProps {
  announcement: any;
}
const LatestAnnouncementCard = ({
  announcement,
}: LatestAnnouncementCardProps) => {
  const { image, title, buttonText, link } = announcement;
  return (
    <Box mb={6}>
      <Image src={image} alt={image} borderRadius={8} />
      <Text fontSize="14px" fontWeight={600} mt={3} mb={2}>
        {title}
      </Text>
      <Link href={link} color="Link">
        {buttonText} <ArrowForwardIcon boxSize="14px" mb={0.5} />
      </Link>
    </Box>
  );
};

export default LatestAnnouncementCard;
