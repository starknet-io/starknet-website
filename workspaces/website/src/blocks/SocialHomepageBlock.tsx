import { Box, Flex } from "@chakra-ui/react";
import "./OutlineCardsStyle.css";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { AnalyticsCard } from "@ui/Card/AnalyticsCard";
import { SocialHomepageBlock as SocialHomepageBlockType } from "@starknet-io/cms-data/src/pages";

interface SocialHomepageBlockProps extends SocialHomepageBlockType {
  title: string;
  description: string;
}

const SocialHomepageBlock = ({
  title,
  description,
}: SocialHomepageBlockProps) => {
  const words = title?.split(" ");

  const firstWord = words[0];

  const restOfSentence = words.slice(1).join(" ");
  return (
    <Box>
      <Box
        maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
        px={{
          base: "page.left-right.base",
          md: "page.left-right.md",
        }}
        width="100%"
        m="0 auto"
        pt="10px"
      >
        <Heading
          variant="h1"
          as="h2"
          color="content.accent.value"
          sx={{
            fontWeight: "700",
            maxW: "835px",
            lineHeight: "106.25%",
            mb: "8px",
          }}
        >
          <Heading
            variant="h1"
            as="h2"
            color="content.danger"
            sx={{
              display: "inline-block",
            }}
          >
            {firstWord}
          </Heading>
          {` `}
          {restOfSentence}
        </Heading>
        <Text
          variant="body"
          color="content.accent.value"
          sx={{ maxW: "673px" }}
        >
          {description}
        </Text>
      </Box>
      <Box sx={{ zIndex: 2, position: "relative", height: { base: 800, lg: 545 }, mt: "80px" }}>
        <Box sx={{ position: "absolute", left: { base: "45%", md: "45%" } }}>
          <Box
            sx={{ position: "relative", left: { base: "-50%", md: "-45%" } }}
          >
            <Flex direction="row" gap="24px" overflow="visible" ml={{ base: "160px", lg: 0}}>
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaFirst.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSecond.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaThird.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <AnalyticsCard
                description="Followers on Social Media"
                type="twitter"
              />
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaFourth.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaFirstLast.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
            </Flex>
            <Flex direction="row" gap="24px" overflow="visible" my="24px" ml={{ base: "300px", lg: 0}}>
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaFifth.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSixth.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <AnalyticsCard
                type="discord"
                description="Followers on Social Media"
                bg="#FFFAD5"
              />
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSeventh.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSixth.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSecondLast.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
            </Flex>
            <Flex direction="row" gap="24px" overflow="visible" display={{ base: "flex", md: "none"}}>
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSecond.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSecond.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaFirst.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSecond.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 216, lg: 288 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaFirst.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
              <Box
                sx={{
                  width: { base: 302, lg: 423 },
                  height: { base: 192, lg: 260 },
                  backgroundImage: "/assets/socialMediaSecond.png",
                  backgroundSize: "cover",
                  borderRadius: "16px",
                  boxShadow: "0px 60px 70px -2px rgba(0, 0, 0, 0.08), 0px 1px 47px -3px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                }}
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialHomepageBlock;
