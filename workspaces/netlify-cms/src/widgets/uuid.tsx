import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// @ts-expect-error
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { CmsWidgetControlProps } from "netlify-cms-core";

function Control(props: CmsWidgetControlProps & any) {
  const [uuid] = useState(() => uuidv4());

  return (
    <input
      type="text"
      id={props.forID}
      className={props.classNameWrapper}
      value={props.value || uuid}
      disabled
      // onChange={(e) => props.onChange(e.target.value)}
      // onFocus={props.setActiveStyle}
      // onBlur={props.setInactiveStyle}
    />
  );
}

function Preview({ value }: { value?: string }) {
  return <WidgetPreviewContainer>{value}</WidgetPreviewContainer>;
}

function Widget(opts = {}) {
  return {
    name: "uuid",
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
