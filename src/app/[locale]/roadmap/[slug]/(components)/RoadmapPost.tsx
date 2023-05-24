"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RoadmapPost as RoadmapPostType } from "workspaces/cms-data/src/roadmap";

export default function RoadmapPost({
  roadmapPost,
  locale,
}: {
  roadmapPost: RoadmapPostType;
  locale: string;
}) {
  return (
    <Box>
      <Link href={`/${locale}/roadmap`}>Back to Roadmaps</Link>
      <Box mt="20px">{roadmapPost.title}</Box>
      <Box>{roadmapPost.short_desc}</Box>
    </Box>
  );
}
