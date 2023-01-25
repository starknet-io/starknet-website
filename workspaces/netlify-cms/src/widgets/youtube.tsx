import React from "react";
import { v4 as uuidv4 } from "uuid";

// @ts-expect-error
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { CMS, CmsWidgetControlProps } from "netlify-cms-core";

function Control(props: CmsWidgetControlProps & any) {
  return (
    <input
      type="text"
      id={props.forID}
      className={props.classNameWrapper}
      value={props.value || uuidv4()}
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

export function registerWidget(cms: CMS) {
  cms.registerWidget("youtube", Control, Preview);
}
