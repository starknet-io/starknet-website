import { Grid, Flex } from "@chakra-ui/react";
import { Card, CardImg, CardBody, CardLink, CardTitle } from "@ui/Card/Card";
import { StatsCard } from "@ui/Card/StatsCard";

export const StatCardsBlock = () => {
  return (
    <Grid
      gridTemplateColumns={[
        "1fr",
        "1fr",
        "repeat(2, 1fr)",
        "repeat(4, 1fr)"
      ]}
      gap="32px"
      maxW={{ base: "1296px", md: "1312px" }}
      px={{ base: "16px", md: "32px" }}
      width="100%"
      m="0 auto"
    >
      <StatsCard title="TPS" stat="2.76" />
      <StatsCard
        title="Cumulative new addresses "
        stat="67,505"
        tooltip="I am a very long tooltip, longer than the box itself"
      />
      <StatsCard title="Average block time" stat="2min" />
      <StatsCard title="Value locked in bridge" stat="70.4M+" />
    </Grid>
  )
};
