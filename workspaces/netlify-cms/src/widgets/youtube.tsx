import React, { useState } from "react";

// @ts-expect-error
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { CmsWidgetControlProps } from "netlify-cms-core";

function youtubeVideoIdFromURL(url: string): string | undefined {
  const obj = new URL(url);

  if (obj.hostname === "www.youtube.com") {
    return obj.searchParams.get("v") ?? undefined;
  } else if (obj.hostname === "youtu.be") {
    return obj.pathname.slice(1);
  }
}

// const apiURL = "https://starknet-website.vercel.app/api/";
const apiURL = "http://localhost:3000/api/";

function Control(props: CmsWidgetControlProps & any) {
  const value = props.value ? props.value.url : "";
  const title = props.value?.video?.snippet?.title ?? null;

  const [fetching, setFetching] = useState<string | null>(null);

  async function updateYoutubeData() {
    try {
      if (!value) return;

      const id = youtubeVideoIdFromURL(value);

      if (!id) return;

      if (props.value?.video?.id === id) return;

      if (fetching === id) return;

      try {
        setFetching(id);

        const res = await fetch(
          `${apiURL}youtube?id=${encodeURIComponent(id)}`,
        );

        const data = await res.json();

        if (data.videos[0] == null) throw new Error("Video not found!");

        setFetching((fetching) => {
          if (fetching !== id) return fetching;

          props.onChange({ ...(props.value ?? {}), video: data.videos[0] });

          return null;
        });
      } catch (err) {
        props.onChange({ ...(props.value ?? {}), video: { id, err } });
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
        disabled={fetching != null}
        value={value}
        onChange={(e) => {
          props.onChange({ ...(props.value ?? {}), url: e.target.value });
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
