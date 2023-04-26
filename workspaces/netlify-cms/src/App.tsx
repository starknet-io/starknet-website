import React, { useEffect, useState } from "react";
import CMS from "netlify-cms-app";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import NetlifyCmsWidgetUUID from "@starknet-io/netlify-cms-widgets/src/uuid";
import NetlifyCmsWidgetYouTube from "@starknet-io/netlify-cms-widgets/src/youtube";
import NetlifyCmsWidgetTimeToConsume from "@starknet-io/netlify-cms-widgets/src/timeToConsume";

interface ReadingTimeWidgetProps {
  onChange: (value: number) => void;
  value: number;
  field: {
    get: (name: string) => any;
    toJS: () => any;
    set: (name: string, value: any) => any;
    delete: (name: string) => any;
    clear: () => any;
    withMutations: (mutator: (mutable: any) => any) => any;
  };
}

function timeToConsume(text: string): number {
  const wordsPerMinute = 200;
  const numOfWords = text.split(' ').length;
  const time = Math.ceil(numOfWords / wordsPerMinute);
  return time;
}

const ReadingTimeWidget: React.FC<ReadingTimeWidgetProps> = ({ onChange, value, field }) => {
  const [bodyText, setBodyText] = useState('');

  useEffect(() => {
    const timeToRead = timeToConsume(bodyText);
    onChange(timeToRead);
  }, [bodyText, onChange]);

  return (
    <div>
      <input
        type="hidden"
        value={value}
        onChange={(e) => setBodyText(e.target.value)}
        name={field.get('name')}
      />
      <p>Reading time: {value} minutes</p>
    </div>
  );
};

export default function App() {
  React.useEffect(() => {
    // if (process.env.NODE_ENV === "development") {
    //   config.local_backend = true;
    // }

    // @ts-expect-error
    CMS.registerWidget([
      NetlifyCmsWidgetUUID.Widget(),
      NetlifyCmsWidgetYouTube.Widget(),
      NetlifyCmsWidgetTimeToConsume.Widget()
    ]);
    const branch =
      import.meta.env.VITE_GIT_BRANCH_NAME ?? CMSConfig.backend.branch;

    console.log("branch", branch);

    CMS.init({
      config: {
        ...CMSConfig,
        backend: {
          ...CMSConfig.backend,
          branch,
        },
      },
    });
  }, []);

  return <div />;
}
