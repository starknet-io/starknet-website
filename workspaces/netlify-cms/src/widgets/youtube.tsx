import React, { useState } from "react";

// @ts-expect-error
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { CmsWidgetControlProps } from "netlify-cms-core";

function youtubeVideoIdFromURL(url: string): string | undefined {
  try {
    const obj = new URL(url);

    if (obj.hostname === "www.youtube.com") {
      if (obj.searchParams.get("v")) return obj.searchParams.get("v")!;

      if (obj.pathname.startsWith("/live/")) {
        return obj.pathname.replace("/live/", "");
      }
    } else if (obj.hostname === "youtu.be") {
      return obj.pathname.slice(1);
    }
  } catch {
    console.log("youtubeVideoIdFromURL", url);
  }
}

const API_BASE_URL =
  process.env.API_BASE_URL ?? "https://starknet-website.vercel.app/api";

function Control(props: CmsWidgetControlProps & any) {
  const valueData =
    props.value && "toJSON" in props.value ? props.value.toJSON() : props.value;
  const value = valueData?.url ?? "";
  const title = valueData?.data?.snippet?.title ?? null;

  const [fetching, setFetching] = useState<string | null>(null);

  async function updateYoutubeData() {
    try {
      if (!value) return;

      const id = youtubeVideoIdFromURL(value);

      if (!id) return;

      if (valueData?.id === id) return;

      if (fetching === id) return;

      try {
        setFetching(id);

        const res = await fetch(
          `${API_BASE_URL}/youtube?id=${encodeURIComponent(id)}`,
        );

        const { data, message } = await res.json();

        if (message != null) throw new Error(message);
        if (data == null) throw new Error("Video not found!");

        setFetching((fetching) => {
          if (fetching !== id) return fetching;

          props.onChange({ url: value, id, data });

          return null;
        });
      } catch (err) {
        console.log(err);
        props.onChange({ url: value, id, data: undefined });
      }

      setFetching(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={props.classNameWrapper} style={{ padding: 0 }}>
      <input
        className={props.classNameWrapper}
        style={{
          padding: "16px 20px",
          border: "0",
        }}
        type="text"
        id={props.forID}
        value={value}
        onChange={(e) => {
          props.onChange({ ...(valueData ?? {}), url: e.target.value });
        }}
        onFocus={props.setActiveStyle}
        onBlur={(e) => {
          props.setInactiveStyle(e);

          updateYoutubeData();
        }}
      />

      <div
        style={{
          padding: "16px 20px",
        }}
      >
        {fetching
          ? `Fetching: ${fetching}`
          : title
          ? `Video: ${title}`
          : "No Video Data!"}
      </div>
    </div>
  );
}

function Preview({ value }: { value?: any }) {
  return (
    <WidgetPreviewContainer>
      <pre>{JSON.stringify(value, null, "  ")}</pre>
    </WidgetPreviewContainer>
  );
}

function Widget(opts = {}) {
  return {
    name: "youtube",
    controlComponent: Control,
    previewComponent: Preview,
    // schema,
    ...opts,
  };
}

export const NetlifyCmsWidgetUUID = {
  Widget,
  controlComponent: Control,
  previewComponent: Preview,
};

export default NetlifyCmsWidgetUUID;
