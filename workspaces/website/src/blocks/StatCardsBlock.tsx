import { Grid, Box } from "@chakra-ui/react";
import { StatCardsBlock as StatCardsBlockType } from "@starknet-io/cms-data/src/pages";
import { StatsCard } from "@ui/Card/StatsCard";

export const StatCardsBlock = (_: StatCardsBlockType) => {
  return (
    <Box
      background="url(/assets/HomepagePattern.svg)"
      backgroundSize="100% 50%"
      backgroundRepeat="repeat-y"
      paddingBottom="3666px"
      marginBottom="-3666px"
    >
      <Grid
        gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap="32px"
        maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
        px={{
          base: "page.left-right.base",
          md: "page.left-right.md",
        }}
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
    </Box>
  );
};
