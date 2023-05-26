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
  const [refresh, setRefresh] = React.useState(false);
  const { height } = useWindowSize();

  useEffect(() => {
    const { entry } = props;
    let data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(["data", "image"]);
    var asset = props.getAsset(image);

    const sendDataToLivePreviewRendere = async () => {
      if (image && asset?.url) {
        if (asset.fileObj) {
          data.image = await toDataURL(URL.createObjectURL(asset.fileObj));
        } else {
          data.image = image.replace("public", "");
        }
      }

      if (props.type === CustomPreviewType.TUTORIALS) {
        data.tags = convertStringTagsToArray(data.tags);
      }

      ref.current?.contentWindow?.postMessage(
        {
          type: props.type,
          payload: data,
        },
        "*"
      );
    };

    sendDataToLivePreviewRendere();
  }, [props, refresh]);

  return (
    <div>
      <iframe
        ref={ref}
        width="100%"
        height={height ? height - 100 : 500}
        src={`${livePreviewHost}/live-preview?type=${props.type}`}
        title="Live preview"
        frameBorder="0"
        onLoad={() => {
          setTimeout(() => {
            setRefresh((prev) => !prev);
          }, 300);
        }}
      ></iframe>
    </div>
  );
}
