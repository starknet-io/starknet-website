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

type LivePreivewPageProps = {
  blocksDynamicData?: BlocksDynamicData;
  topics?: readonly Topic[];
};
export default function LivePreivewPage({
  blocksDynamicData,
  topics,
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
        <TutorialsCard hit={data.payload} />
      )}
      {data.type === CustomPreviewType.POST && blocksDynamicData && (
        <PostByCategory
          post={data.payload}
          category={{
            id: data.payload.category,
            name: data.payload.category,
            slug: data.payload.category,
          }}
          locale="en"
          topics={topics || []}
          blocksDynamicData={blocksDynamicData}
        />
      )}
      {data.type === CustomPreviewType.PAGE && blocksDynamicData && (
        <CMSPage
          data={data.payload}
          locale="en"
          blocksDynamicData={blocksDynamicData}
        />
      )}
    </div>
  );
}
