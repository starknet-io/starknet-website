import React, { useState, useEffect } from "react";
// @ts-expect-error
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { CmsWidgetControlProps } from "netlify-cms-core";

function Control(props: CmsWidgetControlProps & any) {
  const [bodyText, setBodyText] = useState("");

  useEffect(() => {
    const timeToRead = timeToConsume(bodyText);
    props.onChange(timeToRead);
  }, [bodyText, props]);

  return (
    <input
      type="hidden"
      id={props.forID}
      className={props.classNameWrapper}
      value={props.value}
      onChange={(e) => setBodyText(e.target.value)}
    />
  );
}

function Preview({ value }: { value?: number }) {
  return (
    <WidgetPreviewContainer>Reading time: {value} minutes</WidgetPreviewContainer>
  );
}

function timeToConsume(text: string): number {
  const wordsPerMinute = 200;
  const numOfWords = text.split(" ").length;
  const time = Math.ceil(numOfWords / wordsPerMinute);
  return time;
}

function Widget(opts = {}) {
  return {
    name: "timeToConsume",
    controlComponent: Control,
    previewComponent: Preview,
    ...opts,
  };
}

export const NetlifyCmsWidgetTimeToConsume = {
  Widget,
  controlComponent: Control,
  previewComponent: Preview,
};

export default NetlifyCmsWidgetTimeToConsume;