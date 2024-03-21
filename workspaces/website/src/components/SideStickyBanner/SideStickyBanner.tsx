import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavbarStickyBannerProps {
  children: ReactNode;
}

const SideStickyBanner = ({ children }: NavbarStickyBannerProps) => {
  return (
    <Box
      position={{ base: "relative", lg: "fixed" }}
      top={{ base: "unset", lg: "224px" }}
      right={{ base: "unset", lg: "32px" }}
      width={{ base: "100%", lg: "225px" }}
      mt={{ base: 6, lg: "unset" }}
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
        {children}
      </Box>
    </Box>
  );
};

export default SideStickyBanner;
