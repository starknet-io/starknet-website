import React, { useEffect, useRef } from "react";
import { PreviewTemplateComponentProps } from "netlify-cms-core";
import { useWindowSize } from "./useWindowSize";
import { convertStringTagsToArray } from "@starknet-io/cms-utils/src/index";
import { TopLevelBlock } from "@starknet-io/cms-data/src/pages";

const livePreviewHost =
  import.meta.env.VITE_GIT_BRANCH_NAME === "production"
    ? "https://www.starknet.io"
    : import.meta.env.VITE_LIVE_PREVIEW_URL ?? "http://localhost:3000";

export enum CustomPreviewType {
  EVENTS = "EVENTS",
  JOBS = "JOBS",
  TUTORIALS = "TUTORIALS",
  POST = "POST",
  PAGE = "PAGE",
  ROADMAP_POST = "ROADMAP_POST",
  ROADMAP_VERSION = "ROADMAP_VERSION",
  ANNOUNCEMENTS_POST = "ANNOUNCEMENTS_POST",
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

  const fixImagePreview = async (_item: any, key = "image") => {
    const item = { ..._item };
    const asset = getAsset(item[key]);
    if (item[key] && asset.url) {
      if (asset.path === "empty.svg") {
        item[key] = "";
      } else if (asset.fileObj) {
        item[key] = await toDataURL(URL.createObjectURL(asset.fileObj));
      } else {
        item[key] = item?.[key]?.replace("public", "");
      }
    }

    return item;
  };

  useEffect(() => {
    let data = entry.getIn(["data"]).toJS();
    var image = entry.getIn(["data", "image"]);
    var asset = getAsset(image);

    const fixTopLevelImagePreview = async (_data: any) => {
      if (image && asset?.url) {
        if (asset.path === "empty.svg") {
          _data.image = "";
        } else if (asset.fileObj) {
          _data.image = await toDataURL(URL.createObjectURL(asset.fileObj));
        } else {
          _data.image = image.replace("public", "");
        }
      }
    };

    const getDataWithBlobImage = async (blocks: TopLevelBlock[]) => {
      return Promise.all(
        blocks.map(async (block) => {
          if (
            block.type === "group" ||
            block.type === "flex_layout" ||
            block.type === "container"
          ) {
            //@ts-ignore
            block.blocks = await getDataWithBlobImage(block.blocks);
          } else if (block.type === "card_list") {
            //@ts-ignore
            block.card_list_items = await Promise.all(
              block.card_list_items.map(
                async (item) => await fixImagePreview(item)
              )
            );
          } else if (block.type === "image_icon_link_card") {
            block = await fixImagePreview(block, "icon");
          }

          return block;
        })
      );
    };

    const sendDataToLivePreviewRenderer = async (_data: any) => {
      fixTopLevelImagePreview(_data);

      if (type === CustomPreviewType.TUTORIALS) {
        _data.tags = convertStringTagsToArray(_data.tags);
      }

      ref.current?.contentWindow?.postMessage(
        {
          type,
          payload: _data,
        },
        "*"
      );
    };

    if (data.blocks) {
      getDataWithBlobImage([...data.blocks]).then((newBlocks) => {
        sendDataToLivePreviewRenderer({ ...data, blocks: newBlocks });
      });
    } else {
      sendDataToLivePreviewRenderer(data);
    }
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
