import { useEffect, useState } from "react";
import { JobsHit } from "src/app/[locale]/jobs/(components)/JobsPage";
import { Event } from "@starknet-io/cms-data/src/events";

export enum CustomPreviewType {
  EVENTS = "EVENTS",
  JOBS = "JOBS",
}
type PreviewData =
  | {
      type: CustomPreviewType.EVENTS;
      payload: Event;
    }
  | {
      type: CustomPreviewType.JOBS;
      payload: JobsHit;
    }
  | {
      type: "";
      payload: null;
    };

export default function usePreviewData() {
  const [data, setData] = useState<PreviewData>({
    type: "",
    payload: null,
  });

  useEffect(() => {
    window.addEventListener(
      "message",
      function (message: MessageEvent<PreviewData>) {
        // TODO: Do we need to check the origin?
        // var origin = message.origin || message.originalEvent.origin; // For Chrome, the origin property is in the message.originalEvent object.
        // if (origin !== "") return;
        console.log("message", message);
        if (typeof message.data == "object") {
          // Do something with message.data.value;
          if (message.data.type === CustomPreviewType.EVENTS) {
            setData({
              type: CustomPreviewType.EVENTS,
              payload: message.data.payload,
            });
          }
          if (message.data.type === CustomPreviewType.JOBS) {
            setData({
              type: CustomPreviewType.JOBS,
              payload: message.data.payload,
            });
          }
        }
      },
      false
    );
  }, []);

  return data;
}
