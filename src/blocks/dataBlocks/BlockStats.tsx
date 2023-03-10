import { Box } from "src/libs/chakra-ui";
import { Heading } from "@ui/Typography/Heading";
import React from "react";
import { BlockCards } from "../BlockCards";
import { StatCard } from "../cards/StatCard";

type Props = {};

const stats = [
  { title: "Transactions today", stat: "465,135" },
  { title: "Transactions today", stat: "28,122" },
  { title: "Transactions today", stat: "13,143" },
  { title: "Transactions today", stat: "98,109" },
];

export const BlockStats = (props: Props) => {
  return (
    <Box>
      <Heading
        variant="h2"
        color="heading-navy-fg"
        size="xl"
        mb="56px"
        fontWeight="extrabold"
      >
        Starknet today
      </Heading>
      <BlockCards base={1} md={2} lg={4}>
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} stat={stat.stat} />
        ))}
      </BlockCards>
    </Box>
  );
};
