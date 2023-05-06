"use client";

import EventCard from "src/app/[locale]/events/(components)/EventCard";
import { isUpcomingEvent } from "src/app/[locale]/events/(components)/utils";
import JobsCard from "src/app/[locale]/jobs/(components)/JobsCard";
import usePreviewData from "./usePreviewData";

export enum CustomPreviewType {
  EVENTS = "EVENTS",
  JOBS = "JOBS",
}

export default function LivePreivewPage() {
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
    </div>
  );
}
