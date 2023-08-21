import { Box, Flex, Img, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
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
        minHeight="729px"
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
          clipPath: "polygon(0 0,100% 0,100% calc(100% - 10vw),0 100%)"
        }}
      >
        <Box
          zIndex={2}
          minHeight="729px"
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "48px", lg: "40px", xl: "56px" }}
        >
          <Flex
            align="flex-end"
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            // paddingBottom="33px"
            // mb="56px"
          >
            <Box
              top={{ lg: "-64px" }}
              position="relative"
              flex="1"
              pt="0"
              order={{ base: 1, lg: 0 }}
            >
              <Heading
                variant="h1hero"
                color="white"
                lineHeight="98.5px"
                mt={{ base: "0", lg: "-20px" }}
              >
                Ethereum’s next<br/> leap in <Intro />
              </Heading>
              <Text
                color="white"
                mt="5"
                fontSize="20px"
                fontWeight="500"
                dangerouslySetInnerHTML={{ __html: seo.heroText }}
              />

              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="4"
                mt="72px"
                position={{ base: "relative", md: "relative" }}
                zIndex={4}
              >
                <Button
                  onClick={() => navigate("/en/developers")}
                  minW="210px"
                  variant="outline"
                >
                  Build on Starknet
                </Button>
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
