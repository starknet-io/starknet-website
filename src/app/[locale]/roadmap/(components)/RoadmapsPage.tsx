"use client";

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RoadmapPost } from "workspaces/cms-data/src/roadmap";
import SubscribeModal from "../SubscribeModal";

export default function RoadmapsPage({
  roadmapPosts,
  locale,
}: {
  roadmapPosts: readonly RoadmapPost[];
  locale: string;
}) {
  return (
    <Box>
      <SubscribeModal />
      <Text>Roadmap Items</Text>
      <Box display="flex" flexDirection="column" gap="20px" mt="20px">
        {roadmapPosts.map((post: any) => (
          <Link href={`/${locale}/roadmap/${post.slug}`} key={post.slug}>
            {post.title}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
