import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Heading } from "@ui/Typography/Heading";
import { CardGradientBorder } from "./components/CardGradientBorder";
import { useAsync } from "react-streaming";
import { getSocialMediaData } from "@starknet-io/cms-data/src/getSocialMediaData";
import { usePageContext } from "src/renderer/PageContextProvider";
import { SiDiscord, SiTwitter } from "react-icons/si";
import formatAnalyticsNumber from "src/utils/formatAnalyticsNumber";

type Props = {
  type: "twitter" | "discord";
  description?: string;
  bg?: string;
};

export const AnalyticsCard = ({
  description = "Followers on Social Media",
  bg = "#F9F8F9",
  type = "twitter",
}: Props) => {
  const pageContext = usePageContext();
  const socialMedia = useAsync(["getSocialMediaData"], () =>
    getSocialMediaData(pageContext.context)
  );
  const size = useBreakpointValue({ base: "32px", lg: "48px" });
  return (
    <CardGradientBorder
      display="inline-block"
      borderSx={{
        borderColor: "transparent",
        boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <Box p={{ base: "xl", lg: "2xl" }} width={{ base: "216px", lg: "288px"}} height="100%" bg={bg}>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          gap="26px"
        >
          {type === "twitter" && (
            <SiTwitter size={size} fill="#0C0C4F" />
          )}
          {type === "discord" && (
            <SiDiscord size={size} fill="#0C0C4F" />
          )}
          <Box display="flex" flexDir="column" gap="4px">
            <Heading
              variant="h5"
              fontSize={{ base: "40px", lg: "64px" }}
              lineHeight={{ base: "120%", lg: "80px" }}
              fontWeight={600}
              color="#0C0C4F"
              mb="4px"
            >
              {formatAnalyticsNumber(socialMedia[type].followersCount)}
            </Heading>
            <Box
              fontSize={{ base: "12px", lg: "18px" }}
              lineHeight={{ base: "16px", lg: "32px" }}
              fontWeight={500}
              color="#0C0C4FB8"
            >
              {description}
            </Box>
          </Box>
        </Box>
      </Box>
    </CardGradientBorder>
  );
};
