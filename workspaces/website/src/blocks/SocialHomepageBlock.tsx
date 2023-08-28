import { Box, Flex } from "@chakra-ui/react";
import './OutlineCardsStyle.css';
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { AnalyticsCard } from "@ui/Card/AnalyticsCard";

type SocialHomepageBlockProps = {
  title: string;
  description: string;
};

const SocialHomepageBlock = ({ title, description }: SocialHomepageBlockProps) => {
  const words = title?.split(' ');

  const firstWord = words[0];

  const restOfSentence = words.slice(1).join(' ');
  return (
    <Box >
        <Box maxW={{ base: "1296px", md: "1312px" }} px={{ base: "16px", md: "32px" }} width="100%" m="0 auto" pt="10px">
          <Heading
            variant="h1"
            as="h2"
            color="content.accent.value"
            sx={{
              fontWeight: "700",
              maxW: "865px",
              mb: "8px"
            }}>
              <Heading
                variant="h1"
                as="h2"
                color="content.danger"
                sx={{
                  display: "inline-block"
                }}
              >
                {firstWord}
              </Heading>
              {` `}{restOfSentence}
          </Heading>
          <Text variant="body" color="content.accent.value" sx={{ maxW: "673px" }}>{description}</Text>
        </Box>
        <Box sx={{ position: "relative", height: 535, mt: "80px" }}>
          <Box sx={{ position: "absolute", left: { base: "55%", md: "50%" } }}>
            <Box sx={{ position: "relative", left: { base: "-60%", md: "-55%" } }}>
              <Flex
                direction="row"
                gap="24px"
                overflow="visible"
              >
                <Box
                  sx={{
                    width: 288,
                    height: 255,
                    backgroundImage: "/assets/socialMediaFirst.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
                <Box
                  sx={{
                    width: 423,
                    height: 255,
                    backgroundImage: "/assets/socialMediaSecond.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
                <Box
                  sx={{
                    width: 288,
                    height: 255,
                    backgroundImage: "/assets/socialMediaThird.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
                <AnalyticsCard
                  description="Followers on Social Media"
                  type="twitter"
                />
                <Box
                  sx={{
                    width: 423,
                    height: 255,
                    backgroundImage: "/assets/socialMediaFourth.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
              </Flex>
              <Flex
                direction="row"
                gap="24px"
                overflow="visible"
                mt="24px"
              >
                <Box
                  sx={{
                    width: 423,
                    height: 255,
                    backgroundImage: "/assets/socialMediaFifth.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
                <Box
                  sx={{
                    width: 288,
                    height: 255,
                    backgroundImage: "/assets/socialMediaSixth.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
                <AnalyticsCard
                  type="discord"
                  description="Followers on Social Media"
                  bg="#FFFAD5"
                />
                <Box
                  sx={{
                    width: 423,
                    height: 255,
                    backgroundImage: "/assets/socialMediaSeventh.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
                <Box
                  sx={{
                    width: 288,
                    height: 255,
                    backgroundImage: "/assets/socialMediaSixth.png",
                    backgroundSize: "cover",
                    borderRadius: "16px"
                  }}
                />
              </Flex>
            </Box>
          </Box>
        </Box>
    </Box>
  )
};

export default SocialHomepageBlock;