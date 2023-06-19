import { useState } from "react";

// @ts-expect-error
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { CmsWidgetControlProps } from "netlify-cms-core";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://starknet-website.vercel.app/api";

function Control(props: CmsWidgetControlProps & any) {

  return (
    <div style={{ display: "none" }}></div>
  );
}

function Preview({ value }: { value?: any }) {
  return (
    <WidgetPreviewContainer style={{ display: "none" }}>
      <div style={{ display: "none" }}></div>
    </WidgetPreviewContainer>
  );
}

function Widget(opts = {}) {
  return {
    name: "month",
    controlComponent: Control,
    previewComponent: Preview,
    // schema,
    ...opts,
  };
}

export const NetlifyCmsWidgetMonth = {
  Widget,
  controlComponent: Control,
  previewComponent: Preview,
};

export default NetlifyCmsWidgetMonth;
