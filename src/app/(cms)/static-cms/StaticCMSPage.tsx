"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { loadScript } from "src/utils/utils";
import { CMSConfig } from "@starknet-io/cms-config/src/main";
import { UUIDWidget } from "@starknet-io/static-cms-widgets/src/uuid";
import { YoutubeWidget } from "@starknet-io/static-cms-widgets/src/youtube";

interface Props {
  readonly backendBranch: string;
}

declare global {
  interface Window {
    CMS?: typeof import("@staticcms/core").default;
    react?: typeof React;
    "react-dom"?: typeof ReactDOM;
  }
}

export default function CMSPage({ backendBranch }: Props) {
  React.useEffect(() => {
    void (async () => {
      window["react"] = React;
      window["react-dom"] = ReactDOM;

      await loadScript(
        "https://unpkg.com/@staticcms/core@1.2.14/dist/static-cms-core.js"
      );

      // if (process.env.NODE_ENV === "development") {
      //   config.local_backend = true;
      // }

      window.CMS!.registerWidget([UUIDWidget(), YoutubeWidget()]);

      window.CMS!.init({
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
