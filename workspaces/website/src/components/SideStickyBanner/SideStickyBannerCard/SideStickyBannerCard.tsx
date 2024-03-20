import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface LatestAnnouncementCardProps {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}
const SideStickyBannerCard = ({
  image,
  text,
  buttonText,
  buttonLink,
}: LatestAnnouncementCardProps) => {
  return (
    <Box mb={6}>
      <Image src={image} alt={image} borderRadius={8} />
      <Text fontSize="14px" fontWeight={600} mt={3} mb={2}>
        {text}
      </Text>
      <Link href={buttonLink} color="Link">
        {buttonText} <ArrowForwardIcon boxSize="14px" mb={0.5} />
      </Link>
    </Box>
  );
};

export default SideStickyBannerCard;
