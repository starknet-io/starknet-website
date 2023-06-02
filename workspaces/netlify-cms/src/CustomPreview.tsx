import React, { useEffect, useRef } from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";
import { useWindowSize } from "./useWindowSize";
import { convertStringTagsToArray } from "@starknet-io/cms-utils/src/index";

const livePreviewHost = import.meta.env.VITE_LIVE_PREVIEW_HOST
  ? import.meta.env.VITE_LIVE_PREVIEW_HOST
  : import.meta.env.VITE_GIT_BRANCH_NAME === "production"
  ? "https://www.starknet.io"
  : "https://starknet-website-dev.vercel.app";

export enum CustomPreviewType {
  EVENTS = "EVENTS",
  JOBS = "JOBS",
  TUTORIALS = "TUTORIALS",
  POST = "POST",
  PAGE = "PAGE",
}

type CustomPreviewProps = {
  entry: PreviewTemplateComponentProps["entry"];
  type: CustomPreviewType;
  getAsset: PreviewTemplateComponentProps["getAsset"];
};

async function toDataURL(src: string) {
  return new Promise((resolve) => {
    var image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = function () {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d")!;
      canvas.height = image.naturalHeight;
      canvas.width = image.naturalWidth;
      context.drawImage(image, 0, 0);
      var dataURL = canvas.toDataURL("image/jpeg");
      resolve(dataURL);
    };
    image.src = src;
  });
}

export default function CustomPreview(props: CustomPreviewProps) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [refresh, setRefresh] = React.useState(0);
  const { height } = useWindowSize();
  const { type, entry, getAsset } = props;

  useEffect(() => {
    let data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(["data", "image"]);
    var asset = getAsset(image);

    const sendDataToLivePreviewRendere = async () => {
      if (image && asset?.url) {
        if (asset.path === "empty.svg") {
          data.image = "";
        } else if (asset.fileObj) {
          data.image = await toDataURL(URL.createObjectURL(asset.fileObj));
        } else {
          data.image = image.replace("public", "");
        }
      }

      if (type === CustomPreviewType.TUTORIALS) {
        data.tags = convertStringTagsToArray(data.tags);
      }

      ref.current?.contentWindow?.postMessage(
        {
          type,
          payload: data,
        },
        "*"
      );
    };

    sendDataToLivePreviewRendere();
  }, [type, entry, getAsset, refresh]);

  useEffect(() => {
    window.addEventListener(
      "message",
      function (message: MessageEvent<{ type: string }>) {
        if (message.data.type == "preview-loaded") {
          setRefresh((p) => p + 1);
        }
      },
      false
    );
  }, []);

  return (
    <div>
      <iframe
        ref={ref}
        width="100%"
        height={height ? height - 100 : 500}
        src={`${livePreviewHost}/live-preview?type=${props.type}`}
        title="Live preview"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
