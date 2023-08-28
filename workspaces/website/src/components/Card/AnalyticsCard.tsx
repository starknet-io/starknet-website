import { Box } from "@chakra-ui/react";
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

  return (
    <CardGradientBorder
      display="inline-block"
      borderSx={{
        borderColor: "transparent",
        boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <Box p="2xl" width="288px" bg={bg}>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          gap="3xl"
        >
          {type === "twitter" && (
            <SiTwitter size="48px" fill="#0C0C4F" />
          )}
          {type === "discord" && (
            <SiDiscord size="48px" fill="#0C0C4F" />
          )}
          <Box display="flex" flexDir="column" gap="4px">
            <Heading
              variant="h5"
              fontSize="64px"
              lineHeight="80px"
              fontWeight={600}
              color="#0C0C4F"
            >
              {formatAnalyticsNumber(socialMedia[type].followersCount)}
            </Heading>
            <Box
              fontSize={18}
              lineHeight="32px"
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
