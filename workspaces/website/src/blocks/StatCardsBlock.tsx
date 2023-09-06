import { Grid, Box } from "@chakra-ui/react";
import { StatCardsBlock as StatCardsBlockType } from "@starknet-io/cms-data/src/pages";
import { StatsCard } from "@ui/Card/StatsCard";

const statData = [
  {
    title: "TPS",
    stat: "2.76",
    tooltip: "TPS",
  },
  {
    title: "Cumulative new addresses ",
    stat: "67,505",
    tooltip: "Cumulative new addresses ",
  },
  {
    title: "Average block time",
    stat: "2min",
    tooltip: "Average block time",
  },
  {
    title: "Value locked in bridge",
    stat: "70.4M+",
    tooltip: "Value locked in bridge",
  },
];
export const StatCardsBlock = (_: StatCardsBlockType) => {
  return (
    <Box
      paddingBottom="3666px"
      marginBottom="-3666px"
      style={{
        backgroundImage:
          "url(/assets/abstract-spot.svg), url(/assets/ethereum.svg)",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 800px, auto 800px",
      }}
    >
      <Box
        paddingBottom="666px"
        marginBottom="-666px"
        style={{
          backgroundImage:
            "url(/assets/abstract-spot.svg), url(/assets/ethereum.svg)",
          backgroundPosition: "left center, right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 800px, auto 800px",
        }}
      >
        <Grid
          gridTemplateColumns={[
            "1fr",
            "1fr",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={{
            base: "cards.gap-standard.base",
            md: "cards.gap-standard.md",
            lg: "cards.gap-standard.lg",
          }}
          maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
          px={{
            base: "page.left-right.base",
            md: "page.left-right.md",
          }}
          width="100%"
          m="0 auto"
        >
          {statData.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              tooltip={stat.tooltip}
              stat={stat.stat}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
