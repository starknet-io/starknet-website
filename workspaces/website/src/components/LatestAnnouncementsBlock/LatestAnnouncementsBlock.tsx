import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import { LatestAnnouncements } from "@starknet-io/cms-data/src/settings/latest-announcements";

interface NavbarStickyBannerProps {
  readonly list: readonly LatestAnnouncements[];
}

const LatestAnnouncementsBlock = ({ list }: NavbarStickyBannerProps) => {
  const gtmEvent = (target: string) =>
    window.gtag?.("event", target, { event_category: "engagement" });

  const onReadMore = () => gtmEvent("Latest_announcement_read_more");
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      top={{ base: "unset", lg: "224px" }}
      right={{ base: "unset", lg: "32px" }}
      width={{ base: "100%", lg: "225px" }}
      mt={{ base: 6, lg: "unset" }}
      mb={{ base: 6, lg: "unset" }}
      p={3}
      gap={6}
      backgroundColor="surface"
      borderRadius={8}
      zIndex={{ base: "unset", lg: 100 }}
    >
      <Heading as="h5" fontSize="18px" fontWeight={600} textAlign="left">
        Latest announcements
      </Heading>
      <Box display="flex" flexDir={{ base: "row", lg: "column" }} gap={4}>
        {list.map((item) => (
          <Box mb={6}>
            <Image src={item.image} alt={item.image} borderRadius={8} />
            <Text fontSize="14px" fontWeight={600} mt={3} mb={2}>
              {item.text}
            </Text>
            <Link href={item.buttonLink} color="Link" onClick={onReadMore}>
              {item.buttonText} -{">"}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LatestAnnouncementsBlock;
