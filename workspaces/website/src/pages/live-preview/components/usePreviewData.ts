import { Event } from "@starknet-io/cms-data/src/events";
import { Page } from "@starknet-io/cms-data/src/pages";
import { Post } from "@starknet-io/cms-data/src/posts";
import { useEffect, useState } from "react";
import { JobsHit } from "src/pages/jobs/JobsPage";
import { Tutorial } from "@starknet-io/cms-data/src/tutorials";
import { RoadmapPost, RoadmapVersion } from "@starknet-io/cms-data/src/roadmap";

export enum CustomPreviewType {
  EVENTS = "EVENTS",
  JOBS = "JOBS",
  TUTORIALS = "TUTORIALS",
  POST = "POST",
  PAGE = "PAGE",
  ROADMAP_POST = "ROADMAP_POST",
  ROADMAP_VERSION = "ROADMAP_VERSION",
  NONE = "",
}
export type LivePreviewData =
  | {
      type: CustomPreviewType.EVENTS;
      payload: Event;
    }
  | {
      type: CustomPreviewType.JOBS;
      payload: JobsHit;
    }
  | {
      type: CustomPreviewType.TUTORIALS;
      payload: Tutorial;
    }
  | {
      type: CustomPreviewType.POST;
      payload: Post;
    }
  | {
      type: CustomPreviewType.PAGE;
      payload: Page;
    }
  | {
      type: CustomPreviewType.ROADMAP_POST;
      payload: RoadmapPost;
    }
  | {
      type: CustomPreviewType.ROADMAP_VERSION;
      payload: RoadmapVersion;
    }
  | {
      type: CustomPreviewType.NONE;
      payload: null;
    };

export default function usePreviewData() {
  const [data, setData] = useState<LivePreviewData>({
    type: CustomPreviewType.NONE,
    payload: null,
  });

  useEffect(() => {
    window.top?.postMessage(
      {
        type: "preview-loaded",
      },
      "*"
    );
  }, []);

  useEffect(() => {
    window.addEventListener(
      "message",
      function (message: MessageEvent<LivePreviewData>) {
        // TODO: Do we need to check the origin?
        // var origin = message.origin || message.originalEvent.origin; // For Chrome, the origin property is in the message.originalEvent object.
        // if (origin !== "") return;
        console.log("message", message);
        if (typeof message.data == "object") {
          // Do something with message.data.value;
          if (
            message.data.type &&
            Object.values(CustomPreviewType).includes(message.data.type)
          ) {
            setData({
              type: message.data.type as CustomPreviewType,
              payload: message.data.payload as any,
            });
          }
        }
      },
      false
    );
  }, []);

  return data;
}
