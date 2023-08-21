import { Box, Flex, Img, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
type Props = {
  readonly seo: {
    heroText: string;
  };
};

export const PromoBlock = ({ seo }: Props) => {
  return (
    <Box
      bg="linear-gradient(209deg, #040E56 0%, #412EB7 44.79%, #EC796B 100%)"
      mt="-346px"
      sx={{
        clipPath: "polygon(0 10vw,100% 0,100% calc(100% - 10vw),0 100%)",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/assets/promo-bg.svg)",
          backgroundSize: "100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          height: 420
        }}
      >
        <Box
          maxW={{ base: "1296px", md: "1312px" }}
          px={{ base: "16px", md: "32px" }}
          py="120px"
          m="0 auto"
          sx={{
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Heading variant="h3" color="white">Starknet Summit 2023</Heading>
          <Flex direction="row">
            <Text variant="cardBody">San Francisco</Text>
            <Text variant="cardBody">Aug 31st</Text>
            <Button variant="outline">Get Tickets</Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
