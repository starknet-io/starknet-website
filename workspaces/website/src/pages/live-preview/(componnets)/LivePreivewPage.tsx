import { Box } from "@chakra-ui/react";
import { Category } from "@starknet-io/cms-data/src/categories";
import { Topic } from "@starknet-io/cms-data/src/topics";
import usePreviewData, { CustomPreviewType } from "./usePreviewData";
import EventCard from "src/pages/events/EventCard";
import { isUpcomingEvent } from "src/pages/events/utils";
import JobsCard from "src/pages/jobs/JobsCard";
import TutorialsCard from "src/pages/tutorials/TutorialsCard";
import PostByCategory from "src/pages/posts/PostByCategory";
import CMSPage from "src/pages/(components)/CMSPage";
import { ThemeProvider } from "src/renderer/ThemeProvider";

export interface Props {
  readonly categories: readonly Category[];
  readonly topics: readonly Topic[];
}

export default function LivePreivewPage({
  topics,
  categories,
}: Props) {
  const data = usePreviewData();

  return (
    <ThemeProvider>
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
          category={categories.find((c) => c.id === data.payload.category)!}
        />
      )}
      {data.type === CustomPreviewType.PAGE && (
        <CMSPage
          data={data.payload}
          locale="en"
        />
      )}
    </div>
    </ThemeProvider>
  );
}
