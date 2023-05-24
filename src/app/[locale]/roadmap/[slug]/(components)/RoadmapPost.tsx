"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function RoadmapPost({ roadmapPost, locale }: any) {
  return (
    <Box>
      <Link href={`/${locale}/roadmap`}>Back to Roadmaps</Link>
      <Box mt="20px">{roadmapPost.title}</Box>
      <Box>{roadmapPost.description}</Box>
    </Box>
  );
}
