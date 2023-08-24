import { Box, Flex, Img, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { CardGradientBorder } from "@ui/Card/components/CardGradientBorder";

type Props = {
  readonly seo: {
    heroText: string;
  };
};
import { Intro } from "./Intro";
import { navigate } from "vite-plugin-ssr/client/router";

export const HomepageHero = ({ seo }: Props) => {
  return (
    <>
      <Box
        as="section"
        pt="46px"
        pb="93px"
        bg="#eaeaea"
        minHeight="600px"
        _dark={{
          bgGradient:
            "linear(0.39deg, #3F1838 -0.96%, #110751 44.39%, #171B31 100.23%)",
        }}
        bgGradient="linear(0.59deg, #0C0C4F 0.97%, #0C0C4F 26.24%, #060625 99.96%)"
        position="relative"
        mt="-24px"
        sx={{
          overflow: "visible",
          marginTop: "-150px",
          paddingTop: "256px",
          clipPath: "polygon(0 0,100% 0,100% calc(100% - 14vw),0 100%)",
          "& iframe": {
            position: "absolute",
            top: "-215px",
            right: "-300px",
            minWidth: "calc(100% + 400px)",
            height: "140%",
            border: "none",
            zIndex: -1
          }
        }}
      >
        <iframe width="2000" height="1025" src="https://rive.app/s/l5ivPhccukGcLoezhwqWyQ/embed"></iframe>
        <Box
          zIndex={2}
          minHeight="600px"
          maxW={{ base: "1296px", md: "1312px" }}
          px={{ base: "16px", md: "32px" }}
          mx="auto"
        >
          <Flex
            align="flex-start"
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            // paddingBottom="33px"
            // mb="56px"
          >
            <Box
              position="relative"
              flex="1"
              pt="0"
              order={{ base: 1, lg: 0 }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Heading
                variant="h1hero"
                color="hero-subtitle-fg"
                lineHeight="120%"
                mt={{ base: "0", lg: "-20px" }}
                fontWeight="500"
              >
                Ethereum’s next<br/> leap in <Intro />
              </Heading>
              <Text
                color="hero-subtitle-fg"
                mt="28px"
                fontSize="20px"
                lineHeight="36px"
                fontWeight="500"
                dangerouslySetInnerHTML={{ __html: seo.heroText }}
              />

              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="4"
                mt="32px"
                position={{ base: "relative", md: "relative" }}
                zIndex={4}
              >
                <Box
                  sx={{
                    background: "linear-gradient(78deg, #FFFDD8 -10%, #8BF3F9 40%, #EC796B 75%, #D672EF 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                    border: "1px solid transparent",
                    borderRadius: "8px"
                  }}
                >
                  <Button
                    onClick={() => navigate("/en/developers")}
                    variant="solid"
                    sx={{
                      bg: "#0C0C4F"
                    }}
                  >
                    Build on Starknet
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box
              zIndex={0}
              order={{ base: 0, lg: 1 }}
              // boxSize={{ base: "20", lg: "8" }}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};
