"use client";

import EventCard from "src/app/[locale]/events/(components)/EventCard";
import { isUpcomingEvent } from "src/app/[locale]/events/(components)/utils";
import JobsCard from "src/app/[locale]/jobs/(components)/JobsCard";
import usePreviewData, { CustomPreviewType } from "./usePreviewData";
import TutorialsCard from "src/app/[locale]/tutorials/(components)/TutorialsCard";
import PostByCategory from "src/app/[locale]/posts/[category]/(components)/PostByCategory";
import { BlocksDynamicData } from "src/app/[locale]/(components)/utils/getBlocksDynamicData";
import CMSPage from "src/app/[locale]/(components)/CMSPage";
import { Topic } from "workspaces/cms-data/src/topics";
import { Category } from "workspaces/cms-data/src/categories";
import { Box } from "@chakra-ui/react";
import RoadmapPost from "src/app/[locale]/roadmap/[slug]/(components)/RoadmapPost";
import { RoadmapVersion } from "workspaces/cms-data/src/roadmap";
import RoadmapPostVersion from "src/app/[locale]/roadmap/(components)/RoadmapPostVersion";

type LivePreivewPageProps = {
  blocksDynamicData: BlocksDynamicData;
  topics: readonly Topic[];
  categories: readonly Category[];
  roadmapVersions: readonly RoadmapVersion[];
};
export default function LivePreivewPage({
  blocksDynamicData,
  topics,
  categories,
  roadmapVersions,
}: LivePreivewPageProps) {
  const data = usePreviewData();

  return (
    <div className="preview-content">
      {data.type === CustomPreviewType.EVENTS && (
        <EventCard
          event={data.payload}
          isPastEvent={
            !isUpcomingEvent(
              data.payload?.start_date || "",
              data.payload?.end_date || ""
            )
          }
        />
      )}
      {data.type === CustomPreviewType.JOBS && <JobsCard hit={data.payload} />}
      {data.type === CustomPreviewType.TUTORIALS && (
        <Box maxW="400px">
          <TutorialsCard hit={data.payload} />
        </Box>
      )}
      {data.type === CustomPreviewType.POST && (
        <PostByCategory
          post={data.payload}
          locale="en"
          topics={topics || []}
          blocksDynamicData={blocksDynamicData}
          category={categories.find((c) => c.id === data.payload.category)!}
        />
      )}
      {data.type === CustomPreviewType.PAGE && (
        <CMSPage
          data={data.payload}
          locale="en"
          blocksDynamicData={blocksDynamicData}
        />
      )}
      {data.type === CustomPreviewType.ROADMAP_POST && (
        <RoadmapPost
          roadmapPost={data.payload}
          blocksDynamicData={blocksDynamicData}
          roadmapVersion={
            roadmapVersions.find((v) => v.version === data.payload.version)!
          }
          locale="en"
        />
      )}
      {data.type === CustomPreviewType.ROADMAP_VERSION && (
        <RoadmapPostVersion roadmapVersion={data.payload} />
      )}
    </div>
  );
}
