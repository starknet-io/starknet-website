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
      bg="linear-gradient(216deg, #040E56 0%, #040E56 30%, #412EB7 44.79%, #EC796B 100%)"
      mt="-372px"
      sx={{
        clipPath: "polygon(0 14vw,100% 0,100% calc(100% - 14vw),0 100%)",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/assets/promo-bg.svg)",
          backgroundSize: "100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          height: 530
        }}
      >
        <Box
          maxW={{ base: "1296px", md: "1312px" }}
          px={{ base: "16px", md: "32px" }}
          py="140px"
          m="0 auto"
          sx={{
            alignItems: { base: "flex-start", md: "flex-end" },
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Heading variant="h3" color="white" sx={{
            display: "flex",
            flexDirection: { base: "column", md: "row"},
            gap: "20px",
            fontSize: "42px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            letterSpacing: "0.84px",
            alignItems: { base: "flex-start", md: "center" },
            py: "16px",
            mb: "24px",
            borderTop: "1px solid var(--static-white-9, rgba(255, 255, 255, 0.44))",
            borderBottom: "1px solid var(--static-white-9, rgba(255, 255, 255, 0.44))"
          }}>
            <img src="/assets/STARKNETSummitLogo.svg" alt="Starknet" />
            <Box
              sx={{
                bg: "linear-gradient(119deg, #EC796B 0%, #D672EF 100%)",
                width: { base: "100%", md: "2px" },
                height: { base: "2px", md: "32px" }
              }}
            />
            <Box>Summit <Box sx={{display: "inline-block", fontWeight: 700}}>2023</Box></Box>
          </Heading>
          <Flex direction={{ base: "column", md: "row"}} alignItems={{ base: "flex-start", md: "center"}} gap="16px">
            <Text
              variant="body"
              color="white"
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                flexDirection: "row",
                height: "20px"
              }}
            >
              San Francisco <Box as="span" sx={{display: "inline-block", lineHeight: "20px", height: "20px", paddingLeft: "8px", borderLeft: "2px solid white"}}>Aug 31st</Box>
            </Text>
            <Button variant="outline" size="md" bg="#040E56" sx={{ borderColor: "white", color: "white", minWidth: "200px" }}>Get Tickets</Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
