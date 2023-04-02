"use client";

import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { loadScript } from "src/utils/utils";
import { CMSConfig } from "../(config)/config";
// import { UUIDWidget } from "../static-cms/widgets/uuid";
// import { YoutubeWidget } from "../static-cms/widgets/youtube";

interface Props {
  readonly backendBranch: string;
}

// declare global {
//   interface Window {
//     CMS?: typeof import("@staticcms/core").default;
//     react?: typeof React;
//     "react-dom"?: typeof ReactDOM;
//   }
// }

export default function NetlifyCMSPage({ backendBranch }: Props) {
  React.useEffect(() => {
    void (async () => {
      const CMS = (await import("netlify-cms-app")).default;

      // CMS.registerWidget([UUIDWidget(), YoutubeWidget()]);

      // cms.registerWidget([
      //   NetlifyCmsWidgetUUID.Widget(),
      //   NetlifyCmsWidgetYouTube.Widget(),
      // ]);

      // // if (process.env.NODE_ENV === "development") {
      // //   config.local_backend = true;
      // // }
      console.log(backendBranch);
      CMS.init({
        config: {
          ...CMSConfig,
          backend: {
            ...CMSConfig.backend,
            branch: backendBranch,
          },
        },
      });
    })();
  }, [backendBranch]);

  return (
    <style
      // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: css,
      }}
    />
  );
}

const css = `
  .cms-wrapper  {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;
