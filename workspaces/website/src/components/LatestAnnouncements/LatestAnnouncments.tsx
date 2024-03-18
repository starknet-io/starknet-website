import { Box, Heading } from "@chakra-ui/react";
import LatestAnnouncementCard from "./LatestAnnouncementCard/LatestAnnouncementCard";

const array = [
  {
    title: "What are onramps and cross rollup bridges?",
    buttonText: "see more",
    link: "",
    image:
      "https://s3-alpha-sig.figma.com/img/4f25/c2db/258212229ef560d9d1532f86afece898?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNRLkOJFL7kX7dw3SFz9~oJT5-lOeiAaUN2K~hkoyIWl7~ywwXn-7H4QFYTPnfI2xuPlwFWq2PwE4nS13bCD--1LU9fn7Qvj5tVwQH2C4412u1KvAyDArz1B7RQKLISYU799PhMVyPHrMUJ875RGJJrG515m~b~pzoes0zLE96qkYJxdliOxXTbH0C5kz2ceD~er-6eUCx7eYeMWBWLgwgmIwpsxXx8-aceuuMzz9O6rN54fhiGMjMpXF-YfMdQSi1Mmng2q3lwH7pIAgRxgMlXFSZHRnea3VNm5gkL6PBtjdUx8kaROpx7ryVcYBiGuRe5Olvji9rLl8rqeUa9bdA__",
  },
  {
    title: "What are onramps and cross rollup bridges?",
    buttonText: "see more",
    link: "",
    image:
      "https://s3-alpha-sig.figma.com/img/4f25/c2db/258212229ef560d9d1532f86afece898?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNRLkOJFL7kX7dw3SFz9~oJT5-lOeiAaUN2K~hkoyIWl7~ywwXn-7H4QFYTPnfI2xuPlwFWq2PwE4nS13bCD--1LU9fn7Qvj5tVwQH2C4412u1KvAyDArz1B7RQKLISYU799PhMVyPHrMUJ875RGJJrG515m~b~pzoes0zLE96qkYJxdliOxXTbH0C5kz2ceD~er-6eUCx7eYeMWBWLgwgmIwpsxXx8-aceuuMzz9O6rN54fhiGMjMpXF-YfMdQSi1Mmng2q3lwH7pIAgRxgMlXFSZHRnea3VNm5gkL6PBtjdUx8kaROpx7ryVcYBiGuRe5Olvji9rLl8rqeUa9bdA__",
  },
];

const LatestAnnouncements = () => {
  return (
    <Box
      position={{ xs: "relative", md: "relative", lg: "absolute" }}
      top={{ xs: "unset", md: "unset", lg: "224px" }}
      right={{ xs: "unset", md: "unset", lg: "32px" }}
      width={{ xs: "100%", md: "100%", lg: "225px" }}
      mt={{ base: 6, lg: "unset" }}
      p={3}
      gap={6}
      backgroundColor="surface"
      borderRadius={8}
      zIndex={{ sm: "unset", md: "unset", lg: 100 }}
    >
      <Heading as="h5" fontSize="18px" fontWeight={600} textAlign="left">
        Latest announcements
      </Heading>
      <Box
        display="flex"
        flexDir={{ xs: "row", sm: "row", md: "row", lg: "column" }}
        gap={4}
      >
        {array &&
          array.map((announcement) => (
            <LatestAnnouncementCard announcement={announcement} />
          ))}
      </Box>
    </Box>
  );
};

export default LatestAnnouncements;
